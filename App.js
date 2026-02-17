import { useFonts } from 'expo-font';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AppProvider } from './src/context/AppContext';
import AppNavigator from './src/navigation/AppNavigator';

import {
    Cormorant_400Regular,
    Cormorant_500Medium,
    Cormorant_700Bold,
} from '@expo-google-fonts/cormorant';
import {
    Outfit_400Regular,
    Outfit_500Medium,
    Outfit_700Bold,
} from '@expo-google-fonts/outfit';

export default function App() {
    const [fontsLoaded] = useFonts({
        Cormorant_400Regular,
        Cormorant_500Medium,
        Cormorant_700Bold,
        Outfit_400Regular,
        Outfit_500Medium,
        Outfit_700Bold,
    });

    if (!fontsLoaded) {
        return null;
    }

    return (
        <SafeAreaProvider>
            <AppProvider>
                <AppNavigator />
            </AppProvider>
        </SafeAreaProvider>
    );
}
