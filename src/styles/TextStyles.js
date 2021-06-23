import { StyleSheet } from 'react-native'
import constants from '../constants'
import { BLUE, DARK_BLACK, GRAY, WHITE } from '../constants/Colors'

const TextStyles = StyleSheet.create({
    textRegular20: {
        color: DARK_BLACK,
        ...constants.Fonts.regular20 //20 regular
    },
    textBold16: {
        color: BLUE,
        ...constants.Fonts.bold16  //16 bold
    },
    textBold16Black: {
        color: DARK_BLACK,
        ...constants.Fonts.bold16  //16 bold
    },
    textBold16White: {
        color: WHITE,
        ...constants.Fonts.bold16 //16 bold
    },
    textMedium16: {
        color: BLUE,
        ...constants.Fonts.medium16  //16 medium
    },
    textSemiBold14: {
        color: BLUE,
        ...constants.Fonts.semiBold14  //14 semibold
    },
    textMedium14: {
        color: GRAY,
        ...constants.Fonts.medium14  //14 medium
    },
    textRegular14: {
        color: GRAY,
        ...constants.Fonts.regular14  // 14 regular
    },


})
export default TextStyles