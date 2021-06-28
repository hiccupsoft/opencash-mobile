import React, { useState, useLayoutEffect } from 'react';
import { View, TouchableOpacity, Image, Text } from 'react-native';
import CustomText from '../../components/CustomText';
import AuthStyles from '../../styles/AuthStyles';
import SpaceStyles from '../../styles/SpaceStyles';
import TextStyles from '../../styles/TextStyles';
import { overview, star, summary, cancel, back, starIcon, upArrowGreen } from '../../constants/Images';
import CommonStyles from '../../styles/CommonStyles';
import OverView from './OverView';
import WatchList from './WatchList';
import ReactNativeHapticFeedback from 'react-native-haptic-feedback';
import { Header } from 'react-native-elements';
import { DARK_BLACK, RED } from '../../constants/Colors';
import constants from '../../constants';
import HeaderLeft from '../../components/headerLeft';
import HeaderRight from '../../components/headerRight';
import {
    Chart,
    VerticalAxis,
    HorizontalAxis,
    Line,
} from 'react-native-responsive-linechart';

const options = {
    enableVibrateFallback: true,
    ignoreAndroidSystemSettings: false,
};

const data = [{}, {}, {}, {}, {}];

function StockPosition(props) {
    const [isTab, setTab] = useState('overview');
    const { navigation } = props

    useLayoutEffect(() => {
        navigation.setOptions({
            headerLeft: () => (<HeaderLeft iconName={back} onPress={() => navigation.goBack()} />),
            headerRight: () => (<HeaderRight iconName={starIcon} />)
        });
    }, [navigation]);

    return (
        <View style={AuthStyles.authContainer}>
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

            </View>
        </View>
    );
}

export default StockPosition;
