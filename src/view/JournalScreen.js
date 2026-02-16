import { useState } from 'react';
import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Button from '../components/Button';
import TextInputField from '../components/TextInputField';
import { globalStyles } from '../constants/styles';

const JournalScreen = ({ navigation }) => {
    const [entry, setEntry] = useState('');

    return (
        <SafeAreaView style={globalStyles.container}>
            <Text style={globalStyles.title}>Journal Screen</Text>
            <Text style={globalStyles.subtitle}>Write your thoughts:</Text>

            <TextInputField
                placeholder="Today's entry..."
                value={entry}
                onChangeText={setEntry}
            />

            <Button
                title="Go to Build Space"
                onPress={() => navigation.navigate('BuildSpace')}
            />
            <Button
                title="Back to Home"
                onPress={() => navigation.goBack()}
                style={{ backgroundColor: '#8E8E93' }}
            />
        </SafeAreaView>
    );
};

export default JournalScreen;
