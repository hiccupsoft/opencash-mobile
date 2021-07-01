import React from 'react';
import { View, TextInput } from 'react-native';
import { GRAY, LIGHT_GRAY, BLUE } from '../constants/Colors';
import AuthStyles from '../styles/AuthStyles';

const CustomTextInput = ({
  containerStyle,
  style,
  placeholder,
  onChangeText,
  placeholderTextColor,
  keyboardType,
  maxLength,
  multiline,
  returnKeyType,
  secureText,
  textType,
}) => {
  return (
    <View style={[AuthStyles.textInputView, containerStyle]}>
      <TextInput
        style={[AuthStyles.textInput, style]}
        placeholder={placeholder}
        onChangeText={onChangeText}
        placeholderTextColor={GRAY}
        secureTextEntry={secureText}
        textContentType={textType}
        keyboardType={keyboardType}
        maxLength={maxLength}
        autoCapitalize={'none'}
        selectionColor={BLUE}
        multiline={multiline}
        returnKeyType={returnKeyType}
      />
    </View>
  );
};
export default CustomTextInput;
