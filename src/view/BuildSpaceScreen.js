import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { Image } from 'expo-image';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import GlobalScaffold from "../components/GlobalScaffold";
import { img, svg } from '../constants/assets';
import { colors } from '../constants/colors';
import { appTextTheme } from '../constants/textStyle';

const SpaceTypeCard = ({ color, title, textColor }) => {
    return (
        <View style={[styles.cardContainer, { backgroundColor: color }]}>
            <Text style={[appTextTheme.bodyMedium, { color: textColor, textAlign: 'center' }]}>
                {title}
            </Text>
            {/* Positioned Background Image Decoration */}
            <View style={styles.svgContainer}>
                <Image
                    source={svg.oval}
                    style={styles.svgElement}
                    contentFit="contain"
                />
            </View>
        </View>
    );
};

const BuildSpaceScreen = () => {
    const navigation = useNavigation();
    const spaceType = [
        { title: 'Grief & Loss', color: '#FFA872', titleColor: '#5C3720' },
        { title: 'Anxiety Support', color: '#83BEE8', titleColor: '#2D6186' },
        { title: 'PTSD Support', color: '#FF707F', titleColor: '#821E28' },
        { title: 'Faith & Hope', color: '#8FB1D6', titleColor: '#204976' },
        { title: 'General Reflection', color: '#B7DC99', titleColor: '#1E3D05' },
        { title: 'Work Stress', color: '#E08F9E', titleColor: '#301116' },
    ];


    return (
        <GlobalScaffold>
            <ScrollView contentContainerStyle={styles.scrollViewContent}>
                <View style={styles.blurContainer}>
                    <Image
                        source={img.blur_texture}
                        style={styles.blurImage}
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

                        {/* Emoji and Title Section */}
                        <View style={styles.emojiContainer}>
                            <Image
                                source={svg.emoji}
                                style={styles.emojiImage}
                                contentFit="contain"
                            />
                            <View style={styles.sizedBox} />
                            <Text style={[appTextTheme.headlineLarge, { fontSize: 32, textAlign: 'center' }]}>
                                Building your space.
                            </Text>
                            <View style={styles.sizedBoxSmall} />
                            <Text style={[appTextTheme.bodySmall, { textAlign: 'center' }]}>
                                Add challenges that you would like help with in your space.
                            </Text>
                        </View>

                        {/* SpaceType Cards Grid */}
                        <View style={styles.spaceGrid}>
                            {spaceType.map((item, index) => (
                                <SpaceTypeCard
                                    key={index}
                                    color={item.color}
                                    title={item.title}
                                    textColor={item.titleColor}
                                />
                            ))}
                        </View>
                    </View>
                </View>
            </ScrollView>
        </GlobalScaffold>
    );
};

export default BuildSpaceScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
    },
    scrollViewContent: {
        paddingBottom: 110,
    },
    blurContainer: {
        position: 'relative',
        minHeight: '100%',
    },
    blurImage: {
        ...StyleSheet.absoluteFillObject,
        width: '100%',
        height: '100%',
    },
    contentPadding: {
        paddingHorizontal: 15,
        paddingTop: 10,
    },
    headerRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
    },
    backButton: {
        backgroundColor: colors.peachLight,
        borderRadius: 50,
        width: 35,
        height: 35,
        justifyContent: 'center',
        alignItems: 'center',
    },
    emojiContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },
    sizedBox: {
        height: 20,
    },
    sizedBoxSmall: {
        height: 10,
    },
    emojiImage: {
        height: 100,
        width: 100,
    },
    spaceGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        marginTop: 30,
    },
    cardContainer: {
        width: '48%',
        height: 140, // Fixed height for consistency in grid
        borderRadius: 20,
        marginBottom: 20,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
    },
    svgContainer: {
        position: 'absolute',
        top: -40,
        right: -40,
        opacity: 0.3,
    },
    svgElement: {
        width: 120,
        height: 140,
    },
});