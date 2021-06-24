import React, {useLayoutEffect} from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import constants from '../../constants';
import AuthStyles from '../../styles/AuthStyles';
import SpaceStyles from '../../styles/SpaceStyles';
import CustomText from '../../components/CustomText';
import TextStyles from '../../styles/TextStyles';
import HeaderLeft from '../../components/headerLeft';
import {back} from '../../constants/Images';
import CustomTextInput from '../../components/CustomTextInput';
import ReactNativeHapticFeedback from 'react-native-haptic-feedback';

const options = {
  enableVibrateFallback: true,
  ignoreAndroidSystemSettings: false,
};

function LoginScreen(props) {
  const {navigation} = props;
  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <HeaderLeft iconName={back} onPress={() => navigation.goBack()} />
      ),
    });
  }, [navigation]);

  return (
    <View style={AuthStyles.authContainer}>
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
            onPress={() => navigation.navigate('ForgotPasswordScreen')}>
            <CustomText
              text={'Forgot password'}
              style={TextStyles.textMedium16}
            />
          </TouchableOpacity>
        </View>
      </ScrollView>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'position' : null}
        keyboardVerticalOffset={90}>
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
    </View>
  );
}

export default LoginScreen;
