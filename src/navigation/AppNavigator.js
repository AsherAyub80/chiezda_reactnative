import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import BuildSpaceScreen from '../view/BuildSpaceScreen';
import CommunityAccessScreen from '../view/CommunityAccessScreen';
import CommunityDetailsScreen from '../view/CommunityDetailsScreen';
import HomeScreen from '../view/HomeScreen';
import JournalScreen from '../view/JournalScreen';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
                <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{ title: 'Home' }}
                />
                <Stack.Screen
                    name="Journal"
                    component={JournalScreen}
                    options={{ title: 'Journal' }}
                />
                <Stack.Screen
                    name="BuildSpace"
                    component={BuildSpaceScreen}
                    options={{ title: 'Build Space' }}
                />
                <Stack.Screen
                    name="CommunityAccess"
                    component={CommunityAccessScreen}
                    options={{ title: 'Community Access' }}
                />
                <Stack.Screen
                    name="CommunityDetails"
                    component={CommunityDetailsScreen}
                    options={{ title: 'Community Details' }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigator;
