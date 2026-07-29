import { Container, HistoryButton, HistoryButtonText, InfoText } from './style';

type TaskFooterProps = {
    lastUpdated: string;
};

export default function TaskFooter({ lastUpdated }: TaskFooterProps) {
    return (
        <Container>
            <InfoText>{lastUpdated}</InfoText>
            <HistoryButton>
                <HistoryButtonText>Ver Histórico &gt;</HistoryButtonText>
            </HistoryButton>
        </Container>
    );
}
