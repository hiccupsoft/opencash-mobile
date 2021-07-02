import React, {useState, useLayoutEffect} from 'react';
import {View, TouchableOpacity, Image} from 'react-native';
import CustomText from '../../components/CustomText';
import AuthStyles from '../../styles/AuthStyles';
import SpaceStyles from '../../styles/SpaceStyles';
import TextStyles from '../../styles/TextStyles';
import {overview, star, summary, back} from '../../constants/Images';
import CommonStyles from '../../styles/CommonStyles';
import OverView from './OverView';
import WatchList from './WatchList';
import ReactNativeHapticFeedback from 'react-native-haptic-feedback';
import {Header} from 'react-native-elements';
import {DARK_BLACK} from '../../constants/Colors';
import constants from '../../constants';
import HeaderLeft from '../../components/headerLeft';
import HeaderRight from '../../components/headerRight';
import HeaderTitleText from '../../components/headerTitleText';

const options = {
  enableVibrateFallback: true,
  ignoreAndroidSystemSettings: false,
};

const data = [{}, {}, {}, {}, {}];

function BuyCrypto(props) {
  const [isTab, setTab] = useState('overview');
  const {navigation} = props;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <HeaderLeft iconName={back} onPress={() => navigation.goBack()} />
      ),
      headerRight: () => <HeaderRight iconName={''} />,
      headerTitle: () => (
        <HeaderTitleText
          titleName={'BTC - $497.50'}
          value={'$1,000.34 available'}
        />
      ),
    });
  }, [navigation]);

  return (
    <View style={AuthStyles.authContainer}>
      <View style={[SpaceStyles.spaceHorizontal, SpaceStyles.top9]}>
        <View style={[SpaceStyles.alignSpaceBlock]}>
          <CustomText
            text={'Quantity'}
            style={TextStyles.textMedium16DarkGray}
          />
          <CustomText text={'5'} style={TextStyles.textBold16DarkBlack} />
        </View>
        <View style={CommonStyles.lineView} />
        <View style={[SpaceStyles.alignSpaceBlock]}>
          <CustomText
            text={'Market Price'}
            style={TextStyles.textMedium16DarkGray}
          />
          <CustomText text={'$497.00'} style={TextStyles.textBold16DarkBlack} />
        </View>
        <View style={CommonStyles.lineView} />
        <View style={[SpaceStyles.alignSpaceBlock]}>
          <CustomText
            text={'Estimated Cost'}
            style={TextStyles.textMedium16DarkGray}
          />
          <CustomText
            text={'$2,487.50'}
            style={TextStyles.textBold16DarkBlack}
          />
        </View>
        <View style={CommonStyles.lineView} />

        <CustomText
          text={
            'You are placing a market order to buy 5 BTC. Your order will be executed during regular market hours.'
          }
          style={[TextStyles.textMedium15DarkBlack, , SpaceStyles.top3]}
        />
        <CustomText
          text={
            'You are placing a limit order to buy 5 BTC at $497.50. Good-til-cancel limit orders will remain open until canceled or for 90 days.'
          }
          style={[TextStyles.textMedium15DarkBlack, SpaceStyles.top5]}
        />
      </View>
      <TouchableOpacity
        style={CommonStyles.bottomBuyButton}
        activeOpacity={1}
        onPress={() => [
          // setTradeModal(true),
          ReactNativeHapticFeedback.trigger('impactLight', options),
        ]}>
        <CustomText text={'Buy BTC'} style={TextStyles.textBold16White} />
      </TouchableOpacity>
    </View>
  );
}
export default BuyCrypto;
