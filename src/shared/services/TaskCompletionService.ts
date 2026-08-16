import type { SQLiteDatabase } from 'expo-sqlite';
import * as Crypto from 'expo-crypto';

import {
    insert,
    deleteByTaskAndDate,
    selectByTaskAndDate,
    selectCompletedDays,
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
