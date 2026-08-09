import type { ReactNode } from 'react';
import { SQLiteProvider } from 'expo-sqlite';

import { migrateDbIfNeeded } from './migrations/001-initial';

type DatabaseProviderProps = {
    children: ReactNode;
};

export default function DatabaseProvider({ children }: DatabaseProviderProps) {
    return (
        <SQLiteProvider databaseName="alumiar.db" onInit={migrateDbIfNeeded}>
            {children}
        </SQLiteProvider>
    );
}
