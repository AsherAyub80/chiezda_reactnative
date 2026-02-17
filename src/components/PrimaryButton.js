import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { appTextTheme } from '../constants/textStyle';

const PrimaryButton = ({
    text,
    onPressed,
    gradient = ['#F7CDB9', '#E38470'],
    textStyle,
}) => {
    return (
        <TouchableOpacity onPress={onPressed} activeOpacity={0.8}>
            <LinearGradient
                colors={gradient}
                start={[0.01, 0.5]} // stops: [0.01, 1], roughly horizontal or diagonal
                end={[1, 0.5]}
                style={styles.button}
            >
                <Text style={[styles.text, textStyle]}>{text}</Text>
            </LinearGradient>
        </TouchableOpacity>
    );
};

export default PrimaryButton;

const styles = StyleSheet.create({
    button: {
        paddingVertical: 15,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        ...appTextTheme.bodySmall,
        fontWeight: '600',
        color: '#fff', // assuming white text for primary button
    },
});
