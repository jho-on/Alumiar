import { useSQLiteContext } from 'expo-sqlite';
import Task from '../Task/Task';
import { Container } from './style';
import { changeTitleById, markAsDeleted } from '@/shared/services/TaskService';
import { Task as TaskType } from '@/shared/types/Task';
import { useToast } from '@/shared/contexts/ToastContext';
import { useModal } from '@/shared/contexts/ModalContext';

type TaskListProps = {
    tasks: TaskType[];
    reloadTasks: () => Promise<void>;
};

export default function TaskList({ tasks, reloadTasks }: TaskListProps) {
    const db = useSQLiteContext();
    const { showToast } = useToast();
    const { openModal, closeModal } = useModal();

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
                        checked={false}
                        title={task.title}
                        onDelete={() => handleDelete(task.id, task.title)}
                        onEdit={() => handleEdit(task.id, task.title)}
                        createdAt={createdAt}
                        updatedAt={updatedAt}
                    />
                );
            })}
        </Container>
    );
}
