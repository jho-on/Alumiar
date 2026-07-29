import { Container, NewTaskButton, NewTaskButtonText, Title } from './style';

export default function TaskHeader() {
    const handleNewTask = () => {};

    return (
        <Container>
            <Title>Tarefas</Title>
            <NewTaskButton onPress={handleNewTask}>
                <NewTaskButtonText>+ Nova Tarefa</NewTaskButtonText>
            </NewTaskButton>
        </Container>
    );
}
