export type HistoryType = 'CREATE' | 'UPDATE' | 'DELETE';

export type RoutineHistory = {
    id: string;
    taskId: string;
    type: HistoryType;
    oldTitle: string | null;
    newTitle: string | null;
    timestamp: string;
};
