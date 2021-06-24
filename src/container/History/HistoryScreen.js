import React from 'react';
import {
    View,
    FlatList,
    Image
} from 'react-native';
import CustomText from '../../components/CustomText';
import AuthStyles from '../../styles/AuthStyles';
import TextStyles from '../../styles/TextStyles';
import SpaceStyles from '../../styles/SpaceStyles';
import CommonStyles from '../../styles/CommonStyles';
import { refreshIcon, roundEdge } from '../../constants/Images'

const data = [{}, {}, {}, {}, {},{}, {}, {}, {}, {},{}, {}, {}, {}, {}]
function HistoryScreen(props) {
    const { navigation } = props;

    const renderHistory = ({ item, index }) => {
        return (
            <View style={SpaceStyles.spaceHorizontal}>
                <View style={SpaceStyles.alignSpaceBlock}>
                    <View>
                        <View style={SpaceStyles.rowFlex}>
                            <Image source={refreshIcon} resizeMode='contain' />
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
                        <CustomText
                            text={'-$1,200.45'}
                            style={TextStyles.textSemiBold16}
                        />
                        <Image source={roundEdge} resizeMode='contain' style={SpaceStyles.left2} />
                    </View>
                </View>
                <View style={CommonStyles.lineView} />
            </View>
        );
    };


    return (
        <View style={AuthStyles.authContainer}>
            <View style={AuthStyles.headerView}>
                <CustomText
                    text={'History'}
                    style={TextStyles.textBold24}
                />
            </View>
                <FlatList
                    data={data}
                    keyboardShouldPersistTaps="handled"
                    showsVerticalScrollIndicator={false}
                    renderItem={renderHistory}
                />
        </View>
    );
}
export default HistoryScreen;