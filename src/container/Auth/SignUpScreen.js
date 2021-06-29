import React, { useLayoutEffect, useState } from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  ScrollView,
  Platform,
  KeyboardAvoidingView,
  Image
} from 'react-native';
import AuthStyles from '../../styles/AuthStyles';
import SpaceStyles from '../../styles/SpaceStyles';
import CustomText from '../../components/CustomText';
import TextStyles from '../../styles/TextStyles';
import { cancel, logoIcon, whiteFlare } from '../../constants/Images';
import CustomTextInput from '../../components/CustomTextInput';
import CheckBox from 'react-native-check-box';
import { GRAY, BLUE } from '../../constants/Colors';
import ReactNativeHapticFeedback from 'react-native-haptic-feedback';
import HeaderRight from '../../components/headerRight';
import HeaderLeft from '../../components/headerLeft';
import HeaderTitle from '../../components/headerTitle';

const options = {
  enableVibrateFallback: true,
  ignoreAndroidSystemSettings: false,
};

function SignUpScreen(props) {
  const [isChecked, setIsChecked] = useState(false);
  const { navigation } = props

  // useLayoutEffect(() => {
  //   navigation.setOptions({
  //     headerLeft: () => (
  //       <HeaderLeft iconName={cancel} onPress={() => navigation.goBack()} />
  //     ),
  //     headerRight: () => (
  //       <HeaderRight />
  //     )
  //   });
  // }, [navigation]);
  return (
    <View style={AuthStyles.authContainer}>
      <View style={AuthStyles.headerLoginView}>
        <HeaderLeft iconName={cancel} onPress={() => navigation.goBack()} />
        <HeaderTitle iconName={whiteFlare} />
        <HeaderRight />
      </View>
      <ScrollView keyboardDismissMode={'on-drag'}>
        <View style={SpaceStyles.spaceHorizontal}>
          <CustomText
            text={'Join Opencash'}
            style={[TextStyles.textBold16Black, SpaceStyles.top5]}
          />
          <View style={SpaceStyles.alignSpaceBlock}>
            <CustomTextInput
              containerStyle={AuthStyles.halfInputView}
              style={AuthStyles.textHalfInput}
              placeholder="First Name"
              textType={'givenName'}
            />
            <CustomTextInput
              containerStyle={AuthStyles.halfInputView}
              style={AuthStyles.textHalfInput}
              placeholder="Last Name"
              textType={'familyName'}
            />
          </View>
          <CustomTextInput placeholder="Email" textType={'emailAddress'} />
          <CustomTextInput placeholder="Password" secureText={true} />
          <View style={[SpaceStyles.rowFlex, SpaceStyles.spaceVertical]}>
            <CheckBox
              checkBoxColor={GRAY}
              checkedCheckBoxColor={BLUE}
              onClick={() => {
                setIsChecked(!isChecked);
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
      </ScrollView>
      {Platform.OS === 'ios' ?
        <KeyboardAvoidingView
          behavior={'position'}>
          <TouchableOpacity
            style={AuthStyles.bottomJoinView}
            activeOpacity={0.8}
            onPress={() => [
              navigation.navigate('LoginScreen'),
              ReactNativeHapticFeedback.trigger('impactLight', options),
            ]}>
            <CustomText text={'Sign up'} style={TextStyles.textBold16White} />
          </TouchableOpacity>
        </KeyboardAvoidingView>
        :
        <TouchableOpacity
          style={AuthStyles.bottomJoinView}
          activeOpacity={0.8}
          onPress={() => [
            navigation.navigate('LoginScreen'),
            ReactNativeHapticFeedback.trigger('impactLight', options),
          ]}>
          <CustomText text={'Sign up'} style={TextStyles.textBold16White} />
        </TouchableOpacity>
      }
    </View>
  );
}

export default SignUpScreen;
