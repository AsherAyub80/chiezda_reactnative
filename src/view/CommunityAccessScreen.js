import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import GlobalBackground from '../components/GlobalBackground';
import { colors } from '../constants/colors';

// Replace with your own button component or style
const PrimaryButton = ({ text, onPress }) => (
    <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
);

const CommunityAccess = () => {
    const navigation = useNavigation();

    const accessTile = ({ icon, title, subtitle }) => (
        <View style={styles.tileContainer}>
            <View style={styles.iconBox}>
                <Ionicons name={icon} size={24} color={colors.lightBrown} />
            </View>
            <View style={styles.tileText}>
                <Text style={styles.tileTitle}>{title}</Text>
                <Text style={styles.tileSubtitle}>{subtitle}</Text>
            </View>
            <View style={styles.tileCircle} />
        </View>
    );

    return (
        <GlobalBackground gradientStops={[0.8, 1]} isSpacer={true} isRight={false} isLeft={false}>
            <View style={styles.content}>



                {/* Access Tiles */}
                {accessTile({
                    icon: 'globe-outline', // Replaced with Ionicon name
                    title: 'Public',
                    subtitle: 'Only approved members can view and participate.',
                })}

                <View style={{ height: 15 }} />

                {accessTile({
                    icon: 'lock-closed-outline', // Replaced with Ionicon name
                    title: 'Private',
                    subtitle: 'Safe spaces for peer support',
                })}


                <PrimaryButton
                    text="Next"
                    onPress={() => navigation.navigate('CommunityDetails')} // Corrected route
                />

                <View style={{ height: 20 }} />
            </View>
        </GlobalBackground>
    );
};

export default CommunityAccess;

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
    content: {
        flex: 1,
        paddingHorizontal: 20,
    },
    headerRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
    },
    backButton: {
        backgroundColor: colors.peachLight,
        borderRadius: 50,
        width: 35,
        height: 35,
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerTitle: {
        fontSize: 18,
        fontWeight: '700',
        color: colors.text,
    },
    headerSubtitle: {
        fontSize: 14,
        color: colors.textSecondary,
    },
    tileContainer: {
        flexDirection: 'row',
        height: 120,
        padding: 16,
        borderRadius: 20,
        backgroundColor: colors.cardSecondary,
        alignItems: 'center',
    },
    iconBox: {
        width: 44,
        height: 44,
        borderRadius: 12,
        backgroundColor: '#FFE3C8',
        justifyContent: 'center',
        alignItems: 'center',
    },
    // icon style removed as Ionicons handles size/color directly
    tileText: {
        flex: 1,
        marginLeft: 12,
        justifyContent: 'center',
    },
    tileTitle: {
        fontSize: 20,
        fontWeight: '600',
        color: colors.text,
    },
    tileSubtitle: {
        fontSize: 14,
        color: colors.textMuted,
        marginTop: 2,
    },
    tileCircle: {
        width: 22,
        height: 22,
        borderRadius: 11,
        borderWidth: 2,
        borderColor: colors.textMuted,
    },
    button: {
        width: width - 40,
        height: 50,
        backgroundColor: colors.secondary,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: colors.textSecondary, // Changed to textSecondary to verify visibility against secondary background
        fontWeight: '700',
        fontSize: 16,
    },
});
