import React from 'react';
import {View, Image, TouchableOpacity, ScrollView} from 'react-native';
import AuthStyles from '../../styles/AuthStyles';
import SpaceStyles from '../../styles/SpaceStyles';
import {hand, logo, percent} from '../../constants/Images';
import CustomText from '../../components/CustomText';
import TextStyles from '../../styles/TextStyles';
import ReactNativeHapticFeedback from 'react-native-haptic-feedback';

const options = {
  enableVibrateFallback: true,
  ignoreAndroidSystemSettings: false,
};

function AuthScreen(props) {
  const {navigation} = props;
  return (
    <View style={AuthStyles.authContainer}>
      <Image source={logo} style={AuthStyles.logoImage} resizeMode="contain" />
      <View style={SpaceStyles.spaceHorizontal}>
        <View style={SpaceStyles.row}>
          <Image
            source={hand}
            resizeMode="contain"
            style={AuthStyles.imageHand}
          />
          <View style={[SpaceStyles.leftMargin, AuthStyles.textView]}>
            <CustomText
              text={'Commission-free stock trading using your crypto'}
              style={TextStyles.textRegular20}
            />
            <CustomText
              text={
                'Invest in thousands of US stocks while you continue to hold your crypto assets.'
              }
              style={[TextStyles.textRegular15, SpaceStyles.vertical1]}
            />
          </View>
        </View>
        <View style={SpaceStyles.row}>
          <Image
            source={percent}
            resizeMode="contain"
            style={AuthStyles.imagePercent}
          />
          <View style={[SpaceStyles.leftMargin, AuthStyles.textView]}>
            <CustomText
              text={'Borrow against your crypto for cash or stablecoins'}
              style={TextStyles.textRegular20}
            />
            <CustomText
              text={
                'Get access to cash or stablecoins in minutes with an Opencash credit line.'
              }
              style={[TextStyles.textRegular15, SpaceStyles.vertical1]}
            />
          </View>
        </View>
      </View>

      <TouchableOpacity
        style={AuthStyles.textLogin}
        onPress={() => [
          navigation.navigate('LoginScreen'),
          ReactNativeHapticFeedback.trigger('impactLight', options),
        ]}>
        <CustomText text={'Log in'} style={[TextStyles.textBold16]} />
      </TouchableOpacity>
      <TouchableOpacity
        style={AuthStyles.bottomJoinView}
        activeOpacity={0.8}
        onPress={() => [
          navigation.navigate('SignUpScreen'),
          ReactNativeHapticFeedback.trigger('impactLight', options),
        ]}>
        <CustomText text={'Join Opencash'} style={TextStyles.textBold16White} />
      </TouchableOpacity>
    </View>
  );
}

export default AuthScreen;
