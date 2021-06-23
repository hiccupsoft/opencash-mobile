import { StyleSheet } from 'react-native'
import constants from '../constants'
import { BLUE, LIGHT_GRAY, WHITE, GRAY } from '../constants/Colors'

const HEIGHT = (constants.BaseStyle.DEVICE_HEIGHT / 100)
const WIDTH = (constants.BaseStyle.DEVICE_WIDTH / 100)

const AuthStyles = StyleSheet.create({
    //auth screen
    authContainer: {
        flex: 1,
        backgroundColor: WHITE
    },
    logoImage: {
        alignSelf: 'center',
        marginTop: HEIGHT * 20,
        marginBottom: HEIGHT * 10
    },
    imageHand: {
        width: WIDTH * 10,
        height: HEIGHT * 4
    },
    imagePercent: {
        width: WIDTH * 10,
        height: HEIGHT * 3
    },
    textView: {
        width: WIDTH * 70,
        marginBottom: HEIGHT * 3
    },
    textLogin: {
        alignSelf: 'center',
        position: 'absolute',
        bottom: HEIGHT * 11
    },
    bottomJoinView: {
        position: 'absolute',
        bottom: 0,
        backgroundColor: BLUE,
        width: WIDTH * 100,
        height: HEIGHT * 8,
        alignItems: 'center',
        justifyContent: 'center'
    },

    //login screen
    textInputView: {
        borderRadius: 4,
        borderWidth: 1,
        borderColor: LIGHT_GRAY,
        height: HEIGHT * 6,
        paddingHorizontal: WIDTH * 5,
        marginTop: HEIGHT * 3,
        justifyContent: 'center'
    },
    textInput: {
        width: WIDTH * 80,
        color: GRAY,
        ...constants.Fonts.medium16
    },

    //signup screen
    halfInputView: {
        borderRadius: 4,
        borderWidth: 1,
        borderColor: LIGHT_GRAY,
        height: HEIGHT * 6,
        paddingHorizontal: WIDTH * 5,
        marginTop: HEIGHT * 3,
        justifyContent: 'center',
        width: WIDTH * 42
    },
    textHalfInput: {
        width: WIDTH * 32,
        color: GRAY,
        ...constants.Fonts.medium16
    },


})
export default AuthStyles