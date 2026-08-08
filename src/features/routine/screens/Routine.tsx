import HorizontalStepper from '@/shared/components/HorizontalStepper/HorizontalStepper';
import { useState } from 'react';
import { View } from 'react-native';
import CompletionInfo from '../components/CompletionInfo/CompletionInfo';
import { colors } from '@/shared/theme/colors';
import TaskHeader from '../components/TaskHeader/TaskHeader';
import TaskList from '../components/TaskList/TaskList';
import TaskFooter from '../components/TaskFooter/TaskFooter';
const months = [
    'Jan',
    'Fev',
    'Mar',
    'Abr',
    'Mai',
    'Jun',
    'Jul',
    'Ago',
    'Set',
    'Out',
    'Nov',
    'Dez',
];

import { Page } from '@/shared/types/Page';

type RoutineProps = {
    setPage: (page: Page) => void;
};

export default function Routine({ setPage }: RoutineProps) {
    const date: Date = new Date();

    const [month, setMonth] = useState(date.getMonth());
    const [day, setDay] = useState(date.getDate());
    const [year, setYear] = useState(date.getFullYear());

    const nextMonth = () => {
        let newMonth = month;
        let newYear = year;

        if (month === 11) {
            newMonth = 0;
            newYear++;
        } else {
            newMonth++;
        }

        const daysInMonth = new Date(newYear, newMonth + 1, 0).getDate();

        setMonth(newMonth);
        setYear(newYear);

        if (day > daysInMonth) {
            setDay(daysInMonth);
        }
    };

    const prevMonth = () => {
        let newMonth = month;
        let newYear = year;

        if (month === 0) {
            newMonth = 11;
            newYear--;
        } else {
            newMonth--;
        }

        const daysInMonth = new Date(newYear, newMonth + 1, 0).getDate();

        setYear(newYear);
        setMonth(newMonth);

        if (day > daysInMonth) {
            setDay(daysInMonth);
        }
    };

    const nextDay = () => {
        const daysInMonth = new Date(year, month + 1, 0).getDate();
        if (day + 1 > daysInMonth) {
            if (month + 1 == 12) {
                setYear((year) => year + 1);
                setMonth(0);
            } else {
                setMonth((month) => month + 1);
            }
            setDay(1);
            return;
        }
        setDay((day) => day + 1);
    };

    const prevDay = () => {
        if (day === 1) {
            let newMonth = month;
            let newYear = year;

            if (month === 0) {
                newMonth = 11;
                newYear--;
            } else {
                newMonth--;
            }

            const daysInMonth = new Date(newYear, newMonth + 1, 0).getDate();

            setYear(newYear);
            setMonth(newMonth);
            setDay(daysInMonth);

            return;
        }

        setDay((day) => day - 1);
    };

    return (
        <View
            style={{
                backgroundColor: colors.background,
            }}
        >
            <View
                style={{
                    borderBottomWidth: 1,
                    borderBottomColor: colors.accent,
                }}
            >
                <HorizontalStepper
                    value={months[month]}
                    onNext={nextMonth}
                    onPrevious={prevMonth}
                ></HorizontalStepper>
                <HorizontalStepper
                    value={'Dia ' + String(day)}
                    onNext={nextDay}
                    onPrevious={prevDay}
                ></HorizontalStepper>
                <CompletionInfo
                    completedNumber={4}
                    totalNumber={5}
                ></CompletionInfo>
            </View>

            <TaskHeader></TaskHeader>
            <TaskList></TaskList>
            <TaskFooter
                lastUpdated="Ultima atualização: 20 abr. de 2025"
                onHistoryPress={() => setPage('History')}
            ></TaskFooter>
        </View>
    );
}
