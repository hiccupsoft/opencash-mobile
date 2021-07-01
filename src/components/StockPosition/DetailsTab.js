import React, { useState, useLayoutEffect } from 'react';
import {
    View,
    TouchableOpacity,
    Image,
    Text,
    FlatList,
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
    profilePicture,
    alert
} from '../../constants/Images';
import CommonStyles from '../../styles/CommonStyles';
import ReactNativeHapticFeedback from 'react-native-haptic-feedback';
import { DARK_BLACK, RED, BLUE, OFF_WHITE } from '../../constants/Colors';
import constants from '../../constants';

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

const data = [{}, {}, {}, {}, {}];

const borrowData = [{}, {}, {}];

const renderDetails = ({ item, index }) => {
    return (
        <View style={SpaceStyles.right5}>
            <View style={[SpaceStyles.alignSpaceBlock, { width: WIDTH * 42.5 }]}>
                <CustomText text={'Open'} style={[TextStyles.textMedium16DarkGray]} />
                <CustomText
                    text={'498.40'}
                    style={[TextStyles.textMedium16DarkBlack]}
                />
            </View>
            <View style={[CommonStyles.lineView]} />
        </View>
    );
};

const renderNews = ({ item, index }) => {
    return (
        <View>
            <Text>
                <CustomText
                    text={'CNN '}
                    style={[TextStyles.textBold14DarkBlack]}
                />
                <CustomText text={'- May 20'} style={[TextStyles.textMedium14]} />
            </Text>
            <View style={SpaceStyles.alignSpaceBlock}>
                <Text style={[TextStyles.textMedium16DarkBlack, { width: WIDTH * 70 }]}>
                    Money lending start taps Visa for Netflix and amezon prime
                </Text>
                <Image source={profilePicture} style={CommonStyles.newsImageView} />
            </View>
            <View style={[SpaceStyles.top1, SpaceStyles.rowFlex]}>
                <CustomText
                    text={'NFLX'}
                    style={[TextStyles.textSemiBold14, SpaceStyles.right3]}
                />
                <CustomText
                    text={'FB'}
                    style={[TextStyles.textSemiBold14, SpaceStyles.right3]}
                />
                <CustomText
                    text={'AMZN'}
                    style={[TextStyles.textSemiBold14, SpaceStyles.right3]}
                />
            </View>
            <View style={CommonStyles.lineView} />
        </View>
    );
};

function DetailsTab(props) {
    return (
        <View style={SpaceStyles.spaceHorizontal}>
            <View
                style={[SpaceStyles.alignSpaceBlock, SpaceStyles.spaceVertical]}>
                <CustomText
                    text={'Details'}
                    style={[TextStyles.textBold18DarkBlack]}
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
            <View>
                <FlatList
                    data={data}
                    keyboardShouldPersistTaps="handled"
                    showsVerticalScrollIndicator={false}
                    numColumns={2}
                    scrollEnabled={false}
                    renderItem={renderDetails}
                    style={SpaceStyles.top1}
                />
            </View>
            <CustomText
                text={'News'}
                style={[
                    TextStyles.textBold18DarkBlack,
                    SpaceStyles.spaceVertical,
                    SpaceStyles.top3,
                ]}
            />
            <View>
                <FlatList
                    data={data}
                    keyboardShouldPersistTaps="handled"
                    showsVerticalScrollIndicator={false}
                    scrollEnabled={false}
                    renderItem={renderNews}
                    style={[SpaceStyles.top2, SpaceStyles.bottom9]}
                />
            </View>
        </View>
    )
}

export default DetailsTab;