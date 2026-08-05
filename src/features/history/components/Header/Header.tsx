import IconButton from '@/shared/components/IconButton/IconButton';
import { Container, Title } from './style';

export default function Header() {
    const handleBackButton = () => {};

    return (
        <Container>
            <IconButton icon="<" onPress={handleBackButton}></IconButton>
            <Title>Historico de Alterações</Title>
        </Container>
    );
}
