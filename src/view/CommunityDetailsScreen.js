import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Button from '../components/Button';
import { globalStyles } from '../constants/styles';

const CommunityDetailsScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={globalStyles.container}>
            <Text style={globalStyles.title}>Community Details</Text>
            <Text style={globalStyles.subtitle}>Deep dive into the community.</Text>

            <Button
                title="Back to Root"
                onPress={() => navigation.popToTop()}
                style={{ backgroundColor: '#FF3B30' }}
            />
            <Button
                title="Back"
                onPress={() => navigation.goBack()}
                style={{ backgroundColor: '#8E8E93' }}
            />
        </SafeAreaView>
    );
};

export default CommunityDetailsScreen;
