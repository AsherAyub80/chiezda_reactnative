import { Image } from 'expo-image';
import { LinearGradient } from 'expo-linear-gradient';
import { Dimensions, ImageBackground, StyleSheet, View } from 'react-native';
import { img } from '../constants/assets';
import { colors } from '../constants/colors';

const { height: screenHeight } = Dimensions.get('window');

const GlobalScaffold = ({ children, gradientStops = [0.5, 1], height = 0 }) => {
  return (
    <View style={{ flex: 1 }}>
      {/* Gradient Background */}
      <LinearGradient
        colors={[colors.primary, colors.secondary]} // AppColors.primaryColor, AppColors.secondaryColor
        start={{ x: 0.5, y: 0 }} // Alignment.topCenter
        end={{ x: 0.5, y: 1 }} // Alignment.bottomCenter
        locations={gradientStops}
        style={{ flex: 1 }}
      >
        {/* Background Image Texture */}
        <ImageBackground
          source={img.bg_texture} // 'bg_texture'.getImage('png')
          style={{ flex: 1, width: '100%', height: screenHeight }}
          imageStyle={{ resizeMode: 'cover', width: '100%', height: '100%' }} // fit: BoxFit.fill
        >
          <View style={{ flex: 1 }}>
            {/* Top Ellipse - Center(child: Image.asset(...)) */}
            <View style={{ alignItems: 'center', marginTop: 0 }}>
              {/* Flutter passes height=0 in example but default might be different if not 0 */}
              {/* 60 height image */}
              <Image
                source={img.ellipse_center}
                style={{
                  width: 100, // Adjust aspect ratio if needed, Flutter says height: 60
                  height: 100,
                  tintColor: colors.secondary, // color: AppColors.secondaryColor
                }}
                contentFit="contain"
              />
            </View>

            {/* Child Content - Expanded(child: Padding(horizontal: 10, child: child)) */}
            <View style={{ flex: 1, paddingHorizontal: 10 }}>
              {children}
            </View>
          </View>
        </ImageBackground>
      </LinearGradient>
    </View>
  );
};

export default GlobalScaffold;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
