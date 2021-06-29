import React, { useLayoutEffect } from 'react';
import {
  View,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import AuthStyles from '../../styles/AuthStyles';
import SpaceStyles from '../../styles/SpaceStyles';
import CustomText from '../../components/CustomText';
import TextStyles from '../../styles/TextStyles';
import CustomTextInput from '../../components/CustomTextInput';
import ReactNativeHapticFeedback from 'react-native-haptic-feedback';
import { cancel, whiteFlare } from '../../constants/Images';
import HeaderLeft from '../../components/headerLeft';
import HeaderRight from '../../components/headerRight';
import HeaderTitle from '../../components/headerTitle';
import CommonStyles from '../../styles/CommonStyles';

const options = {
  enableVibrateFallback: true,
  ignoreAndroidSystemSettings: false,
};

function LoginScreen(props) {
  const { navigation } = props;

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
            style={[SpaceStyles.spaceVertical, { alignSelf: 'flex-start' }]}
            onPress={() => [navigation.navigate('ForgotPasswordScreen')]}>
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
              navigation.navigate('SignUpScreen'),
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
            navigation.navigate('SignUpScreen'),
            ReactNativeHapticFeedback.trigger('impactLight', options),
          ]}>
          <CustomText text={'Log in'} style={TextStyles.textBold16White} />
        </TouchableOpacity>
      )}
    </View>
  );
}

export default LoginScreen;
