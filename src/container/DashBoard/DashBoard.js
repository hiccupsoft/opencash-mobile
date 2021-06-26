import React, {useState} from 'react';
import {View, TouchableOpacity, Image} from 'react-native';
import CustomText from '../../components/CustomText';
import AuthStyles from '../../styles/AuthStyles';
import SpaceStyles from '../../styles/SpaceStyles';
import TextStyles from '../../styles/TextStyles';
import {overview, star, summary} from '../../constants/Images';
import CommonStyles from '../../styles/CommonStyles';
import OverView from './OverView';
import WatchList from './WatchList';
import ReactNativeHapticFeedback from 'react-native-haptic-feedback';
import {Header} from 'react-native-elements';
import {DARK_BLACK} from '../../constants/Colors';
import constants from '../../constants';

const options = {
  enableVibrateFallback: true,
  ignoreAndroidSystemSettings: false,
};

const data = [{}, {}, {}, {}, {}];
function DashBoard(props) {
  const [isTab, setTab] = useState('overview');
  return (
    <View style={AuthStyles.authContainer}>
      <View style={AuthStyles.headerView}>
        <CustomText text={'Investing'} style={TextStyles.textBold24} />
      </View>
      <View
        style={[
          SpaceStyles.alignSpaceBlock,
          SpaceStyles.spaceHorizontal,
          SpaceStyles.spaceVertical,
        ]}>
        <TouchableOpacity
          activeOpacity={1}
          style={
            isTab == 'overview'
              ? CommonStyles.dashBoardSelectedTabView
              : CommonStyles.dashBoardTabView
          }
          onPress={() => [
            setTab('overview'),
            ReactNativeHapticFeedback.trigger('impactLight', options),
          ]}>
          <Image
            source={overview}
            resizeMode="contain"
            style={CommonStyles.tabDashboardImage}
          />
          <CustomText
            text={'Overview'}
            style={TextStyles.textSemiBold14DarkBlack}
          />
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={1}
          style={
            isTab == 'watchlist'
              ? CommonStyles.dashBoardSelectedTabView
              : CommonStyles.dashBoardTabView
          }
          onPress={() => [
            setTab('watchlist'),
            ReactNativeHapticFeedback.trigger('impactLight', options),
          ]}>
          <Image
            source={star}
            resizeMode="contain"
            style={CommonStyles.tabDashboardImage}
          />
          <CustomText
            text={'Watchlist'}
            style={TextStyles.textSemiBold14DarkBlack}
          />
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={1}
          style={
            isTab == 'summary'
              ? CommonStyles.dashBoardSelectedTabView
              : CommonStyles.dashBoardTabView
          }
          onPress={() => [
            setTab('summary'),
            ReactNativeHapticFeedback.trigger('impactLight', options),
          ]}>
          <Image
            source={summary}
            resizeMode="contain"
            style={CommonStyles.tabDashboardImage}
          />
          <CustomText
            text={'Summary'}
            style={TextStyles.textSemiBold14DarkBlack}
          />
        </TouchableOpacity>
      </View>
      {isTab == 'overview' && <OverView />}
      {isTab == 'watchlist' && <WatchList />}
    </View>
  );
}

export default DashBoard;
