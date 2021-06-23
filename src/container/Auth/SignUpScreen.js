import React, { useLayoutEffect, useState } from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
import AuthStyles from '../../styles/AuthStyles'
import SpaceStyles from '../../styles/SpaceStyles'
import CustomText from '../../components/CustomText'
import TextStyles from '../../styles/TextStyles'
import HeaderLeft from '../../components/headerLeft'
import { invalidName } from '../../constants/Images'
import CustomTextInput from '../../components/CustomTextInput'
import CheckBox from 'react-native-check-box'
import { GRAY, LIGHT_GRAY } from '../../constants/Colors'

function SignUpScreen(props) {
    const { navigation } = props
    const [isChecked, setIsChecked] = useState(false)

    useLayoutEffect(() => {
        navigation.setOptions({
            headerLeft: () => <HeaderLeft iconName={invalidName} onPress={() => navigation.goBack()} />
        })
    }, [navigation])

    return (
        <View style={AuthStyles.authContainer}>
            <View style={SpaceStyles.spaceHorizontal}>
                <CustomText
                    text={'Join Opencash'}
                    style={[TextStyles.textBold16Black, SpaceStyles.top5]}
                />
                <View style={SpaceStyles.alignSpaceBlock}>
                    <CustomTextInput
                        containerStyle={AuthStyles.halfInputView}
                        style={AuthStyles.textHalfInput}
                        placeholder='First Name'
                    />
                    <CustomTextInput
                        containerStyle={AuthStyles.halfInputView}
                        style={AuthStyles.textHalfInput}
                        placeholder='Last Name'
                    />
                </View>
                <CustomTextInput
                    placeholder='Email'
                />
                <CustomTextInput
                    placeholder='Password'
                />
                <View style={[SpaceStyles.rowFlex, SpaceStyles.spaceVertical]}>
                    <CheckBox
                        checkBoxColor={GRAY}
                        onClick={() => {
                            setIsChecked(!isChecked)
                        }}
                        isChecked={isChecked}
                    />
                    <Text style={SpaceStyles.left2}>
                        <CustomText
                            text={'I agree to the '}
                            style={TextStyles.textMedium14}
                        />
                        <CustomText
                            text={'Terms of Service'}
                            style={TextStyles.textSemiBold14}
                        />

                    </Text>
                </View>

            </View>
            <TouchableOpacity
                style={AuthStyles.bottomJoinView}
                activeOpacity={0.8}
                onPress={() => navigation.navigate('LoginScreen')}
            >
                <CustomText
                    text={'Sign up'}
                    style={TextStyles.textBold16White}
                />
            </TouchableOpacity>
        </View>
    )
}

export default SignUpScreen