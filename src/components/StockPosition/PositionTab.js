import React, {useState, useLayoutEffect} from 'react';
import {
  View,
  TouchableOpacity,
  Image,
  Text,
  FlatList,
  ScrollView,
} from 'react-native';
import CustomText from '../CustomText';
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
import {DARK_BLACK, RED, BLUE, OFF_WHITE} from '../../constants/Colors';
import constants from '../../constants';

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

const renderHistory = ({item, index}) => {
  return (
    <View>
      <View style={SpaceStyles.alignSpaceBlock}>
        <View>
          <View style={SpaceStyles.rowFlex}>
            <Image source={refreshIcon} resizeMode="contain" />
            <CustomText
              text={'NFLX Limit Buy'}
              style={[TextStyles.textMedium16DarkBlack, SpaceStyles.left2]}
            />
          </View>
          <View style={SpaceStyles.rowFlex}>
            <CustomText text={'Mar 5, 2020'} style={TextStyles.textMedium14} />
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

function PositionTab(props) {
  return (
    <View style={SpaceStyles.spaceHorizontal}>
      <View style={[SpaceStyles.alignSpaceBlock, SpaceStyles.spaceVertical]}>
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
          <CustomText text={'200'} style={TextStyles.textMedium16DarkBlack} />
          <CustomText text={'Shares'} style={TextStyles.textMedium16DarkGray} />
        </View>
        <View style={SpaceStyles.width45}>
          <CustomText
            text={'$290.45'}
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
          <CustomText text={'Equity'} style={TextStyles.textMedium16DarkGray} />
        </View>
        <View style={SpaceStyles.width45}>
          <CustomText text={'102'} style={TextStyles.textMedium16DarkBlack} />
          <CustomText
            text={'Days Held'}
            style={TextStyles.textMedium16DarkGray}
          />
        </View>
      </View>

      <CustomText
        text={'Activity'}
        style={[
          TextStyles.textBold18DarkBlack,
          SpaceStyles.vertical1,
          SpaceStyles.top3,
        ]}
      />
      <View>
        <FlatList
          data={data}
          keyboardShouldPersistTaps="handled"
          scrollEnabled={false}
          showsVerticalScrollIndicator={false}
          renderItem={renderHistory}
          style={SpaceStyles.spaceVertical}
        />
      </View>
    </View>
  );
}

export default PositionTab;
