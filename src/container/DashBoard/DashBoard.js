import React, { useState } from 'react';
import {
    View,
    TouchableOpacity,
    Image,
} from 'react-native';
import CustomText from '../../components/CustomText';
import AuthStyles from '../../styles/AuthStyles';
import SpaceStyles from '../../styles/SpaceStyles';
import TextStyles from '../../styles/TextStyles';
import { overview, star, summary } from '../../constants/Images'
import CommonStyles from '../../styles/CommonStyles';
import OverView from './OverView';
import WatchList from './WatchList';

const data = [{}, {}, {}, {}, {}]
function DashBoard(props) {
    const [isTab, setTab] = useState('overview')
    return (
        <View style={AuthStyles.authContainer}>
            <View style={AuthStyles.headerView}>
                <CustomText
                    text={'Investing'}
                    style={TextStyles.textBold24}
                />
            </View>
            <View style={[SpaceStyles.alignSpaceBlock, SpaceStyles.spaceHorizontal, SpaceStyles.spaceVertical]}>
                <TouchableOpacity
                    style={isTab == 'overview' ? CommonStyles.dashBoardSelectedTabView : CommonStyles.dashBoardTabView}
                    onPress={() => setTab('overview')}
                >
                    <Image source={overview}
                        resizeMode='contain'
                        style={CommonStyles.tabDashboardImage}
                    />
                    <CustomText
                        text={'Overview'}
                        style={TextStyles.textSemiBold14DarkBlack}
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    style={isTab == 'watchlist' ? CommonStyles.dashBoardSelectedTabView : CommonStyles.dashBoardTabView}
                    onPress={() => setTab('watchlist')}
                >
                    <Image
                        source={star}
                        resizeMode='contain'
                        style={CommonStyles.tabDashboardImage}
                    />
                    <CustomText
                        text={'Watchlist'}
                        style={TextStyles.textSemiBold14DarkBlack}
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    style={isTab == 'summary' ? CommonStyles.dashBoardSelectedTabView : CommonStyles.dashBoardTabView}
                    onPress={() => setTab('summary')}>
                    <Image
                        source={summary}
                        resizeMode='contain'
                        style={CommonStyles.tabDashboardImage}
                    />
                    <CustomText
                        text={'Summary'}
                        style={TextStyles.textSemiBold14DarkBlack}
                    />
                </TouchableOpacity>
            </View>
            {isTab == 'overview' &&
                <OverView />
            }
            {isTab == 'watchlist' &&
                <WatchList />
            }
        </View>
    );
}

export default DashBoard;