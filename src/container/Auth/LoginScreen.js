import React, { useLayoutEffect } from 'react'
import { View, Image, TouchableOpacity } from 'react-native'
import constants from '../../constants'
import AuthStyles from '../../styles/AuthStyles'
import SpaceStyles from '../../styles/SpaceStyles'
import CustomText from '../../components/CustomText'
import TextStyles from '../../styles/TextStyles'
import HeaderLeft from '../../components/headerLeft'
import { invalidName } from '../../constants/Images'
import CustomTextInput from '../../components/CustomTextInput'

function LoginScreen(props) {
    const { navigation } = props
    useLayoutEffect(() => {
        navigation.setOptions({
            headerLeft: () => <HeaderLeft iconName={invalidName} onPress={() => navigation.goBack()} />
        })
    }, [navigation])

    return (
        <View style={AuthStyles.authContainer}>
            <View style={SpaceStyles.spaceHorizontal}>
                <CustomText
                    text={'Log in to Opencash'}
                    style={[TextStyles.textBold16Black, SpaceStyles.top5]}
                />
                <CustomTextInput
                    placeholder='Email'
                />
                <CustomTextInput
                    placeholder='Password'
                />
                <TouchableOpacity
                    style={[SpaceStyles.spaceVertical, { alignSelf: 'flex-start' }]}
                    onPress={() => navigation.navigate('ForgotPasswordScreen')}
                >
                    <CustomText
                        text={'Fogot password'}
                        style={TextStyles.textMedium16}
                    />
                </TouchableOpacity>
            </View>
            <TouchableOpacity
                style={AuthStyles.bottomJoinView}
                activeOpacity={0.8}
                onPress={() => navigation.navigate('SignUpScreen')}
            >
                <CustomText
                    text={'Log in'}
                    style={TextStyles.textBold16White}
                />
            </TouchableOpacity>
        </View>
    )
}

export default LoginScreen