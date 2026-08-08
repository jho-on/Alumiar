import React, { useState } from 'react';

import { ScrollView, View } from 'react-native';
import { colors } from '@/shared/theme/colors';
import Calendar from '../components/Calendar/Calendar';
import Card from '@/shared/components/Card/Card';
import HorizontalStepper from '@/shared/components/HorizontalStepper/HorizontalStepper';

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
        <ScrollView>
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

            <Card></Card>
        </ScrollView>
    );
}
