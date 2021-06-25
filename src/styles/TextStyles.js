import { StyleSheet } from 'react-native';
import constants from '../constants';
import { BLUE, DARK_BLACK, GRAY, GREEN, RED, WHITE } from '../constants/Colors';

const TextStyles = StyleSheet.create({
  textBold24: {
    color: DARK_BLACK,
    ...constants.Fonts.bold24   //24 bold
  },
  textRegular20: {
    color: DARK_BLACK,
    ...constants.Fonts.regular20, //20 regular
  },
  textBold18: {
    color: WHITE,
    ...constants.Fonts.bold18  //18 bold
  },
  textBold18DarkBlack: {
    color: DARK_BLACK,
    ...constants.Fonts.bold18  //18 bold
  },
  textBold16: {
    color: BLUE,
    ...constants.Fonts.bold16, //16 bold
  },
  textBold16Black: {
    color: DARK_BLACK,
    ...constants.Fonts.bold16, //16 bold
  },
  textBold16White: {
    color: WHITE,
    ...constants.Fonts.bold16, //16 bold
  },
  textSemiBold16: {
    color: DARK_BLACK,
    ...constants.Fonts.semiBold16   //16 semibold
  },
  textMedium16Green: {
    color: GREEN,
    ...constants.Fonts.medium16, //16 medium
  },
  textMedium16: {
    color: BLUE,
    ...constants.Fonts.medium16, //16 medium
  },
  textMedium16DarkBlack: {
    color: DARK_BLACK,
    ...constants.Fonts.medium16, //16 medium
  },
  textRegular15: {
    color: GRAY,
    ...constants.Fonts.regular15, // 15 regular
  },
  textBold14: {
    color: GRAY,
    ...constants.Fonts.bold14  //14 bold
  },
  textSemiBold14DarkBlack: {
    color: DARK_BLACK,
    ...constants.Fonts.semiBold14, //14 semibold
  },
  textSemiBold14Green: {
    color: GREEN,
    ...constants.Fonts.semiBold14, //14 semibold
  },
  textSemiBold14Red: {
    color: RED,
    ...constants.Fonts.semiBold14, //14 semibold
  },
  textSemiBold14White: {
    color: WHITE,
    ...constants.Fonts.semiBold14, //14 semibold
  },
  textSemiBold14: {
    color: BLUE,
    ...constants.Fonts.semiBold14, //14 semibold
  },
  textMedium14White: {
    color: WHITE,
    ...constants.Fonts.medium14, //14 medium
  },
  textMedium14: {
    color: GRAY,
    ...constants.Fonts.medium14, //14 medium
  },
  textRegular14: {
    color: GRAY,
    ...constants.Fonts.regular14, // 14 regular
  },

});
export default TextStyles;
