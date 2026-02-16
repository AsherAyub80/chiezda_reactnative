import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Button from '../components/Button';
import LoadingView from '../components/LoadingView';
import { globalStyles } from '../constants/styles';
import { useApp } from '../context/AppContext';

const HomeScreen = ({ navigation }) => {
    const { user, loading, login, logout } = useApp();

    const handleLogin = () => {
        login('DemoUser');
    };

    return (
        <SafeAreaView style={globalStyles.container}>
            <Text style={globalStyles.title}>Home Screen</Text>
            {loading && <LoadingView />}

            {user ? (
                <View>
                    <Text style={globalStyles.subtitle}>Welcome, {user.name}!</Text>
                    <Button title="Logout" onPress={logout} style={{ backgroundColor: '#FF3B30' }} />
                </View>
            ) : (
                <Button title="Login as DemoUser" onPress={handleLogin} />
            )}

            <Button
                title="Go to Journal"
                onPress={() => navigation.navigate('Journal')}
            />
        </SafeAreaView>
    );
};

export default HomeScreen;
