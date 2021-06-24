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
import { cancel, logoIcon } from '../../constants/Images';
import CustomTextInput from '../../components/CustomTextInput';
import CheckBox from 'react-native-check-box';
import { GRAY, BLUE } from '../../constants/Colors';
import ReactNativeHapticFeedback from 'react-native-haptic-feedback';
import Modal from 'react-native-modal';
import HeaderTitle from '../../components/headerTitle';

const options = {
  enableVibrateFallback: true,
  ignoreAndroidSystemSettings: false,
};

function SignUpScreen({ props, signup, setSignup, setLogin }) {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <Modal
      style={{ margin: 0 }}
      animationIn={'slideInUp'}
      animationOut={'slideOutDown'}
      isVisible={signup}
    >
      <View style={AuthStyles.authContainer}>
        <View style={AuthStyles.headerView}>
          <TouchableOpacity onPress={() => setSignup(false)}>
            <Image source={cancel} />
          </TouchableOpacity>
          <HeaderTitle iconName={logoIcon} />
          <Text>{' '}</Text>
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
                setSignup(false),
                setTimeout(() => {
                  setLogin(true)
                }, 500),
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
              setSignup(false),
              setTimeout(() => {
                setLogin(true)
              }, 500),
              ReactNativeHapticFeedback.trigger('impactLight', options),
            ]}>
            <CustomText text={'Sign up'} style={TextStyles.textBold16White} />
          </TouchableOpacity>
        }
      </View>
    </Modal>
  );
}

export default SignUpScreen;
