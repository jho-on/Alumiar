import type { SQLiteDatabase } from 'expo-sqlite';
import * as Crypto from 'expo-crypto';

import {
    insert,
    deleteByTaskAndDate,
    selectByTaskAndDate,
    selectCompletedDays,
    selectAllCompletedDays,
} from '../repositories/TaskCompletionRepository';

export async function completeTask(
    db: SQLiteDatabase,
    taskId: string,
    date: string,
) {
    const id = Crypto.randomUUID();

    await insert(db, id, taskId, date);
}

export async function uncompleteTask(
    db: SQLiteDatabase,
    taskId: string,
    date: string,
) {
    await deleteByTaskAndDate(db, taskId, date);
}

export async function isCompleted(
    db: SQLiteDatabase,
    taskId: string,
    date: string,
) {
    const result = await selectByTaskAndDate(db, taskId, date);

    return result !== null;
}

export async function getCompletedDays(
    db: SQLiteDatabase,
    year: number,
    month: number,
): Promise<string[]> {
    const result = await selectCompletedDays(db, year, month);

    return result.map((row) => row.date);
}

export async function getAllCompletedDays(
    db: SQLiteDatabase,
): Promise<string[]> {
    const result = await selectAllCompletedDays(db);

    return result.map((row) => row.date);
}

export async function getLongestStreak(db: SQLiteDatabase): Promise<number> {
    const days = await getAllCompletedDays(db);

    if (days.length === 0) {
        return 0;
    }

    days.sort();

    let longest = 1;
    let current = 1;

    for (let i = 1; i < days.length; i++) {
        if (getDaysBetween(days[i - 1], days[i]) === 2) {
            current++;
            longest = Math.max(longest, current);
        } else {
            current = 1;
        }
    }

    return longest;
}

function getDaysBetween(start: string, end: string): number {
    const [startYear, startMonth, startDay] = start.split('-').map(Number);
    const [endYear, endMonth, endDay] = end.split('-').map(Number);

    const startDate = Date.UTC(startYear, startMonth - 1, startDay);
    const endDate = Date.UTC(endYear, endMonth - 1, endDay);

    return Math.floor((endDate - startDate) / (1000 * 60 * 60 * 24)) + 1;
}
