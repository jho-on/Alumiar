import type { SQLiteDatabase } from 'expo-sqlite';

export async function migrateDbIfNeeded(db: SQLiteDatabase) {
    const DATABASE_VERSION = 1;

    const result = await db.getFirstAsync<{ user_version: number }>(
        'PRAGMA user_version',
    );

    let currentVersion = result?.user_version ?? 0;

    if (currentVersion >= DATABASE_VERSION) {
        return;
    }

    if (currentVersion === 0) {
        await db.execAsync(`
            CREATE TABLE task (
                id TEXT PRIMARY KEY,
                title TEXT NOT NULL,
                createdAt TEXT NOT NULL,
                updatedAt TEXT NOT NULL,
                deletedAt TEXT
            );

            CREATE TABLE taskCompletion (
                id TEXT PRIMARY KEY,
                taskId TEXT NOT NULL,
                date TEXT NOT NULL,

                CONSTRAINT fk_task_completion
                    FOREIGN KEY (taskId)
                    REFERENCES task(id),

                CONSTRAINT unique_task_completion
                    UNIQUE (taskId, date)
            );

            CREATE TABLE routineHistory (
                id TEXT PRIMARY KEY,
                taskId TEXT NOT NULL,
                type TEXT NOT NULL
                    CHECK (type IN ('CREATE', 'UPDATE', 'DELETE')),
                oldTitle TEXT,
                newTitle TEXT,
                timestamp TEXT NOT NULL,

                CONSTRAINT fk_task_history
                    FOREIGN KEY (taskId)
                    REFERENCES task(id)
            );
        `);

        currentVersion = 1;
    }

    await db.execAsync(`PRAGMA user_version = ${currentVersion}`);
}
