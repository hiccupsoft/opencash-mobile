import React, {useState, useLayoutEffect} from 'react';
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
  upArrowGreen,
  alert,
  roundEdge,
  profilePicture,
} from '../../constants/Images';
import CommonStyles from '../../styles/CommonStyles';
import OverView from './OverView';
import WatchList from './WatchList';
import ReactNativeHapticFeedback from 'react-native-haptic-feedback';
import {Header} from 'react-native-elements';
import {GREEN, RED} from '../../constants/Colors';
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

const HEIGHT = constants.BaseStyle.DEVICE_HEIGHT / 100;
const WIDTH = constants.BaseStyle.DEVICE_WIDTH / 100;

const options = {
  enableVibrateFallback: true,
  ignoreAndroidSystemSettings: false,
};

const dayFilterData = [
  {type: '1D'},
  {type: '5D'},
  {type: '1M'},
  {type: 'YTD'},
  {type: '1Y'},
  {type: '2Y'},
  {type: 'ALL'},
];

const data = [{}, {}, {}, {}, {}, {}, {}, {}];

const borrowData = [{}, {}, {}];

function CryptoPosition(props) {
  const [isTab, setTab] = useState('overview');
  const [dayFilter, setDayFilter] = useState('1D');
  const [screenModule, setScreenModule] = useState('position');
  const [tradeModal, setTradeModal] = useState(false);
  const {navigation} = props;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <HeaderLeft iconName={back} onPress={() => navigation.goBack()} />
      ),
      headerRight: () => <HeaderRight iconName={''} />,
    });
  }, [navigation]);

  const renderDayFilter = ({item, index}) => {
    return (
      <View style={CommonStyles.dayBoxView}>
        <TouchableOpacity
          style={
            dayFilter == item.type
              ? CommonStyles.selectedDayGreenBox
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
                ? TextStyles.textSemiBold14Green
                : TextStyles.textSemiBold14DarkBlack
            }
          />
        </TouchableOpacity>
      </View>
    );
  };

  const renderHistory = ({item, index}) => {
    return (
      <View>
        <View style={SpaceStyles.alignSpaceBlock}>
          <View>
            <View style={SpaceStyles.rowFlex}>
              <Image source={refreshIcon} resizeMode="contain" />
              <CustomText
                text={'BTC Limit Buy'}
                style={[TextStyles.textMedium16DarkBlack, SpaceStyles.left2]}
              />
            </View>
            <View style={SpaceStyles.rowFlex}>
              <CustomText
                text={'Mar 5, 2020'}
                style={TextStyles.textMedium14}
              />
              <CustomText
                text={'Canceled'}
                style={[TextStyles.textBold14, SpaceStyles.left2]}
              />
            </View>
          </View>
          <View style={SpaceStyles.rowFlex}>
            <CustomText text={'-$1,200.45'} style={TextStyles.textSemiBold16} />
            <Image
              source={roundEdge}
              resizeMode="contain"
              style={SpaceStyles.left5}
            />
          </View>
        </View>
        <View style={CommonStyles.lineView} />
      </View>
    );
  };

  const renderBorrow = ({}) => {
    return (
      <View>
        <View style={SpaceStyles.alignSpaceBlock}>
          <CustomText
            text={'Credit Line'}
            style={[TextStyles.textMedium16DarkGray]}
          />
          <CustomText text={'$49,789.00'} style={[TextStyles.textSemiBold16]} />
        </View>
        <View style={CommonStyles.lineView} />
      </View>
    );
  };

  return (
    <View style={AuthStyles.authContainer}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={AuthStyles.authContainer}>
        <View style={SpaceStyles.spaceHorizontal}>
          <CustomText
            text={'Bitcoin'}
            style={[TextStyles.textBold18DarkBlack, {marginTop: 10}]}
          />
          <CustomText text={'$35,729.77'} style={TextStyles.textBold24} />
          <View style={[SpaceStyles.rowFlex, SpaceStyles.vertical1]}>
            <Image source={upArrowGreen} />
            <CustomText
              text={'$497.05 (0.85%)'}
              style={[TextStyles.textSemiBold14Green, SpaceStyles.left2]}
            />
          </View>
          <View style={SpaceStyles.spaceVertical}>
            <Chart
              style={CommonStyles.stockChartView}
              data={[
                {x: 0, y: 0},
                {x: 1, y: 3},
                {x: 2, y: 1},
                {x: 3, y: 2},
                {x: 4, y: 2},
                {x: 5, y: 2},
                {x: 6, y: 6},
              ]}
              padding={{bottom: 0, right: 0, top: 0, left: 0}}>
              <Line
                smoothing="bezier"
                tension={0.4}
                theme={{stroke: {color: GREEN, width: 1.5}}}
              />
            </Chart>
          </View>
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

          <View
            style={[SpaceStyles.alignSpaceBlock, SpaceStyles.spaceVertical]}>
            <CustomText
              text={'Your Position'}
              style={TextStyles.textBold18DarkBlack}
            />
            <View style={CommonStyles.iconRowView}>
              <Image source={alert} />
              <View style={CommonStyles.verticalView} />
              <CustomText
                text={'+15%'}
                style={[TextStyles.textSemiBold14DarkYellow]}
              />
            </View>
          </View>

          <View style={[SpaceStyles.alignSpaceBlock, SpaceStyles.top1]}>
            <CustomText
              text={'Today’s Return'}
              style={TextStyles.textMedium16DarkGray}
            />
            <CustomText
              text={'-$200.45 (-2.45%)'}
              style={TextStyles.textMedium16DarkBlack}
            />
          </View>
          <View style={CommonStyles.lineView} />
          <View style={SpaceStyles.alignSpaceBlock}>
            <CustomText
              text={'Total Return'}
              style={TextStyles.textMedium16DarkGray}
            />
            <CustomText
              text={'-$200.45 (-2.45%)'}
              style={TextStyles.textMedium16DarkBlack}
            />
          </View>
          <View style={CommonStyles.lineView} />

          <View style={[SpaceStyles.rowFlex, SpaceStyles.vertical1]}>
            <View style={SpaceStyles.width45}>
              <CustomText
                text={'2.45'}
                style={TextStyles.textMedium16DarkBlack}
              />
              <CustomText
                text={'Quantity'}
                style={TextStyles.textMedium16DarkGray}
              />
            </View>
            <View style={SpaceStyles.width45}>
              <CustomText
                text={'$12,004.56'}
                style={TextStyles.textMedium16DarkBlack}
              />
              <CustomText
                text={'Average Cost'}
                style={TextStyles.textMedium16DarkGray}
              />
            </View>
          </View>

          <View style={[SpaceStyles.rowFlex, SpaceStyles.vertical1]}>
            <View style={SpaceStyles.width45}>
              <CustomText
                text={'$99,578.00'}
                style={TextStyles.textMedium16DarkBlack}
              />
              <CustomText
                text={'Equity'}
                style={TextStyles.textMedium16DarkGray}
              />
            </View>
            <View style={SpaceStyles.width45}>
              <CustomText
                text={'102'}
                style={TextStyles.textMedium16DarkBlack}
              />
              <CustomText
                text={'Days Held'}
                style={TextStyles.textMedium16DarkGray}
              />
            </View>
          </View>

          <CustomText
            text={'Borrow'}
            style={[
              TextStyles.textBold18DarkBlack,
              SpaceStyles.vertical1,
              SpaceStyles.top3,
            ]}
          />

          <FlatList
            data={borrowData}
            keyboardShouldPersistTaps="handled"
            showsVerticalScrollIndicator={false}
            renderItem={renderBorrow}
            style={SpaceStyles.spaceVertical}
          />

          <CustomText
            text={'Activity'}
            style={[TextStyles.textBold18DarkBlack, SpaceStyles.vertical1]}
          />
          <FlatList
            data={data}
            keyboardShouldPersistTaps="handled"
            showsVerticalScrollIndicator={false}
            renderItem={renderHistory}
            style={SpaceStyles.spaceVertical}
          />
          <View style={SpaceStyles.top9} />
        </View>
      </ScrollView>
      <Modal
        isVisible={tradeModal}
        onBackdropPress={() => setTradeModal(false)}
        onBackButtonPress={() => setTradeModal(false)}
        onSwipeComplete={() => setTradeModal(false)}
        animationIn={'slideInUp'}
        animationOut={'slideOutDown'}
        swipeDirection="down"
        style={{margin: 0}}>
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
                style={[TextStyles.textMedium14]}
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
                style={[TextStyles.textMedium14]}
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
                style={[TextStyles.textMedium14]}
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
                style={[TextStyles.textMedium14]}
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
                style={[TextStyles.textMedium14]}
              />
            </View>
          </View>
        </View>
      </Modal>
      <TouchableOpacity
        style={AuthStyles.bottomGreenView}
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

export default CryptoPosition;
