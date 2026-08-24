import { SQLiteDatabase } from 'expo-sqlite';
import { Task } from '../types/Task';

export async function insert(
    db: SQLiteDatabase,
    id: string,
    title: string,
    createdAt: string,
) {
    await db.runAsync(
        `
            INSERT INTO task (
                id,
                title,
                createdAt,
                updatedAt
            )
            VALUES (?, ?, ?, ?);
        `,
        id,
        title,
        createdAt,
        createdAt,
    );
}

export async function selectAll(db: SQLiteDatabase) {
    const data = await db.getAllAsync<Task>(
        `
            SELECT *
            FROM task
            WHERE deletedAt IS NULL;
        `,
    );

    return data;
}

export async function selectById(db: SQLiteDatabase, id: string) {
    const data = await db.getFirstAsync<Task>(
        `
            SELECT *
            FROM task
            WHERE id = ?;
        `,
        id,
    );

    return data;
}

export async function softDeleteById(
    db: SQLiteDatabase,
    id: string,
    deletedAt: string,
) {
    await db.runAsync(
        `
            UPDATE task
            SET deletedAt = ?
            WHERE id = ?;
        `,
        deletedAt,
        id,
    );
}

export async function updateById(
    db: SQLiteDatabase,
    id: string,
    newTitle: string,
    updatedAt: string,
) {
    await db.runAsync(
        `
            UPDATE task
            SET
                updatedAt = ?,
                title = ?
            WHERE id = ?;
        `,
        updatedAt,
        newTitle,
        id,
    );
}
export async function getStatistics(db: SQLiteDatabase) {
    const result = await db.getFirstAsync<{
        completedTasks: number;
        firstTaskDate: string | null;
        lastCompletionDate: string | null;
    }>(`
        SELECT
            (
                SELECT COUNT(*)
                FROM taskCompletion
            ) AS completedTasks,

            (
                SELECT MIN(createdAt)
                FROM task
            ) AS firstTaskDate,

            (
                SELECT MAX(date)
                FROM taskCompletion
            ) AS lastCompletionDate;
    `);

    const tasks = await db.getAllAsync<{
        createdAt: string;
        deletedAt: string | null;
    }>(`
        SELECT createdAt, deletedAt
        FROM task;
    `);

    return {
        completedTasks: result?.completedTasks ?? 0,
        firstTaskDate: result?.firstTaskDate ?? null,
        lastCompletionDate: result?.lastCompletionDate ?? null,
        tasks,
    };
}
