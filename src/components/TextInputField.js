import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { colors } from '../constants/colors';
import { appTextTheme } from '../constants/textStyle';

const CustomTextField = ({
  value,
  onChangeText,
  labelText,
  label,
  hint,
  prefixIcon,
  prefixWidget,
  suffix,
  textStyle,
  labelStyle,
  hintStyle,
  fillColor = colors.cardSecondary,
  borderRadius = 20,
  maxLines = 1,
  maxLength = 100,
  showCharacterCount = false,
  alwaysShowLabel = false,
  keyboardType = 'default',
}) => {
  return (
    <View style={{ marginBottom: 10 }}>
      {/* Label */}
      {label || (labelText && alwaysShowLabel) ? (
        <Text style={[appTextTheme.bodySmall, labelStyle, { marginBottom: 5 }]}>
          {label || labelText}
        </Text>
      ) : null}

      <View style={[styles.inputWrapper, { borderRadius, backgroundColor: fillColor }]}>
        {/* Prefix */}
        {prefixIcon ? (
          <Ionicons name={prefixIcon} size={20} color="#BF735A" style={{ marginLeft: 10 }} />
        ) : (
          prefixWidget
        )}

        {/* Text Input */}
        <TextInput
  value={value}
  onChangeText={onChangeText}
  placeholder={hint}
  placeholderTextColor={hintStyle?.color || '#888'}
  style={[
    styles.textInput,
    textStyle,
    {
      flex: 1,
      textAlignVertical: 'top', // Align placeholder and text to top
      minHeight: maxLines * 24, // Adjust height based on maxLines (24 = approx line height)
    },
  ]}
  multiline={maxLines > 1}
  maxLength={showCharacterCount ? maxLength : undefined}
  keyboardType={keyboardType}
/>


        {/* Suffix */}
        {suffix ? <View style={{ marginRight: 10 }}>{suffix}</View> : null}
      </View>

      {/* Character Counter */}
      {showCharacterCount && (
        <Text style={{ fontSize: 12, color: '#999', textAlign: 'right', marginTop: 3 }}>
          {value?.length || 0}/{maxLength}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 0.5,
    borderColor: '#DBD0BA',
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  textInput: {
    fontSize: 16,
    color: '#000',
  },
});

export default CustomTextField;
