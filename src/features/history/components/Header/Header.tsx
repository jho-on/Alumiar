import IconButton from '@/shared/components/IconButton/IconButton';
import { Container, Title, TitleContainer } from './style';
import { Page } from '@/shared/types/Page';

type Props = {
    setPage: (page: Page) => void;
};

export default function Header({ setPage }: Props) {
    return (
        <Container>
            <IconButton
                icon="<"
                onPress={() => {
                    setPage('Routine');
                }}
            ></IconButton>
            <TitleContainer pointerEvents="none">
                <Title>Historico de Alterações</Title>
            </TitleContainer>
        </Container>
    );
}
