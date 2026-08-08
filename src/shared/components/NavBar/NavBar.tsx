import NavItem from './NavItem/NavItem';

import CalendarIcon from '@/features/calendar/assets/calendar.svg';
import CalendarIconActive from '@/features/calendar/assets/calendar-active.svg';
import CheckIcon from '@/features/calendar/assets/check.svg';
import CheckIconActive from '@/features/calendar/assets/check-active.svg';
import { Container, NavSeparator } from './style';
import { Page } from '@/shared/types/Page';

type NavBarProps = {
    page: Page;
    setPage: (page: Page) => void;
};

export default function NavBar({ page, setPage }: NavBarProps) {
    return (
        <Container>
            <NavItem
                label="Calendário"
                active={page === 'Calendar'}
                icon={CalendarIcon}
                activeIcon={CalendarIconActive}
                onPress={() => setPage('Calendar')}
            />

            <NavSeparator />

            <NavItem
                label="Rotina"
                active={page === 'Routine'}
                icon={CheckIcon}
                activeIcon={CheckIconActive}
                onPress={() => setPage('Routine')}
            />
        </Container>
    );
}
