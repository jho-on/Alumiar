import EntryList from '../components/EntryList/EntryList';
import Header from '../components/Header/Header';
import { Container } from './style';

export default function History() {
    return (
        <Container>
            <Header />
            <EntryList />
        </Container>
    );
}
