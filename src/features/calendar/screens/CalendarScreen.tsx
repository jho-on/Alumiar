import React, { useCallback, useEffect, useState } from 'react';
import { ScrollView, View } from 'react-native';
import { colors } from '@/shared/theme/colors';
import Calendar from '../components/Calendar/Calendar';
import Card from '@/shared/components/Card/Card';
import HorizontalStepper from '@/shared/components/HorizontalStepper/HorizontalStepper';
import { useSQLiteContext } from 'expo-sqlite';
import { getStatistics } from '@/shared/services/TaskService';

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
    const db = useSQLiteContext();

    const date = new Date();

    const [year, setYear] = useState(date.getFullYear());
    const [month, setMonth] = useState(date.getMonth());

    const [statistics, setStatistics] = useState({
        totalDays: 0,
        completedDays: 0,
        completionRate: 0,
        totalTasks: 0,
        completedTasks: 0,
        longestStreak: 0,
    });

    const loadStatistics = useCallback(async () => {
        const data = await getStatistics(db);

        setStatistics(data);
    }, [db]);

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        loadStatistics();
    }, [loadStatistics]);

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
                />
            </View>

            <HorizontalStepper
                value={months[month]}
                onNext={nextMonth}
                onPrevious={prevMonth}
            />

            <Calendar year={year} month={month} />

            <Card
                completedDays={statistics.completedDays}
                totalDays={statistics.totalDays}
                completionRate={statistics.completionRate}
                completedTasks={statistics.completedTasks}
                totalTasks={statistics.totalTasks}
                longestSequence={statistics.longestStreak}
            />
        </ScrollView>
    );
}
