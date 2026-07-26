import CalendarDay from '../CalendarDay/CalendarDay';
import {
    Container,
    DaysContainer,
    Label,
    LabelsContainer,
    Week,
} from './style';

type CalendarProps = {
    year: number;
    month: number;
};

export default function Calendar({ year, month }: CalendarProps) {
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstWeekDay = new Date(year, month, 1).getDay();
    const firstColumn = (firstWeekDay + 6) % 7;
    const totalCells = firstColumn + daysInMonth;

    const cells = [];

    for (let index = 0; index < totalCells; index++) {
        const disabled = index < firstColumn;

        cells.push(
            <CalendarDay
                key={index}
                checked={false}
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
