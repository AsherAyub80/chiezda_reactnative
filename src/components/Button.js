import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

const PrimaryButton = ({
  text,
  onPress,
  gradient = ['#222222', '#3C3B3B'], // Flutter default gradient
  borderColor,
  borderWidth = 1,
  borderRadius = 16,
  paddingVertical = 14,
  paddingHorizontal = 24,
  textStyle,
  prefixIcon,
  suffixIcon,
  isDisabled = false,
  width = '100%',
  height = 55,
}) => {
  const effectiveTextStyle = {
    color: '#FFFFFF',
    fontWeight: '500',
    fontSize: 16,
    ...textStyle,
  };

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={isDisabled ? null : onPress}
      style={{ opacity: isDisabled ? 0.6 : 1 }}
    >
      <LinearGradient
        colors={gradient}
        start={[0, 0]}
        end={[1, 1]}
        style={[
          {
            width,
            height,
            borderRadius,
            paddingVertical,
            paddingHorizontal,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          },
          borderColor ? { borderColor, borderWidth } : {},
        ]}
      >
        {prefixIcon && <View style={{ marginRight: 8 }}>{prefixIcon}</View>}

        <Text style={effectiveTextStyle}>{text}</Text>

        {suffixIcon && <View style={{ marginLeft: 8 }}>{suffixIcon}</View>}
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default PrimaryButton;
