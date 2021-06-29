import {StyleSheet} from 'react-native';
import constants from '../constants';

const HEIGHT = constants.BaseStyle.DEVICE_HEIGHT / 100;
const WIDTH = constants.BaseStyle.DEVICE_WIDTH / 100;

const SpaceStyles = StyleSheet.create({
  alignSpaceBlock: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  row: {
    flexDirection: 'row',
  },
  rowFlex: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  coloumnView: {
    flexDirection: 'column',
  },
  leftMargin: {
    marginLeft: WIDTH * 4,
  },
  left2: {
    marginLeft: WIDTH * 2,
  },
  left5: {
    marginLeft: WIDTH * 5,
  },
  spaceHorizontal: {
    marginHorizontal: 20,
  },
  vertical1: {
    marginVertical: HEIGHT,
  },
  spaceVertical: {
    marginVertical: HEIGHT * 2,
  },
  top5: {
    marginTop: HEIGHT * 5,
  },
  bottom1: {
    marginBottom: HEIGHT,
  },
  bottom2: {
    marginBottom: HEIGHT * 2,
  },
  bottom3: {
    marginBottom: HEIGHT * 3,
  },
  top1: {
    marginTop: HEIGHT,
  },
  top2: {
    marginTop: HEIGHT * 2,
  },
  top3: {
    marginTop: HEIGHT * 3,
  },
});
export default SpaceStyles;
