import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Button from '../components/Button';
import { globalStyles } from '../constants/styles';

const BuildSpaceScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={globalStyles.container}>
            <Text style={globalStyles.title}>Build Space</Text>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={globalStyles.subtitle}>Your projects live here.</Text>
            </View>

            <Button
                title="Go to Community Access"
                onPress={() => navigation.navigate('CommunityAccess')}
            />
            <Button
                title="Back"
                onPress={() => navigation.goBack()}
                style={{ backgroundColor: '#8E8E93' }}
            />
        </SafeAreaView>
    );
};

export default BuildSpaceScreen;
