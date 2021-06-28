import React, {useState} from 'react';
import {
  View,
  Image,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import CustomText from '../../components/CustomText';
import AuthStyles from '../../styles/AuthStyles';
import SpaceStyles from '../../styles/SpaceStyles';
import TextStyles from '../../styles/TextStyles';
import {
  forward,
  star,
  whiteStars,
  upArrow,
  upArrowGreen,
  cart,
  bell,
  listViewInactive,
  imageViewInactive,
  listViewActive,
  imageViewActive,
} from '../../constants/Images';
import CommonStyles from '../../styles/CommonStyles';
import {
  Chart,
  VerticalAxis,
  HorizontalAxis,
  Line,
} from 'react-native-responsive-linechart';
import ReactNativeHapticFeedback from 'react-native-haptic-feedback';
import constants from '../../constants';

const WIDTH = constants.BaseStyle.DEVICE_WIDTH / 4;

const options = {
  enableVibrateFallback: true,
  ignoreAndroidSystemSettings: false,
};

const data = [{}, {}, {}, {}, {}];
function OverView() {
  const [isIcon, setIsIcon] = useState('view');

  const renderCrypto = ({item, index}) => {
    return (
      <>
        <View style={SpaceStyles.alignSpaceBlock}>
          <View style={{width: WIDTH}}>
            <View style={SpaceStyles.rowFlex}>
              <CustomText text={'BTC'} style={TextStyles.textSemiBold16} />
              <Image
                source={bell}
                resizeMode="contain"
                style={SpaceStyles.left2}
              />
            </View>
            <CustomText text={'2.56097'} style={TextStyles.textMedium14} />
          </View>
          <CustomText
            text={'+15.87%'}
            style={[
              TextStyles.textMedium16Green,
              {width: WIDTH, textAlign: 'center'},
            ]}
          />
          <CustomText
            text={'+$5,002.34'}
            style={[
              TextStyles.textMedium16Green,
              {width: WIDTH, textAlign: 'right'},
            ]}
          />
        </View>
        <View style={CommonStyles.lineView} />
      </>
    );
  };

  const renderStocks = ({item, index}) => {
    return (
      <>
        <View style={SpaceStyles.alignSpaceBlock}>
          <View>
            <View style={SpaceStyles.rowFlex}>
              <CustomText text={'GDRX'} style={TextStyles.textSemiBold16} />
              <Image
                source={cart}
                resizeMode="contain"
                style={SpaceStyles.left2}
              />
            </View>
            <CustomText text={'20 Shares'} style={TextStyles.textMedium14} />
          </View>
          <CustomText text={'+5.87%'} style={TextStyles.textMedium16Green} />
          <CustomText text={'+$502.34'} style={TextStyles.textMedium16Green} />
        </View>
        <View style={CommonStyles.lineView} />
      </>
    );
  };
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={AuthStyles.authContainer}>
      <View style={SpaceStyles.spaceHorizontal}>
        <View style={[CommonStyles.brokerageAccountView, SpaceStyles.top2]}>
          <CustomText
            text={'Open your brokerage account'}
            style={TextStyles.textBold18}
          />
          <View style={[SpaceStyles.alignSpaceBlock, SpaceStyles.top1]}>
            <CustomText
              text={
                'Invest in thousands of US stocks while you continue to hold your crypto assets.'
              }
              style={[TextStyles.textMedium14White, CommonStyles.textWidth]}
            />
            <Image
              style={{resizeMode: 'contain', width: 46, height: 48}}
              source={whiteStars}
            />
          </View>
        </View>
        <View style={{marginTop: 15}}>
          <View style={CommonStyles.lineView} />
          <Image
            source={upArrow}
            resizeMode="contain"
            style={CommonStyles.upArrowImage}
          />
        </View>
        <View style={SpaceStyles.rowFlex}>
          <View style={CommonStyles.verticalDot} />
          <CustomText
            text={'Portfolio Value'}
            style={TextStyles.textMedium15}
          />
        </View>
        <CustomText
          text={'$ 27,960.24'}
          style={[TextStyles.textBold24, SpaceStyles.vertical1]}
        />
        <View style={SpaceStyles.alignSpaceBlock}>
          <View style={SpaceStyles.rowFlex}>
            <Image source={upArrowGreen} resizeMode="contain" />
            <CustomText
              text={'$1,340.74 (6.54%)'}
              style={[TextStyles.textSemiBold15Green, SpaceStyles.left2]}
            />
          </View>
          <View style={SpaceStyles.rowFlex}>
            <CustomText
              text={'$1,340.74 '}
              style={TextStyles.textSemiBold15DarkBlack}
            />
            <Image
              source={forward}
              resizeMode="contain"
              style={SpaceStyles.left2}
            />
          </View>
        </View>
        <View style={CommonStyles.lineView} />
        <View style={SpaceStyles.alignSpaceBlock}>
          <CustomText text={'Today'} style={TextStyles.textMedium15} />
          <CustomText text={'Buying Power'} style={TextStyles.textMedium15} />
        </View>
        <Chart
          style={CommonStyles.chartView}
          data={[
            {x: 0, y: 0},
            {x: 1, y: 3},
            {x: 2, y: 8},
            {x: 3, y: 1},
            {x: 4, y: 7},
            {x: 5, y: 3},
            {x: 7, y: 0},
          ]}
          padding={{bottom: 0, right: 0, top: 0, left: 0}}>
          <Line
            smoothing="bezier"
            tension={0.15}
            theme={{stroke: {color: 'blue', width: 2}}}
          />
          <Line
            smoothing="bezier"
            tension={0.45}
            theme={{stroke: {color: 'green', width: 2}}}
          />
          <Line
            smoothing="cubic-spline"
            tension={0.65}
            theme={{stroke: {color: 'orange', width: 2}}}
          />
          <Line
            smoothing="bezier"
            tension={0.84}
            theme={{stroke: {color: 'red', width: 2}}}
          />
        </Chart>
        <View style={[SpaceStyles.alignSpaceBlock, SpaceStyles.spaceVertical]}>
          <CustomText text={'Stocks'} style={TextStyles.textBold20DarkBlack} />
          <View style={CommonStyles.iconRowView}>
            <TouchableOpacity
              onPress={() => [
                setIsIcon('view'),
                ReactNativeHapticFeedback.trigger('impactLight', options),
              ]}>
              <Image
                source={isIcon == 'view' ? listViewActive : listViewInactive}
                resizeMode="contain"
              />
            </TouchableOpacity>
            <View style={CommonStyles.verticalView} />
            <TouchableOpacity
              onPress={() => [
                setIsIcon('image'),
                ReactNativeHapticFeedback.trigger('impactLight', options),
              ]}>
              <Image
                source={isIcon == 'image' ? imageViewActive : imageViewInactive}
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>
        </View>
        <FlatList
          data={data}
          scrollEnabled={false}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
          renderItem={renderStocks}
        />
        <View style={[SpaceStyles.bottom2, SpaceStyles.top3]}>
          <CustomText text={'Cryptos'} style={TextStyles.textBold20DarkBlack} />
        </View>
        <FlatList
          data={data}
          scrollEnabled={false}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
          renderItem={renderCrypto}
        />
      </View>
    </ScrollView>
  );
}

export default OverView;
