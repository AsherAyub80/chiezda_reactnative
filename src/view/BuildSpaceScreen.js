import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { Image } from 'expo-image';
import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import GlobalScaffold from "../components/GlobalScaffold";
import { img, svg } from '../constants/assets';
import { colors } from '../constants/colors';

const BuildSpaceScreen = () => {
    const navigation = useNavigation();

    return (
        <GlobalScaffold>
            <ScrollView contentContainerStyle={{ paddingBottom: 110 }}>
                <View style={styles.blurContainer}>
                    <Image
                        source={img.blur_texture}
                        style={[StyleSheet.absoluteFill, { width: '100%', height: '100%' }]}
                        contentFit="cover"
                    />

                    <View style={styles.contentPadding}>
                        {/* Header Section */}
                        <View style={styles.headerRow}>
                            <TouchableOpacity
                                style={styles.backButton}
                                onPress={() => navigation.goBack()}
                            >
                                <Ionicons name="chevron-back" size={15} color={colors.textPrimary} />
                            </TouchableOpacity>
                        </View>

                        {/* Center the emoji horizontally */}
                        <View style={styles.emojiContainer}>
                            <Image
                                source={svg.emoji}
                                style={styles.ImageStyle}
                                contentFit="contain"
                            />
                        </View>

                        {/* Post List */}
                    </View>
                </View>
            </ScrollView>
        </GlobalScaffold>
    );
};

export default BuildSpaceScreen;

const styles = StyleSheet.create({
    blurContainer: {
        position: 'relative',
        minHeight: '100%',
    },
    contentPadding: {
        paddingHorizontal: 10,
        paddingTop: 0,
    },
    ImageStyle: {
        height: 100,
        width: 100,
    },
    backButton: {
        backgroundColor: colors.peachLight,
        borderRadius: 50,
        width: 35,
        height: 35,
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerRow: { flexDirection: 'row', alignItems: 'center' },

    // Centering the emoji container
    emojiContainer: {
        justifyContent: 'center',  // Center vertically if needed
        alignItems: 'center',      // Center horizontally
        marginTop: 20,             // Optional: adds space from the top
    },
});
