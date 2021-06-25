import React, { useState } from 'react';
import {
    View,
    Image,
    ScrollView,
    FlatList,
    TouchableOpacity
} from 'react-native';
import CustomText from '../../components/CustomText';
import AuthStyles from '../../styles/AuthStyles';
import SpaceStyles from '../../styles/SpaceStyles';
import TextStyles from '../../styles/TextStyles';
import { forward, star, upArrow, upArrowGreen, cart, listViewInactive, imageViewInactive, listViewActive, imageViewActive } from '../../constants/Images'
import CommonStyles from '../../styles/CommonStyles';
import { Chart, VerticalAxis, HorizontalAxis, Line } from 'react-native-responsive-linechart'

const data = [{}, {}, {}, {}, {}]
function OverView() {
    const [isIcon, setIsIcon] = useState('view')

    const renderCrypto = ({ item, index }) => {
        return (
            <>
                <View style={SpaceStyles.alignSpaceBlock}>
                    <View>
                        <CustomText
                            text={'BTC'}
                            style={TextStyles.textSemiBold16}
                        />
                        <CustomText
                            text={'2.56097'}
                            style={TextStyles.textMedium14}
                        />
                    </View>
                    <CustomText
                        text={'$502.34'}
                        style={TextStyles.textMedium16DarkBlack}
                    />
                </View>
                <View style={CommonStyles.lineView} />
            </>
        )
    }

    const renderStocks = ({ item, index }) => {
        return (
            <>
                <View style={SpaceStyles.alignSpaceBlock}>
                    <View>
                        <View style={SpaceStyles.rowFlex}>
                            <CustomText
                                text={'GDRX'}
                                style={TextStyles.textSemiBold16}
                            />
                            <Image
                                source={cart}
                                resizeMode='contain'
                                style={SpaceStyles.left2}
                            />
                        </View>
                        <CustomText
                            text={'20 Shares'}
                            style={TextStyles.textMedium14}
                        />
                    </View>
                    <CustomText
                        text={'+5.87%'}
                        style={TextStyles.textMedium16Green}
                    />
                    <CustomText
                        text={'+$502.34'}
                        style={TextStyles.textMedium16Green}
                    />
                </View>
                <View style={CommonStyles.lineView} />
            </>
        )
    }
    return (
        <ScrollView showsVerticalScrollIndicator={false} style={AuthStyles.authContainer}>
            <View style={SpaceStyles.spaceHorizontal}>
                <View style={CommonStyles.brokerageAccountView}>
                    <CustomText
                        text={'Open your brokerage account'}
                        style={TextStyles.textBold18}
                    />
                    <View style={[SpaceStyles.alignSpaceBlock, SpaceStyles.top2]}>
                        <CustomText
                            text={'Invest in thousands of US stocks while you continue to hold your crypto assets.'}
                            style={[TextStyles.textMedium14White, CommonStyles.textWidth]}
                        />
                        <Image source={star} />
                    </View>
                </View>
                <View>
                    <View style={CommonStyles.lineView} />
                    <Image
                        source={upArrow}
                        resizeMode='contain'
                        style={CommonStyles.upArrowImage}
                    />
                </View>
                <View style={SpaceStyles.rowFlex}>
                    <View style={CommonStyles.verticalDot} />
                    <CustomText
                        text={'Portfolio Value'}
                        style={TextStyles.textMedium14}
                    />
                </View>
                <CustomText
                    text={'$ 27,960.24'}
                    style={[TextStyles.textBold24, SpaceStyles.vertical1]}
                />
                <View style={SpaceStyles.alignSpaceBlock}>
                    <View style={SpaceStyles.rowFlex}>
                        <Image source={upArrowGreen} resizeMode='contain' />
                        <CustomText
                            text={'$1,340.74 (6.54%)'}
                            style={[TextStyles.textSemiBold14Green, SpaceStyles.left2]}
                        />
                    </View>
                    <View style={SpaceStyles.rowFlex}>
                        <CustomText
                            text={'$1,340.74 '}
                            style={TextStyles.textSemiBold14DarkBlack}
                        />
                        <Image source={forward} resizeMode='contain' style={SpaceStyles.left2} />
                    </View>
                </View>
                <View style={CommonStyles.lineView} />
                <View style={SpaceStyles.alignSpaceBlock}>
                    <CustomText
                        text={'Today'}
                        style={TextStyles.textMedium14}
                    />
                    <CustomText
                        text={'Buying Power'}
                        style={TextStyles.textMedium14}
                    />
                </View>
                <Chart
                    style={CommonStyles.chartView}
                    data={[
                        { x: 0, y: 0 },
                        { x: 3, y: 8 },
                        { x: 7, y: 0 },
                    ]}
                    padding={{ bottom: 10, right: 10, top: 10, left: 10 }}
                >
                    <Line smoothing="bezier" tension={0.15} theme={{ stroke: { color: 'blue', width: 2 } }} />
                    <Line smoothing="bezier" tension={0.3} theme={{ stroke: { color: 'green', width: 2 } }} />
                    <Line smoothing="cubic-spline" tension={0.3} theme={{ stroke: { color: 'orange', width: 2 } }} />
                    <Line smoothing="bezier" tension={0.12} theme={{ stroke: { color: 'red', width: 2 } }} />
                </Chart>
                <View style={[SpaceStyles.alignSpaceBlock, SpaceStyles.spaceVertical]}>
                    <CustomText
                        text={'Stocks'}
                        style={TextStyles.textBold18DarkBlack}
                    />
                    <View style={CommonStyles.iconRowView}>
                        <TouchableOpacity onPress={() => setIsIcon('view')}>
                            <Image
                                source={isIcon == 'view' ? listViewActive : listViewInactive}
                                resizeMode='contain'
                            />
                        </TouchableOpacity>
                        <View style={CommonStyles.verticalView} />
                        <TouchableOpacity onPress={() => setIsIcon('image')}>
                            <Image
                                source={isIcon == 'image' ? imageViewActive : imageViewInactive}
                                resizeMode='contain'
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
                <View style={SpaceStyles.bottom2}>
                    <CustomText
                        text={'Cryptos'}
                        style={TextStyles.textBold18DarkBlack}
                    />
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