import { Page } from '@/shared/types/Page';
import EntryList from '../components/EntryList/EntryList';
import Header from '../components/Header/Header';
import { Container } from './style';

type HistoryProps = {
    setPage: (page: Page) => void;
};

export default function History({ setPage }: HistoryProps) {
    return (
        <Container>
            <Header setPage={setPage} />
            <EntryList />
        </Container>
    );
}
