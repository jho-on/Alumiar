import { Container, HistoryButton, HistoryButtonText, InfoText } from './style';

type TaskFooterProps = {
    lastUpdated: string;
    onHistoryPress: () => void;
};

export default function TaskFooter({
    lastUpdated,
    onHistoryPress,
}: TaskFooterProps) {
    return (
        <Container>
            <InfoText>{lastUpdated}</InfoText>

            <HistoryButton onPress={onHistoryPress}>
                <HistoryButtonText>Ver Histórico &gt;</HistoryButtonText>
            </HistoryButton>
        </Container>
    );
}
