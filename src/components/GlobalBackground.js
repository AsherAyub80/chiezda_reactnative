import { Image } from 'expo-image';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import {
  Dimensions,
  ImageBackground,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors } from '../constants/colors';

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

    if (isRight && !isLeft) {
      return (
        <View style={[styles.row, { paddingLeft: 80 }]}>
          <Image source={Elipse1} style={styles.svgAsset} />
        </View>
      );
    }

    if (isLeft) {
      return (
        <View style={[styles.row, { justifyContent: 'flex-end', paddingRight: 100 }]}>
          <Image source={Ellipse2} style={styles.svgAsset} />
        </View>
      );
    }

    return (
      <View style={styles.center}>
        <Image
          source={EllipseCenter}
          style={[styles.pngCenter, { tintColor: colors.secondary , width: 100, height: 100 }]}
        />
      </View>
    );
  };

  const ContainerContent = () => (
    <View style={{ flex: 1 }}>
      {renderTopEllipse()}

      <View style={{ flex: 1 }}>{children}</View>

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
    <SafeAreaView style={{ flex: 1 }} edges={[]}>
      <StatusBar translucent backgroundColor="transparent" style="light" />
      <LinearGradient
        colors={[colors.primary || '#FFFFFF', colors.secondary || '#F0F0F0']}
        locations={gradientStops}
        style={styles.container}
      >
        <MainLayout />
      </LinearGradient>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  svgAsset: {
    width: 120,
    height: 120,
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
  },
  bottomSvg: {
    width: '100%',
    height: 80,
    resizeMode: 'contain',
  },
});

export default GlobalBackground;
