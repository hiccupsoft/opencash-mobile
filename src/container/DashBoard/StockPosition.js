import React, { useState, useLayoutEffect } from 'react';
import { View, TouchableOpacity, Image, Text, FlatList, ScrollView } from 'react-native';
import CustomText from '../../components/CustomText';
import AuthStyles from '../../styles/AuthStyles';
import SpaceStyles from '../../styles/SpaceStyles';
import TextStyles from '../../styles/TextStyles';
import { average, calender, blast, hedge, convert, minusIcon, plus, refreshIcon, back, starIcon, upArrowGreen, alert, roundEdge, profilePicture } from '../../constants/Images';
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
import Modal from 'react-native-modal'

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
    const { navigation } = props

    useLayoutEffect(() => {
        navigation.setOptions({
            headerLeft: () => (<HeaderLeft iconName={back} onPress={() => navigation.goBack()} />),
            headerRight: () => (<HeaderRight iconName={starIcon} />)
        });
    }, [navigation]);

    const renderDayFilter = ({ item, index }) => {
        return (
            <View style={CommonStyles.dayBoxView}>
                <TouchableOpacity
                    style={
                        dayFilter == item.type
                            ? CommonStyles.selectedDayBox
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

    const renderHistory = ({ item, index }) => {
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

    const renderDetails = ({ item, index }) => {
        return (
            <View style={SpaceStyles.right5}>
                <View style={[SpaceStyles.alignSpaceBlock, { width: WIDTH * 42.5 }]}>
                    <CustomText text={'Open'} style={[TextStyles.textMedium16DarkGray]} />
                    <CustomText text={'498.40'} style={[TextStyles.textMedium16DarkBlack]} />
                </View>
                <View style={[CommonStyles.lineView]} />

            </View >
        )
    }

    const renderNews = ({ }) => {
        return (
            <View style={SpaceStyles.right5}>
                <Text>
                    <CustomText text={'CNN '} style={[TextStyles.textSemiBold14DarkBlack]} />
                    <CustomText text={'- May 20'} style={[TextStyles.textBold14]} />
                </Text>
                <View style={SpaceStyles.alignSpaceBlock}>
                    <Text style={[TextStyles.textMedium16DarkBlack, { width: WIDTH * 70 }]} >Money lending start taps Visa for Netflix and amezon prime</Text>
                    <Image source={profilePicture} style={CommonStyles.newsImageView} />
                </View>
                <View style={[SpaceStyles.top1, SpaceStyles.rowFlex]}>
                    <CustomText text={'NFLX'} style={[TextStyles.textSemiBold14, SpaceStyles.right3]} />
                    <CustomText text={'FB'} style={[TextStyles.textSemiBold14, SpaceStyles.right3]} />
                    <CustomText text={'AMZN'} style={[TextStyles.textSemiBold14, SpaceStyles.right3]} />
                </View>
                <View style={CommonStyles.lineView} />
            </View>
        )
    }

    return (
        <View style={AuthStyles.authContainer}>
            <ScrollView
                showsVerticalScrollIndicator={false}
                style={AuthStyles.authContainer}>
                <View style={AuthStyles.headerView}>
                    <CustomText text={'Netflix'} style={TextStyles.textBold18DarkBlack} />
                </View>
                <View style={SpaceStyles.spaceHorizontal}>
                    <View style={CommonStyles.amountView}>
                        <CustomText text={'$ 497.89'} style={TextStyles.textBold24} />
                        <Text>
                            <CustomText text={'Bid: '} style={TextStyles.textMedium14DarkGray} />
                            <CustomText text={'497.40 '} style={TextStyles.textSemiBold14DarkBlack} />
                            <CustomText text={'Ask: '} style={TextStyles.textMedium14DarkGray} />
                            <CustomText text={'498'} style={TextStyles.textSemiBold14DarkBlack} />
                        </Text>
                    </View>
                    <View style={CommonStyles.amountStatusView}>
                        <View style={SpaceStyles.rowFlex}>
                            <Image source={upArrowGreen} />
                            <CustomText text={'$10.40 (2.45%)'} style={[TextStyles.textSemiBold14DarkRed, SpaceStyles.left2]} />
                        </View>
                        <Text>
                            <CustomText text={'Volume: '} style={TextStyles.textMedium14} />
                            <CustomText text={'809.7K'} style={TextStyles.textSemiBold14DarkBlack} />
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
                            tension={0.40}
                            theme={{ stroke: { color: RED, width: 3 } }}
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
                    <View style={SpaceStyles.alignSpaceCenter}>
                        <TouchableOpacity onPress={() => setScreenModule('position')}>
                            <View style={screenModule == 'position' ? CommonStyles.horizontalBlueLine : CommonStyles.horizontalGrayLine} />
                        </TouchableOpacity >
                        <TouchableOpacity onPress={() => setScreenModule('details')}>
                            <View style={screenModule == 'details' ? CommonStyles.horizontalBlueLine : CommonStyles.horizontalGrayLine} />
                        </TouchableOpacity>
                    </View>

                </View>
                {screenModule == 'position' &&
                    <View style={SpaceStyles.spaceHorizontal}>
                        <View style={[SpaceStyles.alignSpaceBlock, SpaceStyles.spaceVertical]}>
                            <CustomText text={'Your Position'} style={TextStyles.textBold18DarkBlack} />
                            <View style={CommonStyles.iconRowView}>
                                <Image source={alert} />
                                <View style={CommonStyles.verticalView} />
                                <CustomText text={'+15%'} style={[TextStyles.textSemiBold14DarkYellow]} />
                            </View>
                        </View>

                        <View style={SpaceStyles.alignSpaceBlock}>
                            <CustomText text={'Today’s Return'} style={TextStyles.textMedium16DarkGray} />
                            <CustomText text={'-$200.45 (-2.45%)'} style={TextStyles.textMedium16DarkBlack} />
                        </View>
                        <View style={CommonStyles.lineView} />
                        <View style={SpaceStyles.alignSpaceBlock}>
                            <CustomText text={'Total Return'} style={TextStyles.textMedium16DarkGray} />
                            <CustomText text={'-$200.45 (-2.45%)'} style={TextStyles.textMedium16DarkBlack} />
                        </View>
                        <View style={CommonStyles.lineView} />

                        <View style={[SpaceStyles.rowFlex, SpaceStyles.vertical1]}>
                            <View style={SpaceStyles.width45}>
                                <CustomText text={'200'} style={TextStyles.textMedium16DarkBlack} />
                                <CustomText text={'Shares'} style={TextStyles.textMedium16DarkGray} />
                            </View>
                            <View style={SpaceStyles.width45}>
                                <CustomText text={'$290.45'} style={TextStyles.textMedium16DarkBlack} />
                                <CustomText text={'Average Cost'} style={TextStyles.textMedium16DarkGray} />
                            </View>
                        </View>

                        <View style={[SpaceStyles.rowFlex, SpaceStyles.vertical1]}>
                            <View style={SpaceStyles.width45}>
                                <CustomText text={'$99,578.00'} style={TextStyles.textMedium16DarkBlack} />
                                <CustomText text={'Equity'} style={TextStyles.textMedium16DarkGray} />
                            </View>
                            <View style={SpaceStyles.width45}>
                                <CustomText text={'102'} style={TextStyles.textMedium16DarkBlack} />
                                <CustomText text={'Days Held'} style={TextStyles.textMedium16DarkGray} />
                            </View>
                        </View>

                        <CustomText text={'Activity'} style={[TextStyles.textBold18DarkBlack, SpaceStyles.vertical1, SpaceStyles.top3]} />
                        <FlatList
                            data={data}
                            keyboardShouldPersistTaps="handled"
                            showsVerticalScrollIndicator={false}
                            renderItem={renderHistory}
                        />
                        <View style={SpaceStyles.top9} />
                    </View>

                }
                {screenModule == 'details' &&
                    <View style={SpaceStyles.spaceHorizontal}>
                        <View style={[SpaceStyles.alignSpaceBlock, SpaceStyles.spaceVertical]}>
                            <CustomText text={'Details'} style={TextStyles.textBold18DarkBlack} />
                            <View style={CommonStyles.iconRowView}>
                                <Image source={alert} />
                                <View style={CommonStyles.verticalView} />
                                <CustomText text={'+15%'} style={[TextStyles.textSemiBold14DarkYellow]} />
                            </View>
                        </View>
                        <FlatList
                            data={data}
                            keyboardShouldPersistTaps="handled"
                            showsVerticalScrollIndicator={false}
                            numColumns={2}
                            renderItem={renderDetails}
                        />
                        <CustomText text={'News'} style={[TextStyles.textBold18DarkBlack, SpaceStyles.spaceVertical, SpaceStyles.top5]} />

                        <FlatList
                            data={data}
                            keyboardShouldPersistTaps="handled"
                            showsVerticalScrollIndicator={false}
                            renderItem={renderNews}
                        />
                        <View style={SpaceStyles.top9} />
                    </View>
                }
                <Modal
                    isVisible={tradeModal}
                    onBackdropPress={() => setTradeModal(false)}
                    onBackButtonPress={() => setTradeModal(false)}
                    onSwipeComplete={() => setTradeModal(false)}
                    animationIn={'slideInUp'}
                    animationOut={'slideOutDown'}
                    swipeDirection='down'
                    style={{ margin: 0 }}>
                    <View style={CommonStyles.modalView}>
                        <View style={[SpaceStyles.top2, SpaceStyles.row]}>
                            <Image source={plus} resizeMode='contain' />
                            <View style={SpaceStyles.left3}>
                                <CustomText text={'Buy NFLX'} style={[TextStyles.textBold16Black]} />
                                <CustomText text={'Buying Power: $1,000.34'} style={[TextStyles.textMedium14]} />
                            </View>
                        </View>
                        <View style={[SpaceStyles.top2, SpaceStyles.row]}>
                            <Image source={minusIcon} resizeMode='contain' />
                            <View style={SpaceStyles.left3}>
                                <CustomText text={'Sell NFLX'} style={[TextStyles.textBold16Black]} />
                                <CustomText text={'Day Trading Count: 2'} style={[TextStyles.textMedium14]} />
                            </View>
                        </View>
                        <View style={[SpaceStyles.top2, SpaceStyles.row]}>
                            <Image source={convert} resizeMode='contain' />
                            <View style={SpaceStyles.left3}>
                                <CustomText text={'Convert'} style={[TextStyles.textBold16Black]} />
                                <CustomText text={'Convert NFLX to another stock'} style={[TextStyles.textMedium14]} />
                            </View>
                        </View>
                        <View style={[SpaceStyles.top2, SpaceStyles.row]}>
                            <Image source={average} resizeMode='contain' />
                            <View style={SpaceStyles.left3}>
                                <CustomText text={'Dollar Cost Average'} style={[TextStyles.textBold16Black]} />
                                <CustomText text={'Unsure when to buy? Set up recurring buy'} style={[TextStyles.textMedium14]} />
                            </View>
                        </View>
                        <View style={[SpaceStyles.top2, SpaceStyles.row]}>
                            <Image source={calender} resizeMode='contain' />
                            <CustomText text={'Trade NFLX Options'} style={[TextStyles.textBold16Black, SpaceStyles.left3]} />
                        </View>
                        <View style={[SpaceStyles.top2, SpaceStyles.row]}>
                            <Image source={hedge} resizeMode='contain' />
                            <CustomText text={'Hedge'} style={[TextStyles.textBold16Black, SpaceStyles.left3]} />
                        </View>
                        <View style={[SpaceStyles.top2, SpaceStyles.row]}>
                            <Image source={blast} resizeMode='contain' />
                            <View style={SpaceStyles.left3}>
                                <CustomText text={'Blast Me Out'} style={[TextStyles.textBold16Black, SpaceStyles.left3]} />
                            </View>
                        </View>
                    </View>

                </Modal>
            </ScrollView>
            <TouchableOpacity
                style={AuthStyles.bottomJoinView}
                activeOpacity={0.8}
                onPress={() => setTradeModal(true)}>
                <CustomText text={'Trade'} style={TextStyles.textBold16White} />
            </TouchableOpacity>
        </View>
    );
}

export default StockPosition;
