import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { colors } from '../constants/colors';

const LoadingView = () => {
    return (
        <View style={styles.container}>
            <ActivityIndicator size="large" color={colors.primary} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1,
    },
});

export default LoadingView;
