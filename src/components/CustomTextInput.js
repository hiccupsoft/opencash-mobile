import React from 'react'
import { View, TextInput } from 'react-native'
import { GRAY, LIGHT_GRAY } from '../constants/Colors'
import AuthStyles from '../styles/AuthStyles'

const CustomTextInput = ({
    containerStyle,
    style,
    placeholder,
    onChangeText,
    placeholderTextColor,
    keyboardType,
    maxLength,
    multiline,
    returnKeyType
}) => {
    return (
        <View style={[AuthStyles.textInputView, containerStyle]}>
            <TextInput
                style={[AuthStyles.textInput, style]}
                placeholder={placeholder}
                onChangeText={onChangeText}
                placeholderTextColor={GRAY}
                keyboardType={keyboardType}
                maxLength={maxLength}
                autoCapitalize={'none'}
                selectionColor={GRAY}
                multiline={multiline}
                returnKeyType={returnKeyType}
            />
        </View>
    )
}
export default CustomTextInput