import { StyleSheet, TextInput } from 'react-native';
import { colors } from '../constants/colors';

const TextInputField = ({ placeholder, value, onChangeText, secureTextEntry }) => {
    return (
        <TextInput
            style={styles.input}
            placeholder={placeholder}
            value={value}
            onChangeText={onChangeText}
            secureTextEntry={secureTextEntry}
            placeholderTextColor={colors.textSecondary}
        />
    );
};

const styles = StyleSheet.create({
    input: {
        backgroundColor: colors.surface,
        padding: 12,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: colors.border,
        marginBottom: 12,
        fontSize: 16,
        color: colors.text,
    },
});

export default TextInputField;
