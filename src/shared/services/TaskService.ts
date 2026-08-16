import type { SQLiteDatabase } from 'expo-sqlite';
import {
    insert,
    selectAll,
    selectById,
    softDeleteById,
    updateById,
} from '../repositories/TaskRepository';
import * as Crypto from 'expo-crypto';

export async function createTask(db: SQLiteDatabase, title: string) {
    const id = Crypto.randomUUID();
    const now = new Date().toISOString();

    await insert(db, id, title, now);
}

export async function getAll(db: SQLiteDatabase) {
    return await selectAll(db);
}

export async function getById(db: SQLiteDatabase, id: string) {
    return await selectById(db, id);
}

export async function markAsDeleted(db: SQLiteDatabase, id: string) {
    const now = new Date().toISOString();

    return await softDeleteById(db, id, now);
}

export async function changeTitleById(
    db: SQLiteDatabase,
    id: string,
    newTitle: string,
) {
    const now = new Date().toISOString();

    await updateById(db, id, newTitle, now);
}
