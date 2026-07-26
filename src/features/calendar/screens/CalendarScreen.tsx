import React, { useState } from 'react';

import { View } from 'react-native';
import { colors } from '@/shared/theme/colors';
import HorizontalStepper from '../components/HorizontalStepper/HorizontalStepper';
import Calendar from '../components/Calendar/Calendar';

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

export default function CalendarScreen() {
    const date: Date = new Date();

    const [year, setYear] = useState(date.getFullYear());
    const [month, setMonth] = useState(date.getMonth());

    const nextYear = () => {
        setYear((year) => year + 1);
    };
    const prevYear = () => {
        setYear((year) => year - 1);
    };

    const nextMonth = () => {
        setMonth((month) => (month + 1) % 12);
    };
    const prevMonth = () => {
        setMonth((month) => (month + 11) % 12);
    };

    return (
        <>
            <View
                style={{
                    borderBottomWidth: 1,
                    borderBottomColor: colors.border,
                }}
            >
                <HorizontalStepper
                    value={year}
                    onNext={nextYear}
                    onPrevious={prevYear}
                ></HorizontalStepper>
            </View>

            <HorizontalStepper
                value={months[month]}
                onNext={nextMonth}
                onPrevious={prevMonth}
            />

            <Calendar year={year} month={month}></Calendar>
        </>
    );
}
