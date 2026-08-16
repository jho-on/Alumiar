import type { SQLiteDatabase } from 'expo-sqlite';

export async function insert(
    db: SQLiteDatabase,
    id: string,
    taskId: string,
    date: string,
) {
    await db.runAsync(
        `
        INSERT INTO taskCompletion (
            id,
            taskId,
            date
        )
        VALUES (?, ?, ?)
        `,
        id,
        taskId,
        date,
    );
}

export async function deleteByTaskAndDate(
    db: SQLiteDatabase,
    taskId: string,
    date: string,
) {
    await db.runAsync(
        `
        DELETE FROM taskCompletion
        WHERE taskId = ? AND date = ?
        `,
        taskId,
        date,
    );
}

export async function selectByTaskAndDate(
    db: SQLiteDatabase,
    taskId: string,
    date: string,
) {
    return await db.getFirstAsync(
        `
        SELECT *
        FROM taskCompletion
        WHERE taskId = ? AND date = ?
        `,
        taskId,
        date,
    );
}
