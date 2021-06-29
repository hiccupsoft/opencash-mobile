import {Platform, StyleSheet} from 'react-native';
import constants from '../constants';
import {
  BLUE,
  BORDER,
  GRAY,
  GREEN,
  LIGHT_GRAY,
  ORANGE,
  WHITE,
} from './../constants/Colors';
import {ifIphoneX} from 'react-native-iphone-x-helper';

const HEIGHT = constants.BaseStyle.DEVICE_HEIGHT / 100;
const WIDTH = constants.BaseStyle.DEVICE_WIDTH / 100;

const CommonStyles = StyleSheet.create({
  //history
  lineView: {
    borderBottomColor: BORDER,
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginVertical: HEIGHT * 1.5,
  },

  //dashboard
  dashBoardTabView: {
    borderColor: LIGHT_GRAY,
    borderRadius: 17,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    width: Platform.OS === 'ios' ? ifIphoneX(110, 110) : 110,
    height: 32,
    justifyContent: 'space-evenly',
  },
  dashBoardSelectedTabView: {
    borderColor: LIGHT_GRAY,
    backgroundColor: LIGHT_GRAY,
    borderRadius: 17,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    width: Platform.OS === 'ios' ? ifIphoneX(110, 110) : 110,
    height: 32,
    justifyContent: 'space-evenly',
  },
  tabDashboardImage: {
    width: 16,
    height: 14,
  },
  brokerageAccountView: {
    backgroundColor: BLUE,
    borderRadius: 8,
    paddingHorizontal: WIDTH * 5,
    paddingVertical: HEIGHT * 2,
  },
  textWidth: {
    width: WIDTH * 60,
  },
  upArrowImage: {
    position: 'absolute',
    alignSelf: 'center',
    top: HEIGHT * 0.5,
    zIndex: 9999,
  },
  verticalDot: {
    backgroundColor: GREEN,
    height: 10,
    width: 4,
    borderRadius: 2,
    marginRight: 6,
  },
  chartView: {
    height: HEIGHT * 25,
    width: WIDTH * 90,
    marginTop: HEIGHT * 2,
  },
  watchlistPriceView: {
    backgroundColor: GREEN,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: HEIGHT * 0.7,
    width: WIDTH * 20,
  },
  verticalView: {
    height: 26,
    borderRightColor: LIGHT_GRAY,
    borderRightWidth: 1,
  },
  iconRowView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    width: 80,
    height: 26,
    borderRadius: 90,
    borderColor: LIGHT_GRAY,
    borderWidth: 1,
  },
  boxView: {
    borderRadius: 4,
    borderWidth: 1,
    borderColor: ORANGE,
    width: WIDTH * 27,
    paddingVertical: HEIGHT * 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dayBoxContentView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: WIDTH * 100 - 40,
  },
  selectedDayBox: {
    height: 24,
    width: 36,
    borderWidth: 1,
    borderRadius: 6,
    borderColor: GREEN,
    backgroundColor: 'rgba(0, 171, 89, 0.1)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  unSelectedDayBox: {
    height: 24,
    width: 36,
    borderWidth: 1,
    borderRadius: 6,
    borderColor: WHITE,
    backgroundColor: WHITE,
    alignItems: 'center',
    justifyContent: 'center',
  },

  // stock position
  amountView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: HEIGHT * 1,
  },
  amountStatusView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: HEIGHT * 1,
  },
  stockChartView: {
    height: HEIGHT * 25,
    width: WIDTH * 90,
    marginTop: HEIGHT * 3,
  },
});
export default CommonStyles;
