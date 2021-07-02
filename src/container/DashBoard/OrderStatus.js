import React, { useState, useLayoutEffect } from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import CustomText from '../../components/CustomText';
import AuthStyles from '../../styles/AuthStyles';
import SpaceStyles from '../../styles/SpaceStyles';
import TextStyles from '../../styles/TextStyles';
import { overview, star, summary, back } from '../../constants/Images';
import CommonStyles from '../../styles/CommonStyles';
import ReactNativeHapticFeedback from 'react-native-haptic-feedback';
import { Header } from 'react-native-elements';
import { DARK_BLACK } from '../../constants/Colors';
import constants from '../../constants';
import HeaderLeft from '../../components/headerLeft';
import HeaderRight from '../../components/headerRight';
import HeaderTitleText from '../../components/headerTitleText';

const options = {
    enableVibrateFallback: true,
    ignoreAndroidSystemSettings: false,
};


function OrderStatus(props) {
    const { navigation } = props;

    return (
        <View style={AuthStyles.authContainer}>
            <View style={[SpaceStyles.spaceHorizontal, SpaceStyles.top5]}>
                <CustomText
                    text={'BTC Order Status'}
                    style={[TextStyles.textSemiBold18DarkBlack]}
                />
                <View style={[SpaceStyles.alignSpaceBlock, SpaceStyles.top5]}>
                    <CustomText
                        text={'Filled'}
                        style={TextStyles.textMedium16DarkGray}
                    />
                    <CustomText text={'0 of 5'} style={TextStyles.textBold16DarkBlack} />
                </View>
                <View style={CommonStyles.lineView} />

                <View style={[SpaceStyles.alignSpaceBlock]}>
                    <CustomText
                        text={'Estimated Cost'}
                        style={TextStyles.textMedium16DarkGray}
                    />
                    <CustomText
                        text={'$2,487.50'}
                        style={TextStyles.textBold16DarkBlack}
                    />
                </View>
                <View style={CommonStyles.lineView} />

                <CustomText
                    text={'You placed a limit order to buy 5 BTC at $497.50. Good-til-cancel limit orders will remain open until canceled or for 90 days.'}
                    style={[TextStyles.textMedium15DarkBlack, , SpaceStyles.top2]}
                />

            </View>
            <CustomText
                text={'View Order'}
                style={[TextStyles.textBold16, CommonStyles.viewOrderText]}
            />
            <TouchableOpacity
                style={CommonStyles.bottomBuyButton}
                activeOpacity={1}
                onPress={() => [
                    navigation.goBack(),
                    ReactNativeHapticFeedback.trigger('impactLight', options),
                ]}>
                <CustomText text={'Done'} style={TextStyles.textBold16White} />
            </TouchableOpacity>
        </View>
    );
}
export default OrderStatus;
