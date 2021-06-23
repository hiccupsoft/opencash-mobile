import React, { useLayoutEffect } from 'react'
import { View, Image, TouchableOpacity } from 'react-native'
import AuthStyles from '../../styles/AuthStyles'
import SpaceStyles from '../../styles/SpaceStyles'
import CustomText from '../../components/CustomText'
import TextStyles from '../../styles/TextStyles'
import HeaderLeft from '../../components/headerLeft'
import { back } from '../../constants/Images'
import CustomTextInput from '../../components/CustomTextInput'

function ForgotPasswordScreen(props) {
    const { navigation } = props
    useLayoutEffect(() => {
        navigation.setOptions({
            headerLeft: () => <HeaderLeft iconName={back} onPress={() => navigation.goBack()} />
        })
    }, [navigation])

    return (
        <View style={AuthStyles.authContainer}>
            <View style={SpaceStyles.spaceHorizontal}>
                <CustomText
                    text={'Password reset'}
                    style={[TextStyles.textBold16Black, SpaceStyles.top5]}
                />
                <CustomTextInput
                    placeholder='Email'
                />
            </View>
            <TouchableOpacity
                style={AuthStyles.bottomJoinView}
                activeOpacity={0.8}
            >
                <CustomText
                    text={'Send instructions'}
                    style={TextStyles.textBold16White}
                />
            </TouchableOpacity>
        </View>
    )
}

export default ForgotPasswordScreen