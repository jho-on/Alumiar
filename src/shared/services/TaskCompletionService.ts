import type { SQLiteDatabase } from 'expo-sqlite';
import * as Crypto from 'expo-crypto';

import {
    insert,
    deleteByTaskAndDate,
    selectByTaskAndDate,
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
