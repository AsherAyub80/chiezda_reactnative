import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import BuildSpaceScreen from '../view/BuildSpaceScreen';
import CommunityAccessScreen from '../view/CommunityAccessScreen';
import CommunityDetailsScreen from '../view/CommunityDetailsScreen';
import HomeScreen from '../view/HomeScreen';
import JournalScreen from '../view/JournalScreen';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerShown: false,
            contentStyle: { backgroundColor: 'transparent' },
          }}
        >
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Journal" component={JournalScreen} />
          <Stack.Screen name="BuildSpace" component={BuildSpaceScreen} />
          <Stack.Screen name="CommunityAccess" component={CommunityAccessScreen} />
          <Stack.Screen name="CommunityDetails" component={CommunityDetailsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default AppNavigator;
