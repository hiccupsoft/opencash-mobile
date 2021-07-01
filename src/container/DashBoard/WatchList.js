import React, {useState} from 'react';
import {
  View,
  Image,
  ScrollView,
  FlatList,
  TouchableOpacity,
  Text,
} from 'react-native';
import CustomText from '../../components/CustomText';
import SpaceStyles from '../../styles/SpaceStyles';
import TextStyles from '../../styles/TextStyles';
import {number, cart, percentage} from '../../constants/Images';
import CommonStyles from '../../styles/CommonStyles';
import {
  Chart,
  VerticalAxis,
  HorizontalAxis,
  Line,
} from 'react-native-responsive-linechart';
import {RED, GREEN} from '../../constants/Colors';
import Modal from 'react-native-modal';
import ReactNativeHapticFeedback from 'react-native-haptic-feedback';

const data = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}];

const options = {
  enableVibrateFallback: true,
  ignoreAndroidSystemSettings: false,
};

function WatchList() {
  const [displayDataModal, setDisplayDataModal] = useState(false);

  const renderWatchlist = ({item, index}) => {
    return (
      <>
        <View style={SpaceStyles.alignSpaceBlock}>
          <View>
            <View style={SpaceStyles.rowFlex}>
              <CustomText
                text={'FB'}
                style={TextStyles.textMedium16DarkBlack}
              />
              <Image
                source={cart}
                resizeMode="contain"
                style={SpaceStyles.left2}
              />
            </View>
            <CustomText
              text={'Bank of America'}
              style={TextStyles.textMedium14}
            />
          </View>
          <Chart
            style={CommonStyles.sparkChartView}
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
          <TouchableOpacity
            activeOpacity={1}
            onPress={() => [
              setDisplayDataModal(true),
              ReactNativeHapticFeedback.trigger('selection', options),
            ]}>
            <View style={CommonStyles.watchlistPriceView}>
              <CustomText
                text={'123.50'}
                style={TextStyles.textSemiBold15White}
              />
            </View>
          </TouchableOpacity>
        </View>
        <View style={CommonStyles.lineView} />

        <Modal
          isVisible={displayDataModal}
          onBackdropPress={() => setDisplayDataModal(false)}
          onBackButtonPress={() => setDisplayDataModal(false)}
          onSwipeComplete={() => setDisplayDataModal(false)}
          animationIn={'slideInUp'}
          animationOut={'slideOutDown'}
          swipeDirection="down"
          style={{margin: 0}}>
          <View style={CommonStyles.modalView}>
            <View style={CommonStyles.modalTopLine} />
            <CustomText
              text={'Display Data'}
              style={[
                TextStyles.textBold18DarkBlack,
                {textAlign: 'left', marginTop: 10},
              ]}
            />
            <View style={CommonStyles.lineView} />
            <View
              style={[
                SpaceStyles.top2,
                SpaceStyles.row,
                {alignItems: 'center'},
              ]}>
              <Image source={number} resizeMode="contain" />
              <View style={SpaceStyles.left3}>
                <CustomText
                  text={'Last Price'}
                  style={[TextStyles.textBold16Black]}
                />
              </View>
            </View>
            <View
              style={[
                SpaceStyles.top3,
                SpaceStyles.row,
                {alignItems: 'center'},
              ]}>
              <Image source={percentage} resizeMode="contain" />
              <View style={SpaceStyles.left3}>
                <CustomText
                  text={'Percent Change'}
                  style={[TextStyles.textBold16Black]}
                />
              </View>
            </View>
          </View>
        </Modal>
      </>
    );
  };
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={[SpaceStyles.spaceHorizontal, SpaceStyles.top1]}>
        <CustomText text={'4 items'} style={TextStyles.textMedium16DarkBlack} />
        <View style={[SpaceStyles.alignSpaceBlock, SpaceStyles.spaceVertical]}>
          <View style={SpaceStyles.coloumnView}>
            <CustomText
              text={'+5.87%'}
              style={TextStyles.textSemiBold15Green}
            />
            <CustomText text={'Avg Return'} style={TextStyles.textMedium15} />
          </View>
          <View style={SpaceStyles.coloumnView}>
            <CustomText text={'3'} style={TextStyles.textSemiBold15Green} />
            <CustomText text={'Gainers'} style={TextStyles.textMedium15} />
          </View>
          <View style={SpaceStyles.coloumnView}>
            <CustomText text={'10'} style={TextStyles.textSemiBold15Red} />
            <CustomText text={'Losers'} style={TextStyles.textMedium15} />
          </View>
        </View>
        <View style={CommonStyles.lineView} />
        <FlatList
          data={data}
          scrollEnabled={false}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
          renderItem={renderWatchlist}
        />
      </View>
    </ScrollView>
  );
}

export default WatchList;
