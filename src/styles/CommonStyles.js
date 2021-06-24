import { StyleSheet } from 'react-native';
import constants from '../constants';
import { BORDER } from './../constants/Colors'

const HEIGHT = constants.BaseStyle.DEVICE_HEIGHT / 100;
const WIDTH = constants.BaseStyle.DEVICE_WIDTH / 100;

const CommonStyles = StyleSheet.create({
    lineView: {
        borderBottomColor: BORDER,
        borderBottomWidth: 1,
        marginVertical: HEIGHT * 1.5
    }
});
export default CommonStyles;
