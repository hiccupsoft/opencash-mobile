import React, {useLayoutEffect} from 'react';
import {
  View,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Image,
  Text,
} from 'react-native';
import AuthStyles from '../../styles/AuthStyles';
import SpaceStyles from '../../styles/SpaceStyles';
import CustomText from '../../components/CustomText';
import TextStyles from '../../styles/TextStyles';
import CustomTextInput from '../../components/CustomTextInput';
import ReactNativeHapticFeedback from 'react-native-haptic-feedback';
import Modal from 'react-native-modal';
import {cancel, logoIcon} from '../../constants/Images';
import HeaderTitle from '../../components/headerTitle';

const options = {
  enableVibrateFallback: true,
  ignoreAndroidSystemSettings: false,
};

function LoginScreen({login, setLogin, setSignup, props}) {
  const {navigation} = props;

  return (
    <Modal
      style={{margin: 0, height: '100%'}}
      animationIn={'slideInUp'}
      animationOut={'slideOutDown'}
      isVisible={login}>
      <View style={AuthStyles.authContainer}>
        <View style={AuthStyles.headerView}>
          <TouchableOpacity onPress={() => setLogin(false)}>
            <Image source={cancel} />
          </TouchableOpacity>
          <HeaderTitle iconName={logoIcon} />
          <Text> </Text>
        </View>
        <ScrollView keyboardDismissMode={'on-drag'}>
          <View style={SpaceStyles.spaceHorizontal}>
            <CustomText
              text={'Log in to Opencash'}
              style={[
                TextStyles.textBold16Black,
                SpaceStyles.top5,
                SpaceStyles.bottom1,
              ]}
            />
            <CustomTextInput placeholder="Email" textType={'emailAddress'} />
            <CustomTextInput placeholder="Password" secureText={true} />
            <TouchableOpacity
              style={[SpaceStyles.spaceVertical, {alignSelf: 'flex-start'}]}
              onPress={() => [
                setLogin(false),
                setTimeout(() => {
                  navigation.navigate('ForgotPasswordScreen');
                }, 300),
              ]}>
              <CustomText
                text={'Forgot password'}
                style={TextStyles.textMedium16}
              />
            </TouchableOpacity>
          </View>
        </ScrollView>
        {Platform.OS === 'ios' ? (
          <KeyboardAvoidingView behavior={'position'}>
            <TouchableOpacity
              style={AuthStyles.bottomJoinView}
              activeOpacity={0.8}
              onPress={() => [
                setLogin(false),
                setTimeout(() => {
                  setSignup(true);
                }, 500),
                ReactNativeHapticFeedback.trigger('impactLight', options),
              ]}>
              <CustomText text={'Log in'} style={TextStyles.textBold16White} />
            </TouchableOpacity>
          </KeyboardAvoidingView>
        ) : (
          <TouchableOpacity
            style={AuthStyles.bottomJoinView}
            activeOpacity={0.8}
            onPress={() => [
              setLogin(false),
              setTimeout(() => {
                setSignup(true);
              }, 500),
              ReactNativeHapticFeedback.trigger('impactLight', options),
            ]}>
            <CustomText text={'Log in'} style={TextStyles.textBold16White} />
          </TouchableOpacity>
        )}
      </View>
    </Modal>
  );
}

export default LoginScreen;
