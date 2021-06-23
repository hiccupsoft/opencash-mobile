import React from 'react'
import { StyleSheet, Text } from 'react-native'

const CustomText = (props) => {
    return (
        <Text style={[styles.textStyle, props.style]}>{props.text}</Text>
    )
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 14
    }
})

export default CustomText