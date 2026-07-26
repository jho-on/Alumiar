import CalendarScreen from './features/calendar/screens/CalendarScreen';

import { useFonts } from 'expo-font';
import {
    IBMPlexMono_400Regular,
    IBMPlexMono_700Bold,
} from '@expo-google-fonts/ibm-plex-mono';

export default function App() {
    const [loaded] = useFonts({
        'IBM Plex Mono': IBMPlexMono_400Regular,
        'IBM Plex Mono Bold': IBMPlexMono_700Bold,
    });

    if (!loaded) {
        return null;
    }

    return (
        <>
            <CalendarScreen></CalendarScreen>
        </>
    );
}
