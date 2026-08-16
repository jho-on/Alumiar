import type { SQLiteDatabase } from 'expo-sqlite';
import { RoutineHistory } from '../types/HistoryEntry';

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

export async function selectAll(db: SQLiteDatabase): Promise<RoutineHistory[]> {
    return await db.getAllAsync(
        `
        SELECT *
        FROM routineHistory
        ORDER BY timestamp DESC
        `,
    );
}

export async function selectById(
    db: SQLiteDatabase,
    id: string,
): Promise<RoutineHistory | null> {
    return await db.getFirstAsync(
        `
        SELECT *
        FROM routineHistory
        WHERE id = ?
        `,
        id,
    );
}
