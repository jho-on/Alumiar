import type { SQLiteDatabase } from 'expo-sqlite';
import {
    insert,
    selectAll,
    selectById,
    softDeleteById,
    updateById,
    getStatistics as getStatisticsRepository,
} from '../repositories/TaskRepository';
import * as Crypto from 'expo-crypto';
import { createEntry } from './RoutineHistoryService';
import { getAllCompletedDays, getLongestStreak } from './TaskCompletionService';

export async function createTask(
    db: SQLiteDatabase,
    title: string,
    date: string,
) {
    const id = Crypto.randomUUID();

    await insert(db, id, title, date);
    await createEntry(db, id, 'CREATE', date, undefined, title);
}

export async function getAll(db: SQLiteDatabase) {
    return await selectAll(db);
}

export async function getById(db: SQLiteDatabase, id: string) {
    return await selectById(db, id);
}

export async function markAsDeleted(
    db: SQLiteDatabase,
    id: string,
    date: string,
) {
    const task = await getById(db, id);

    if (!task) {
        throw new Error(`Task ${id} not found`);
    }

    await softDeleteById(db, id, date);

    await createEntry(db, id, 'DELETE', date, task.title);
}

export async function changeTitleById(
    db: SQLiteDatabase,
    id: string,
    newTitle: string,
    date: string,
) {
    const task = await getById(db, id);

    if (!task) {
        await createEntry(db, id, 'UPDATE', date, newTitle);

        throw new Error(`Task ${id} not found`);
    }

    await updateById(db, id, newTitle, date);
    await createEntry(db, id, 'UPDATE', date, task.title, newTitle);
}

export async function getStatistics(db: SQLiteDatabase) {
    const data = await getStatisticsRepository(db);

    if (!data.firstTaskDate) {
        return {
            totalDays: 0,
            completedDays: 0,
            completionRate: 0,
            totalTasks: 0,
            completedTasks: data.completedTasks,
            longestStreak: 0,
        };
    }

    const today = new Date();
    const longestStreak = await getLongestStreak(db);

    const todayString = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;

    const endDate =
        data.lastCompletionDate && data.lastCompletionDate > todayString
            ? data.lastCompletionDate
            : todayString;

    const totalDays = getDaysBetween(data.firstTaskDate, endDate);

    const completedDays = (await getAllCompletedDays(db)).length;

    const totalTasks = data.tasks.reduce((total, task) => {
        const taskEndDate = task.deletedAt ?? endDate;

        return total + getDaysBetween(task.createdAt, taskEndDate);
    }, 0);

    const completionRate =
        totalDays > 0
            ? Number(((completedDays / totalDays) * 100).toFixed(2))
            : 0;

    return {
        totalDays,
        completedDays,
        completionRate,
        totalTasks,
        completedTasks: data.completedTasks,
        longestStreak,
    };
}

function getDaysBetween(start: string, end: string): number {
    const [startYear, startMonth, startDay] = start.split('-').map(Number);

    const [endYear, endMonth, endDay] = end.split('-').map(Number);

    const startDate = Date.UTC(startYear, startMonth - 1, startDay);

    const endDate = Date.UTC(endYear, endMonth - 1, endDay);

    return Math.floor((endDate - startDate) / (1000 * 60 * 60 * 24)) + 1;
}
