import { useSQLiteContext } from 'expo-sqlite';
import HistoryEntry from '../HistoryEntry/HistoryEntry';
import { Container } from './style';
import { useEffect, useState } from 'react';
import { RoutineHistory } from '@/shared/types/HistoryEntry';
import { getAll } from '@/shared/services/RoutineHistoryService';

export default function EntryList() {
    const db = useSQLiteContext();

    const [entries, setEntries] = useState<RoutineHistory[]>();

    useEffect(() => {
        const loadEntries = async () => {
            const data = await getAll(db);
            setEntries(data);
        };

        loadEntries();
    }, [db]);

    function formatDate(timestamp: string) {
        return new Date(timestamp).toLocaleDateString('pt-BR', {
            day: '2-digit',
            month: 'long',
            year: 'numeric',
        });
    }

    return (
        <Container>
            {entries?.map((entry) => {
                const date = formatDate(entry.timestamp);
                if (entry.type === 'CREATE') {
                    return (
                        <HistoryEntry
                            key={entry.id}
                            type="created"
                            date={date}
                            time="14:30"
                            taskName={entry.newTitle ?? ''}
                        />
                    );
                }

                if (entry.type === 'UPDATE') {
                    return (
                        <HistoryEntry
                            key={entry.id}
                            type="updated"
                            date={date}
                            time="14:30"
                            oldTaskName={entry.oldTitle ?? ''}
                            newTaskName={entry.newTitle ?? ''}
                        />
                    );
                }

                return (
                    <HistoryEntry
                        key={entry.id}
                        type="deleted"
                        date={date}
                        time="14:30"
                        taskName={entry.oldTitle ?? ''}
                    />
                );
            })}
        </Container>
    );
}
