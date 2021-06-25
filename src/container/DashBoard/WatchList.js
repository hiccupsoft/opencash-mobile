import React from 'react';
import {
    View,
    Image,
    ScrollView,
    FlatList
} from 'react-native';
import CustomText from '../../components/CustomText';
import SpaceStyles from '../../styles/SpaceStyles';
import TextStyles from '../../styles/TextStyles';
import { cart } from '../../constants/Images'
import CommonStyles from '../../styles/CommonStyles';
import { Chart, VerticalAxis, HorizontalAxis, Line } from 'react-native-responsive-linechart'

const data = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}]
function WatchList() {
    const renderWatchlist = ({ item, index }) => {
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
                                resizeMode='contain'
                                style={SpaceStyles.left2}
                            />
                        </View>
                        <CustomText
                            text={'Bank of America'}
                            style={TextStyles.textMedium14}
                        />
                    </View>
                    <View style={CommonStyles.watchlistPriceView}>
                        <CustomText
                            text={'123.50'}
                            style={TextStyles.textSemiBold14White}
                        />
                    </View>
                </View>
                <View style={CommonStyles.lineView} />
            </>
        )
    }
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={SpaceStyles.spaceHorizontal}>
                <CustomText
                    text={'4 items'}
                    style={TextStyles.textMedium16DarkBlack}
                />
                <View style={[SpaceStyles.alignSpaceBlock, SpaceStyles.spaceVertical]}>
                    <View style={SpaceStyles.coloumnView}>
                        <CustomText
                            text={'+5.87%'}
                            style={TextStyles.textSemiBold14Green}
                        />
                        <CustomText
                            text={'Avg Return'}
                            style={TextStyles.textMedium14}
                        />
                    </View>
                    <View style={SpaceStyles.coloumnView}>
                        <CustomText
                            text={'3'}
                            style={TextStyles.textSemiBold14Green}
                        />
                        <CustomText
                            text={'Gainers'}
                            style={TextStyles.textMedium14}
                        />
                    </View>
                    <View style={SpaceStyles.coloumnView}>
                        <CustomText
                            text={'10'}
                            style={TextStyles.textSemiBold14Red}
                        />
                        <CustomText
                            text={'Losers'}
                            style={TextStyles.textMedium14}
                        />
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