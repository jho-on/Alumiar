import { useSQLiteContext } from 'expo-sqlite';
import CalendarDay from '../CalendarDay/CalendarDay';
import {
    Container,
    DaysContainer,
    Label,
    LabelsContainer,
    Week,
} from './style';
import { useEffect, useState } from 'react';
import { getCompletedDays } from '@/shared/services/TaskCompletionService';

type CalendarProps = {
    year: number;
    month: number;
};

export default function Calendar({ year, month }: CalendarProps) {
    const db = useSQLiteContext();

    const [completedDays, setCompletedDays] = useState<Set<string>>(new Set());

    useEffect(() => {
        const loadCompletedDays = async () => {
            const data = await getCompletedDays(db, year, month);
            setCompletedDays(new Set(data));
        };

        loadCompletedDays();
    }, [db, year, month]);

    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstWeekDay = new Date(year, month, 1).getDay();
    const firstColumn = (firstWeekDay + 6) % 7;
    const totalCells = firstColumn + daysInMonth;
    const cells = [];

    for (let index = 0; index < totalCells; index++) {
        const disabled = index < firstColumn;
        const day = index - firstColumn + 1;
        const date = `${year}-${String(month + 1).padStart(2, '0')}-${String(
            day,
        ).padStart(2, '0')}`;

        cells.push(
            <CalendarDay
                key={index}
                checked={!disabled && completedDays.has(date)}
                disabled={disabled}
                onPress={() => {}}
            />,
        );
    }

    const weeks = [];

    for (let index = 0; index < cells.length; index += 7) {
        weeks.push(cells.slice(index, index + 7));
    }

    return (
        <Container>
            <LabelsContainer>
                <Label>S</Label>
                <Label>T</Label>
                <Label>Q</Label>
                <Label>Q</Label>
                <Label>S</Label>
                <Label>S</Label>
                <Label $highlight>D</Label>
            </LabelsContainer>

            <DaysContainer>
                {weeks.map((week, index) => (
                    <Week key={index}>{week}</Week>
                ))}
            </DaysContainer>
        </Container>
    );
}
