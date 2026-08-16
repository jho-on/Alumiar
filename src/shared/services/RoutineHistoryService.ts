import type { SQLiteDatabase } from 'expo-sqlite';
import {
    insert,
    selectAll,
    selectById,
} from '../repositories/RoutineHistoryRepository';
import * as Crypto from 'expo-crypto';

type HistoryType = 'CREATE' | 'UPDATE' | 'DELETE';

export async function createEntry(
    db: SQLiteDatabase,
    taskId: string,
    type: HistoryType,
) {
    const id = Crypto.randomUUID();
    const timestamp = new Date().toISOString();

    await insert(db, id, taskId, type, timestamp);
}

export async function getAll(db: SQLiteDatabase) {
    return await selectAll(db);
}

export async function getById(db: SQLiteDatabase, id: string) {
    return await selectById(db, id);
}
