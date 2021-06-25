import { StyleSheet } from 'react-native';
import constants from '../constants';
import { BLUE, BORDER, GRAY, GREEN, LIGHT_GRAY } from './../constants/Colors'

const HEIGHT = constants.BaseStyle.DEVICE_HEIGHT / 100;
const WIDTH = constants.BaseStyle.DEVICE_WIDTH / 100;

const CommonStyles = StyleSheet.create({
    //history
    lineView: {
        borderBottomColor: BORDER,
        borderBottomWidth: 1,
        marginVertical: HEIGHT * 1.5
    },

    //dashboard
    dashBoardTabView: {
        borderColor: LIGHT_GRAY,
        borderRadius: 17,
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        width: WIDTH * 27,
        justifyContent: 'space-evenly',
        paddingVertical: HEIGHT * 0.8
    },
    dashBoardSelectedTabView: {
        borderColor: LIGHT_GRAY,
        backgroundColor: LIGHT_GRAY,
        borderRadius: 17,
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        width: WIDTH * 27,
        justifyContent: 'space-evenly',
        paddingVertical: HEIGHT * 0.8
    },
    tabDashboardImage: {
        width: WIDTH * 5,
        height: WIDTH * 5
    },
    brokerageAccountView: {
        backgroundColor: BLUE,
        borderRadius: 4,
        paddingHorizontal: WIDTH * 5,
        paddingVertical: HEIGHT * 2
    },
    textWidth: {
        width: WIDTH * 60
    },
    upArrowImage: {
        position: 'absolute',
        alignSelf: 'center',
        top: HEIGHT * 0.5,
        zIndex: 9999
    },
    verticalDot: {
        backgroundColor: GREEN,
        height: HEIGHT * 1.8,
        width: WIDTH * 1.5,
        borderRadius: 2,
        marginRight: WIDTH * 2
    },
    chartView: {
        height: HEIGHT * 25,
        width: WIDTH * 90,
        marginTop: HEIGHT * 2
    },
    watchlistPriceView: {
        backgroundColor: GREEN,
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: HEIGHT * 0.7,
        width: WIDTH * 20
    },
    verticalView: {
        height: HEIGHT * 3,
        borderRightColor: GRAY,
        borderRightWidth: 1
    },
    iconRowView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        width: WIDTH * 20,
        borderRadius: 90,
        borderColor: GRAY,
        borderWidth: 1
    }

});
export default CommonStyles;
