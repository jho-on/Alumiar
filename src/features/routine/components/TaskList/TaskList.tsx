import Task from '../Task/Task';
import { Container } from './style';

export default function TaskList() {
    return (
        <Container>
            <Task
                checked={true}
                title="Laros"
                onDelete={() => {}}
                onEdit={() => {}}
                createdAt="25 jun"
            />
            <Task
                checked={false}
                title="Laros"
                onDelete={() => {}}
                onEdit={() => {}}
                createdAt="25 jun"
                updatedAt="45 lasd"
            />
            <Task
                checked={false}
                title="Laros"
                onDelete={() => {}}
                onEdit={() => {}}
                createdAt="25 jun"
            />
        </Container>
    );
}
