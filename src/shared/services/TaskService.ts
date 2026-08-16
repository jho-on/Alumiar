import type { SQLiteDatabase } from 'expo-sqlite';
import {
    insert,
    selectAll,
    selectById,
    softDeleteById,
    updateById,
} from '../repositories/TaskRepository';
import * as Crypto from 'expo-crypto';
import { createEntry } from './RoutineHistoryService';

export async function createTask(db: SQLiteDatabase, title: string) {
    const id = Crypto.randomUUID();
    const now = new Date().toISOString();

    await insert(db, id, title, now);
    await createEntry(db, id, 'CREATE', undefined, title);
}

export async function getAll(db: SQLiteDatabase) {
    return await selectAll(db);
}

export async function getById(db: SQLiteDatabase, id: string) {
    return await selectById(db, id);
}

export async function markAsDeleted(db: SQLiteDatabase, id: string) {
    const task = await getById(db, id);

    if (!task) {
        throw new Error(`Task ${id} not found`);
    }

    const now = new Date().toISOString();

    await softDeleteById(db, id, now);

    await createEntry(db, id, 'DELETE', task.title);
}

export async function changeTitleById(
    db: SQLiteDatabase,
    id: string,
    newTitle: string,
) {
    const task = await getById(db, id);

    if (!task) {
        throw new Error(`Task ${id} not found`);
    }

    const now = new Date().toISOString();

    await updateById(db, id, newTitle, now);
    await createEntry(db, id, 'UPDATE', task.title, newTitle);
}
