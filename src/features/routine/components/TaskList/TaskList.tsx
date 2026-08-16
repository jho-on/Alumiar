import { useSQLiteContext } from 'expo-sqlite';
import Task from '../Task/Task';
import { Container } from './style';
import { changeTitleById, markAsDeleted } from '@/shared/services/TaskService';
import { Task as TaskType } from '@/shared/types/Task';
import { useToast } from '@/shared/contexts/ToastContext';
import { useModal } from '@/shared/contexts/ModalContext';
import { useEffect, useState } from 'react';
import {
    completeTask,
    isCompleted,
    uncompleteTask,
} from '@/shared/services/TaskCompletionService';

type TaskListProps = {
    tasks: TaskType[];
    date: string;
    reloadTasks: () => Promise<void>;
    onCompletionChanged: (completed: number) => void;
};

export default function TaskList({
    tasks,
    date,
    reloadTasks,
    onCompletionChanged,
}: TaskListProps) {
    const db = useSQLiteContext();
    const { showToast } = useToast();
    const { openModal, closeModal } = useModal();

    const [completedTasks, setCompletedTasks] = useState<Set<string>>(
        new Set(),
    );

    useEffect(() => {
        const loadCompletions = async () => {
            const completed = new Set<string>();

            for (const task of tasks) {
                if (await isCompleted(db, task.id, date)) {
                    completed.add(task.id);
                }
            }

            setCompletedTasks(completed);
            onCompletionChanged(completed.size);
        };

        loadCompletions();
    }, [db, tasks, date, onCompletionChanged]);

    const handleDelete = (taskId: string, title: string) => {
        openModal({
            title: 'Tem certeza que deseja excluir?',
            onCancel: closeModal,
            onConfirm: async () => {
                try {
                    await markAsDeleted(db, taskId);
                    await reloadTasks();
                    closeModal();
                    showToast('Tarefa "' + title + '" deletada!');
                } catch (error) {
                    console.error(error);
                }
            },
        });
    };

    const handleEdit = (taskId: string, title: string) => {
        openModal({
            title: 'Editar Tarefa',
            onCancel: closeModal,
            inputLabel: 'Novo nome',
            inputPlaceholder: title,
            onConfirm: async (value: string) => {
                const newTitle = value.trim();

                const formattedTitle =
                    newTitle.charAt(0).toUpperCase() + newTitle.slice(1);

                try {
                    await changeTitleById(db, taskId, formattedTitle);
                    await reloadTasks();
                    closeModal();
                    showToast(
                        `Tarefa "${title}" atualizada para "${formattedTitle}"!`,
                    );
                } catch (error) {
                    console.error(error);
                }
            },
        });
    };

    function formatDate(date: string) {
        const parsedDate = new Date(date);

        const months = [
            'jan',
            'fev',
            'mar',
            'abr',
            'mai',
            'jun',
            'jul',
            'ago',
            'set',
            'out',
            'nov',
            'dez',
        ];

        const day = parsedDate.getDate().toString().padStart(2, '0');
        const month = months[parsedDate.getMonth()];
        const year = parsedDate.getFullYear();

        return `${day} ${month} ${year}`;
    }

    const handleCheck = async (taskId: string) => {
        try {
            const updated = new Set(completedTasks);

            if (updated.has(taskId)) {
                await uncompleteTask(db, taskId, date);
                updated.delete(taskId);
            } else {
                await completeTask(db, taskId, date);
                updated.add(taskId);
            }

            setCompletedTasks(updated);
            onCompletionChanged(updated.size);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <Container>
            {tasks.map((task) => {
                const createdAt = `Criada em ${formatDate(task.createdAt)}`;

                const updatedAt =
                    task.updatedAt !== task.createdAt
                        ? `Atualizada em ${formatDate(task.updatedAt)}`
                        : undefined;

                return (
                    <Task
                        key={task.id}
                        checked={completedTasks.has(task.id)}
                        title={task.title}
                        onDelete={() => handleDelete(task.id, task.title)}
                        onEdit={() => handleEdit(task.id, task.title)}
                        onCheck={() => handleCheck(task.id)}
                        createdAt={createdAt}
                        updatedAt={updatedAt}
                    />
                );
            })}
        </Container>
    );
}
