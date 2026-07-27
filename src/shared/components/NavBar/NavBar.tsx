import NavItem from './NavItem/NavItem';

import CalendarIcon from '@/features/calendar/assets/calendar.svg';
import CalendarIconActive from '@/features/calendar/assets/calendar-active.svg';
import CheckIcon from '@/features/calendar/assets/check.svg';
import CheckIconActive from '@/features/calendar/assets/check-active.svg';
import { Container, NavSeparator } from './style';

export default function NavBar() {
    return (
        <Container>
            <NavItem
                label="Calendário"
                active
                icon={CalendarIcon}
                activeIcon={CalendarIconActive}
            />

            <NavSeparator />

            <NavItem
                label="Rotina"
                icon={CheckIcon}
                activeIcon={CheckIconActive}
            />
        </Container>
    );
}
