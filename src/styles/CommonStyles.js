import {StyleSheet} from 'react-native';
import constants from '../constants';
import {BLUE, BORDER, GRAY, GREEN, LIGHT_GRAY} from './../constants/Colors';

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
    width: 110,
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
    width: 110,
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
    height: HEIGHT * 3,
    borderRightColor: GRAY,
    borderRightWidth: StyleSheet.hairlineWidth,
  },
  iconRowView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    width: WIDTH * 20,
    borderRadius: 90,
    borderColor: GRAY,
    borderWidth: StyleSheet.hairlineWidth,
  },
});
export default CommonStyles;
