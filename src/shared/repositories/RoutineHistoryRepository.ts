import type { SQLiteDatabase } from 'expo-sqlite';

export async function insert(
    db: SQLiteDatabase,
    id: string,
    taskId: string,
    type: string,
    timestamp: string,
    oldTitle?: string,
    newTitle?: string,
) {
    await db.runAsync(
        `
        INSERT INTO routineHistory (
            id,
            taskId,
            type,
            timestamp,
            oldTitle,
            newTitle
        )
        VALUES (?, ?, ?, ?, ?, ?)
        `,
        id,
        taskId,
        type,
        timestamp,
        oldTitle ?? null,
        newTitle ?? null,
    );
}

export async function selectAll(db: SQLiteDatabase) {
    return await db.getAllAsync(
        `
        SELECT *
        FROM routineHistory
        ORDER BY timestamp DESC
        `,
    );
}

export async function selectById(db: SQLiteDatabase, id: string) {
    return await db.getFirstAsync(
        `
        SELECT *
        FROM routineHistory
        WHERE id = ?
        `,
        id,
    );
}
