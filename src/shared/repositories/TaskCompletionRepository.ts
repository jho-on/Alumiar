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

export async function selectCompletedDays(
    db: SQLiteDatabase,
    year: number,
    month: number,
): Promise<{ date: string }[]> {
    const monthPrefix = `${year}-${String(month + 1).padStart(2, '0')}-%`;

    return await db.getAllAsync<{ date: string }>(
        `
        SELECT date
        FROM taskCompletion
        WHERE date LIKE ?
        GROUP BY date
        HAVING COUNT(DISTINCT taskId) = (
            SELECT COUNT(*)
            FROM task
            WHERE deletedAt IS NULL
        )
        `,
        monthPrefix,
    );
}
