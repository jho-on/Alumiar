import { useFonts } from 'expo-font';
import {
    IBMPlexMono_400Regular,
    IBMPlexMono_700Bold,
} from '@expo-google-fonts/ibm-plex-mono';
import { View } from 'react-native';
import NavBar from './shared/components/NavBar/NavBar';
import { useState } from 'react';
import Routine from './features/routine/screens/Routine';
import CalendarScreen from './features/calendar/screens/CalendarScreen';
import History from './features/history/screens/History';
import { Page } from '@/shared/types/Page';
import DatabaseProvider from './database/DatabaseProvider';

export default function App() {
    const [page, setPage] = useState<Page>('Calendar');

    const [loaded] = useFonts({
        'IBM Plex Mono': IBMPlexMono_400Regular,
        'IBM Plex Mono Bold': IBMPlexMono_700Bold,
    });

    if (!loaded) {
        return null;
    }

    return (
        <View style={{ flex: 1 }}>
            <View style={{ flex: 1 }}>
                <DatabaseProvider>
                    {page === 'Calendar' && <CalendarScreen />}
                    {page === 'Routine' && <Routine setPage={setPage} />}
                    {page === 'History' && <History />}
                </DatabaseProvider>
            </View>
            <NavBar page={page} setPage={setPage} />
        </View>
    );
}
