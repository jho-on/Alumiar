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
