import type { SQLiteDatabase } from 'expo-sqlite';
import {
    insert,
    selectAll,
    selectById,
} from '../repositories/RoutineHistoryRepository';
import * as Crypto from 'expo-crypto';
import { HistoryType, RoutineHistory } from '../types/HistoryEntry';

export async function createEntry(
    db: SQLiteDatabase,
    taskId: string,
    type: HistoryType,
    date: string,
    oldTitle?: string,
    newTitle?: string,
) {
    const id = Crypto.randomUUID();

    await insert(db, id, taskId, type, date, oldTitle, newTitle);
}

export async function getAll(db: SQLiteDatabase): Promise<RoutineHistory[]> {
    return await selectAll(db);
}

export async function getById(
    db: SQLiteDatabase,
    id: string,
): Promise<RoutineHistory | null> {
    return await selectById(db, id);
}
