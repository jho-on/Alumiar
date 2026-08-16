import { useModal } from '@/shared/contexts/ModalContext';
import { Container, NewTaskButton, NewTaskButtonText, Title } from './style';
import { useSQLiteContext } from 'expo-sqlite';
import { createTask } from '@/shared/services/TaskService';
import { useToast } from '@/shared/contexts/ToastContext';

type TaskHeaderProps = {
    reloadTasks: () => Promise<void>;
    date: string;
};

export default function TaskHeader({ reloadTasks, date }: TaskHeaderProps) {
    const { openModal, closeModal } = useModal();
    const { showToast } = useToast();

    const db = useSQLiteContext();

    const handleConfirmModal = async (value: string) => {
        try {
            const title = value.trim();
            const formattedTitle =
                title.charAt(0).toUpperCase() + title.slice(1);

            await createTask(db, formattedTitle, date);
            await reloadTasks();
            closeModal();
            showToast('Tarefa "' + formattedTitle + '" criada!');
        } catch (error) {
            console.error(error);
        }
    };

    const handleNewTask = () => {
        openModal({
            title: 'Nova Tarefa',
            inputLabel: 'Nome da tarefa',
            inputPlaceholder: 'Varrer a casa',
            onCancel: () => {
                closeModal();
            },
            onConfirm: handleConfirmModal,
        });
    };

    return (
        <Container>
            <Title>Tarefas</Title>
            <NewTaskButton onPress={handleNewTask}>
                <NewTaskButtonText>+ Nova Tarefa</NewTaskButtonText>
            </NewTaskButton>
        </Container>
    );
}
