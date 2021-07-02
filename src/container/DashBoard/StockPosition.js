import React, { useState, useLayoutEffect, useRef } from 'react';
import {
  View,
  TouchableOpacity,
  Image,
  Text,
  FlatList,
  ScrollView,
} from 'react-native';
import CustomText from '../../components/CustomText';
import AuthStyles from '../../styles/AuthStyles';
import SpaceStyles from '../../styles/SpaceStyles';
import TextStyles from '../../styles/TextStyles';
import {
  average,
  calendar,
  convert,
  minusIcon,
  plus,
  refreshIcon,
  back,
  starIcon,
  downArrowRed,
  alert,
  roundEdge,
  profilePicture,
} from '../../constants/Images';
import CommonStyles from '../../styles/CommonStyles';
import OverView from './OverView';
import WatchList from './WatchList';
import ReactNativeHapticFeedback from 'react-native-haptic-feedback';
import { Header } from 'react-native-elements';
import { DARK_BLACK, RED, BLUE, OFF_WHITE } from '../../constants/Colors';
import constants from '../../constants';
import HeaderLeft from '../../components/headerLeft';
import HeaderRight from '../../components/headerRight';
import {
  Chart,
  VerticalAxis,
  HorizontalAxis,
  Line,
} from 'react-native-responsive-linechart';
import Modal from 'react-native-modal';
import DetailsTab from '../../components/StockPosition/DetailsTab';
import PositionTab from '../../components/StockPosition/PositionTab';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

const HEIGHT = constants.BaseStyle.DEVICE_HEIGHT / 100;
const WIDTH = constants.BaseStyle.DEVICE_WIDTH / 100;

const options = {
  enableVibrateFallback: true,
  ignoreAndroidSystemSettings: false,
};

const dayFilterData = [
  { type: '1D' },
  { type: '5D' },
  { type: '1M' },
  { type: 'YTD' },
  { type: '1Y' },
  { type: '2Y' },
  { type: 'ALL' },
];

const data = [{}, {}, {}, {}, {}, {}, {}, {}];

function StockPosition(props) {
  const [isTab, setTab] = useState('overview');
  const [dayFilter, setDayFilter] = useState('1D');
  const [screenModule, setScreenModule] = useState('position');
  const [tradeModal, setTradeModal] = useState(false);
  const { navigation } = props;

  const [activeTab, setActiveTab] = useState('tab1')

  const tabRef = useRef();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <HeaderLeft iconName={back} onPress={() => navigation.goBack()} />
      ),
      headerRight: () => <HeaderRight iconName={starIcon} />,
    });
  }, [navigation]);

  const renderDayFilter = ({ item, index }) => {
    return (
      <View style={CommonStyles.dayBoxView}>
        <TouchableOpacity
          style={
            dayFilter == item.type
              ? CommonStyles.selectedDayRedBox
              : CommonStyles.unSelectedDayBox
          }
          activeOpacity={1}
          onPress={() => [
            setDayFilter(item.type),
            ReactNativeHapticFeedback.trigger('selection', options),
          ]}>
          <CustomText
            text={item.type}
            style={
              dayFilter == item.type
                ? TextStyles.textSemiBold14Red
                : TextStyles.textSemiBold14DarkBlack
            }
          />
        </TouchableOpacity>
      </View>
    );
  };

  const TebList = props => {
    return (
      <View style={SpaceStyles.alignSpaceCenter}>
        {props.tabs.map((tab, i) => {
          return (
            <TouchableOpacity
              key={i}
              onPress={() => {
                props.goToPage(i);
              }}
              style={
                props.activeTab === i
                  ? CommonStyles.horizontalBlueLine
                  : CommonStyles.horizontalGrayLine
              }>
              <CustomText text={tab} />
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };

  return (
    <View style={AuthStyles.authContainer}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={SpaceStyles.spaceHorizontal}>
          <CustomText
            text={'Netflix'}
            style={[TextStyles.textBold18DarkBlack, { marginTop: 10 }]}
          />
          <View style={CommonStyles.amountView}>
            <CustomText text={'$ 497.89'} style={TextStyles.textBold24} />
            <Text>
              <CustomText
                text={'Bid: '}
                style={TextStyles.textMedium15DarkGray}
              />
              <CustomText
                text={'497.40 '}
                style={TextStyles.textSemiBold14DarkBlack}
              />
              <CustomText
                text={'Ask: '}
                style={TextStyles.textMedium15DarkGray}
              />
              <CustomText
                text={'498'}
                style={TextStyles.textSemiBold14DarkBlack}
              />
            </Text>
          </View>
          <View style={CommonStyles.amountStatusView}>
            <View style={SpaceStyles.rowFlex}>
              <Image source={downArrowRed} />
              <CustomText
                text={'$10.40 (2.45%)'}
                style={[TextStyles.textSemiBold14Red, SpaceStyles.left2]}
              />
            </View>
            <Text>
              <CustomText text={'Volume: '} style={TextStyles.textMedium15} />
              <CustomText
                text={'809.7K'}
                style={TextStyles.textSemiBold14DarkBlack}
              />
            </Text>
          </View>

          <Chart
            style={CommonStyles.stockChartView}
            data={[
              { x: 0, y: 0 },
              { x: 1, y: 3 },
              { x: 2, y: 1 },
              { x: 3, y: 2 },
              { x: 4, y: 2 },
              { x: 5, y: 2 },
              { x: 6, y: 1 },
            ]}
            padding={{ bottom: 0, right: 0, top: 0, left: 0 }}>
            <Line
              smoothing="bezier"
              tension={0.1}
              theme={{ stroke: { color: RED, width: 1.5 } }}
            />
          </Chart>

          <FlatList
            data={dayFilterData}
            keyboardShouldPersistTaps="handled"
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            scrollEnabled={false}
            horizontal={true}
            renderItem={renderDayFilter}
            contentContainerStyle={CommonStyles.dayBoxContentView}
            style={SpaceStyles.spaceVertical}
          />
        </View>
        <ScrollableTabView
          initialPage={0}
          ref={tabRef}
          renderTabBar={() => <TebList />}>
          <PositionTab />
          <DetailsTab />
        </ScrollableTabView>

        {/* <Tab.Navigator
          tabBarOptions={
            SpaceStyles.alignSpaceCenter
          } >
          <Tab.Screen name="PositionTab" component={PositionTab} />
          <Tab.Screen name="DetailsTab" component={DetailsTab} />
        </Tab.Navigator> */}
        <Modal
          isVisible={tradeModal}
          onBackdropPress={() => setTradeModal(false)}
          onBackButtonPress={() => setTradeModal(false)}
          onSwipeComplete={() => setTradeModal(false)}
          animationIn={'slideInUp'}
          animationOut={'slideOutDown'}
          swipeDirection="down"
          style={{ margin: 0 }}>
          <View style={CommonStyles.modalView}>
            <View style={CommonStyles.modalTopLine} />
            <View style={[SpaceStyles.top2, SpaceStyles.row]}>
              <Image
                source={plus}
                style={SpaceStyles.top1}
                resizeMode="contain"
              />
              <View style={SpaceStyles.left3}>
                <CustomText
                  text={'Buy NFLX'}
                  style={[TextStyles.textBold16Black]}
                />
                <CustomText
                  text={'Buying Power: $1,000.34'}
                  style={[TextStyles.textMedium15]}
                />
              </View>
            </View>
            <View style={[SpaceStyles.top3, SpaceStyles.row]}>
              <Image
                source={minusIcon}
                style={SpaceStyles.top1}
                resizeMode="contain"
              />
              <View style={SpaceStyles.left3}>
                <CustomText
                  text={'Sell NFLX'}
                  style={[TextStyles.textBold16Black]}
                />
                <CustomText
                  text={'Day Trading Count: 2'}
                  style={[TextStyles.textMedium15]}
                />
              </View>
            </View>
            <View style={[SpaceStyles.top3, SpaceStyles.row]}>
              <Image
                source={convert}
                style={SpaceStyles.top1}
                resizeMode="contain"
              />
              <View style={SpaceStyles.left3}>
                <CustomText
                  text={'Convert'}
                  style={[TextStyles.textBold16Black]}
                />
                <CustomText
                  text={'Convert NFLX to another stock'}
                  style={[TextStyles.textMedium15]}
                />
              </View>
            </View>
            <View style={[SpaceStyles.top3, SpaceStyles.row]}>
              <Image
                source={average}
                style={SpaceStyles.top1}
                resizeMode="contain"
              />
              <View style={SpaceStyles.left3}>
                <CustomText
                  text={'Dollar Cost Average'}
                  style={[TextStyles.textBold16Black]}
                />
                <CustomText
                  text={'Unsure when to buy? Set up recurring buy'}
                  style={[TextStyles.textMedium15]}
                />
              </View>
            </View>
            <View style={[SpaceStyles.top3, SpaceStyles.row]}>
              <Image
                source={calendar}
                style={SpaceStyles.top1}
                resizeMode="contain"
              />
              <View style={SpaceStyles.left3}>
                <CustomText
                  text={'Trade NFLX Options'}
                  style={[TextStyles.textBold16Black]}
                />
                <CustomText
                  text={'Profit from price movements in any direction'}
                  style={[TextStyles.textMedium15]}
                />
              </View>
            </View>
          </View>
        </Modal>
      </ScrollView>
      <TouchableOpacity
        style={AuthStyles.bottomRedView}
        activeOpacity={1}
        onPress={() => [
          setTradeModal(true),
          ReactNativeHapticFeedback.trigger('impactLight', options),
        ]}>
        <CustomText text={'Trade'} style={TextStyles.textBold16White} />
      </TouchableOpacity>
    </View>
  );
}

export default StockPosition;
