import { Container, Info } from './style';

type InfoProps = {
    completedNumber: number;
    totalNumber: number;
};

export default function CompletionInfo({
    completedNumber,
    totalNumber,
}: InfoProps) {
    return (
        <Container>
            <Info>
                {completedNumber} de {totalNumber} tarefas completas
            </Info>
        </Container>
    );
}
