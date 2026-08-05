import HistoryEntry from '../HistoryEntry/HistoryEntry';
import { Container } from './style';

export default function EntryList() {
    return (
        <Container>
            <HistoryEntry
                type="created"
                date="25 de junho de 2026"
                time="14:30"
                taskName="Lavar a louça"
            />

            <HistoryEntry
                type="updated"
                date="25 de junho de 2026"
                time="16:45"
                oldTaskName="Lavar a louça"
                newTaskName="Lavar a cozinha"
            />

            <HistoryEntry
                type="deleted"
                date="26 de junho de 2026"
                time="09:15"
                taskName="Estudar React Native"
            />
        </Container>
    );
}
