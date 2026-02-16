import { Image } from 'expo-image'; // Use Expo Image for SVGs
import { LinearGradient } from 'expo-linear-gradient';
import {
    Dimensions,
    ImageBackground,
    ScrollView,
    StyleSheet,
    View
} from 'react-native';
import { colors } from '../constants/colors';

// NOTE: Import your assets here. 
// If using react-native-svg-transformer, you'd import SVGs as components.
// Otherwise, use require() for standard Image components.
const Elipse1 = require('../../assets/svg/elispe1.svg');
const Ellipse2 = require('../../assets/svg/ellipse2.svg');
const DualEllipse = require('../../assets/svg/dual_ellipse.svg');
const EllipseCenter = require('../../assets/images/ellipse-center.png');
const BgTexture = require('../../assets/images/bg_texture.png');

const { height: screenHeight } = Dimensions.get('window');

const GlobalBackground = ({
    children,
    isRight = true,
    isLeft = false,
    isSpacer = false,
    gradientStops = [0.5, 1.0],
    isHideEllipse = false,
}) => {

    const renderTopEllipse = () => {
        if (isHideEllipse) return null;

        // Flutter: Row(children: [80.width, SvgPicture.asset('elispe1')])
        if (isRight && !isLeft) {
            return (
                <View style={[styles.row, { paddingLeft: 80 }]}>
                    <Image source={Elipse1} style={styles.svgAsset} />
                </View>
            );
        }

        // Flutter: Row(mainAxisAlignment: end, children: [Svg, 100.width])
        if (isLeft) {
            return (
                <View style={[styles.row, { justifyContent: 'flex-end', paddingRight: 100 }]}>
                    <Image source={Ellipse2} style={styles.svgAsset} />
                </View>
            );
        }

        // Flutter: Center(Image.asset('ellipse-center', height: 60))
        return (
            <View style={styles.center}>
                <Image
                    source={EllipseCenter}
                    style={[styles.pngCenter, { tintColor: colors.secondary }]}
                />
            </View>
        );
    };

    const ContainerContent = () => (
        <View style={{ flex: 1 }}>
            {renderTopEllipse()}

            <View style={{ flex: 1 }}>
                {children}
            </View>

            {/* Bottom SVG Asset - Flutter: Align(alignment: bottomCenter) */}
            <View style={styles.bottomAlign}>
                <Image source={DualEllipse} style={styles.bottomSvg} />
            </View>
        </View>
    );

    const MainLayout = () => (
        <ImageBackground
            source={BgTexture}
            style={styles.container}
            resizeMode="cover"
        >
            {isSpacer || screenHeight > 1100 ? (
                <ContainerContent />
            ) : (
                <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                    <ContainerContent />
                </ScrollView>
            )}
        </ImageBackground>
    );

    return (
        <LinearGradient
            colors={[colors.primary || '#FFFFFF', colors.secondary || '#F0F0F0']}
            locations={gradientStops}
            style={styles.container}
        >
            <MainLayout />
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20, // Adjust based on status bar
    },
    center: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
    },
    svgAsset: {
        width: 100, // Set specific sizes for your SVG assets
        height: 100,
        resizeMode: 'contain',
    },
    pngCenter: {
        height: 60,
        width: 60,
        resizeMode: 'contain',
    },
    bottomAlign: {
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingBottom: 10,
    },
    bottomSvg: {
        width: '100%',
        height: 80,
        resizeMode: 'contain',
    },
});

export default GlobalBackground;