import React, {useLayoutEffect} from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  Platform,
  KeyboardAvoidingView,
} from 'react-native';
import AuthStyles from '../../styles/AuthStyles';
import SpaceStyles from '../../styles/SpaceStyles';
import CustomText from '../../components/CustomText';
import TextStyles from '../../styles/TextStyles';
import HeaderLeft from '../../components/headerLeft';
import {back} from '../../constants/Images';
import CustomTextInput from '../../components/CustomTextInput';
import ReactNativeHapticFeedback from 'react-native-haptic-feedback';
import {ifIphoneX} from 'react-native-iphone-x-helper';

const options = {
  enableVibrateFallback: true,
  ignoreAndroidSystemSettings: false,
};

function ForgotPasswordScreen(props) {
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
            text={'Password reset'}
            style={[
              TextStyles.textBold16Black,
              SpaceStyles.top5,
              SpaceStyles.bottom1,
            ]}
          />
          <CustomTextInput placeholder="Email" textType={'emailAddress'} />
        </View>
      </ScrollView>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'position' : null}
        keyboardVerticalOffset={ifIphoneX(90, 64)}>
        <TouchableOpacity
          style={AuthStyles.bottomJoinView}
          activeOpacity={0.8}
          onPress={() => [
            navigation.navigate('LoginScreen'),
            ReactNativeHapticFeedback.trigger('impactLight', options),
          ]}>
          <CustomText
            text={'Send instructions'}
            style={TextStyles.textBold16White}
          />
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

export default ForgotPasswordScreen;
