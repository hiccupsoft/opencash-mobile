import { Platform, StyleSheet } from 'react-native';
import constants from '../constants';
import { BLUE, LIGHT_GRAY, WHITE, GRAY, DARK_BLACK } from '../constants/Colors';
import { ifIphoneX } from 'react-native-iphone-x-helper';

const HEIGHT = constants.BaseStyle.DEVICE_HEIGHT / 100;
const WIDTH = constants.BaseStyle.DEVICE_WIDTH / 100;
const isios = Platform.OS == 'ios';
const AuthStyles = StyleSheet.create({
  //auth screen
  authContainer: {
    flex: 1,
    backgroundColor: WHITE,
  },
  logoImage: {
    alignSelf: 'center',
    marginTop: HEIGHT * 20,
    marginBottom: HEIGHT * 10,
  },
  imageHand: {
    width: WIDTH * 11,
    resizeMode: 'contain',
  },
  imagePercent: {
    width: WIDTH * 11,
    resizeMode: 'contain',
  },
  textView: {
    width: WIDTH * 70,
    marginBottom: HEIGHT * 3,
  },
  textLogin: {
    alignItems: 'center',
    position: 'absolute',
    width: WIDTH * 100,
    height: HEIGHT * 5,
    bottom: HEIGHT * 9,
    backgroundColor: WHITE,
  },
  bottomJoinView: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: BLUE,
    width: WIDTH * 100,
    height: HEIGHT * 7,
    alignItems: 'center',
    justifyContent: 'center',
  },

  //login screen
  textInputView: {
    borderRadius: 4,
    borderWidth: 1,
    borderColor: LIGHT_GRAY,
    height: HEIGHT * 6,
    paddingHorizontal: WIDTH * 5,
    marginTop: HEIGHT * 2,
    justifyContent: 'center',
  },
  textInput: {
    width: WIDTH * 80,
    color: DARK_BLACK,
    ...constants.Fonts.medium16,
  },
  headerView: {
    marginTop: isios ? ifIphoneX(HEIGHT * 6.5, HEIGHT * 5.5) : HEIGHT * 3,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: WIDTH * 5,
  },
  headerLoginView: {
    marginTop: isios ? HEIGHT * 3 : HEIGHT * 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: WIDTH * 5,
  },

  //signup screen
  halfInputView: {
    borderRadius: 4,
    borderWidth: 1,
    borderColor: LIGHT_GRAY,
    height: HEIGHT * 6,
    paddingHorizontal: WIDTH * 5,
    marginTop: HEIGHT * 3,
    justifyContent: 'center',
    width: WIDTH * 43,
  },
  textHalfInput: {
    width: WIDTH * 32,
    color: DARK_BLACK,
    ...constants.Fonts.medium16,
  },
});
export default AuthStyles;
