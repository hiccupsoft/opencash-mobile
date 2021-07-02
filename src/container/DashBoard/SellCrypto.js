import React, { useState, useLayoutEffect, useRef } from 'react';
import {
  View,
  TouchableOpacity,
  Image,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import CustomText from '../../components/CustomText';
import AuthStyles from '../../styles/AuthStyles';
import SpaceStyles from '../../styles/SpaceStyles';
import TextStyles from '../../styles/TextStyles';
import {
  overview,
  star,
  summary,
  back,
  cancel,
  rightArrow,
  marketOrderIcon,
  limitOrderIcon,
} from '../../constants/Images';
import CommonStyles from '../../styles/CommonStyles';
import ReactNativeHapticFeedback from 'react-native-haptic-feedback';
import { DARK_BLACK, GRAY, BLUE } from '../../constants/Colors';
import constants from '../../constants';
import HeaderLeft from '../../components/headerLeft';
import HeaderRight from '../../components/headerRight';
import HeaderTitleText from '../../components/headerTitleText';
import Modal from 'react-native-modal';

const options = {
  enableVibrateFallback: true,
  ignoreAndroidSystemSettings: false,
};

const DismissKeyboard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);

function SellCrypto(props) {
  const [limitModal, setLimitModal] = useState(false);
  const [orderType, setOrderType] = useState('Market Price');

  const ref = useRef()

  const { navigation } = props;

  return (
    <DismissKeyboard>
      <View style={AuthStyles.authContainer}>
        <View style={AuthStyles.headerAppView}>
          <HeaderLeft iconName={cancel} onPress={() => navigation.goBack()} />
          <HeaderTitleText
            titleName={'BTC - $497.50'}
            value={'$1,000.34 available'}
          />
          <HeaderRight />
        </View>
        <View style={[SpaceStyles.spaceHorizontal, SpaceStyles.top9]}>
          <View style={[SpaceStyles.alignSpaceBlock]}>
            <CustomText
              text={'Quantity'}
              style={TextStyles.textMedium16DarkGray}
            />
            <TextInput
              placeholder={'0'}
              keyboardAppearance={'dark'}
              keyboardType={'number-pad'}
              placeholderTextColor={GRAY}
              style={TextStyles.textBold16Black}
              textAlign={'right'}
              selectionColor={BLUE}
            />
          </View>
          <View style={CommonStyles.lineView} />
          <View style={[SpaceStyles.alignSpaceBlock]}>
            <TouchableOpacity
              style={SpaceStyles.rowFlex}
              onPress={() => setLimitModal(true)}>
              <CustomText text={orderType} style={TextStyles.textBold16} />
              <Image
                source={rightArrow}
                style={SpaceStyles.left2}
                resizeMode="contain"
              />
            </TouchableOpacity>
            <TextInput
              placeholder={'0.00'}
              keyboardAppearance={'dark'}
              keyboardType={'numeric'}
              placeholderTextColor={GRAY}
              style={TextStyles.textBold16Black}
              textAlign={'right'}
              selectionColor={BLUE}
            />
          </View>
          <View style={CommonStyles.lineView} />
          <View style={[SpaceStyles.alignSpaceBlock]}>
            <CustomText
              text={'Estimated BTC'}
              style={TextStyles.textMedium16DarkGray}
            />
            <CustomText
              text={'0.5673 BTC'}
              style={TextStyles.textBold16DarkBlack}
            />
          </View>
          <View style={CommonStyles.lineView} />

          <Modal
            isVisible={limitModal}
            onBackdropPress={() => setLimitModal(false)}
            onBackButtonPress={() => setLimitModal(false)}
            onSwipeComplete={() => setLimitModal(false)}
            animationIn={'slideInUp'}
            animationOut={'slideOutDown'}
            swipeDirection="down"
            style={{ margin: 0 }}>
            <View style={CommonStyles.modalView}>
              <View style={CommonStyles.modalTopLine} />
              <CustomText
                text={'Choose your order type'}
                style={[TextStyles.textMedium16DarkBlack, SpaceStyles.top1]}
              />
              <View style={CommonStyles.lineView} />
              <TouchableOpacity
                style={[SpaceStyles.row]}
                onPress={() => {
                  setLimitModal(false), setOrderType('Market Price');
                }}>
                <Image
                  source={marketOrderIcon}
                  style={SpaceStyles.top1}
                  resizeMode="contain"
                />
                <View style={SpaceStyles.left3}>
                  <CustomText
                    text={'Market Order'}
                    style={[TextStyles.textBold16Black]}
                  />
                  <CustomText
                    text={'Your order gets filled at the current price'}
                    style={[TextStyles.textMedium15]}
                  />
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={[SpaceStyles.row, SpaceStyles.top3]}
                onPress={() => {
                  setLimitModal(false), setOrderType('Limit Price');
                }}>
                <Image
                  source={limitOrderIcon}
                  style={SpaceStyles.top1}
                  resizeMode="contain"
                />
                <View style={SpaceStyles.left3}>
                  <CustomText
                    text={'Limit Order'}
                    style={[TextStyles.textBold16Black]}
                  />
                  <CustomText
                    text={'Set the price at which your order executes'}
                    style={[TextStyles.textMedium15]}
                  />
                </View>
              </TouchableOpacity>
            </View>
          </Modal>
        </View>
        <TouchableOpacity
          style={CommonStyles.bottomBuyButton}
          activeOpacity={1}
          onPress={() => {
            navigation.navigate('BuyCryptoScreen');
          }}>
          <CustomText text={'Buy BTC'} style={TextStyles.textBold16White} />
        </TouchableOpacity>
      </View>
    </DismissKeyboard>
  );
}
export default SellCrypto;
