import { StyleSheet } from 'react-native'
import constants from '../constants'

const HEIGHT = (constants.BaseStyle.DEVICE_HEIGHT / 100)
const WIDTH = (constants.BaseStyle.DEVICE_WIDTH / 100)

const SpaceStyles = StyleSheet.create({
    alignSpaceBlock: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    row: {
        flexDirection: 'row',
    },
    rowFlex: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    leftMargin: {
        marginLeft: WIDTH * 4
    },
    left2: {
        marginLeft: WIDTH * 2
    },
    spaceHorizontal: {
        marginHorizontal: WIDTH * 5
    },
    vertical1: {
        marginVertical: HEIGHT * 1
    },
    spaceVertical: {
        marginVertical: HEIGHT * 2
    },
    top5: {
        marginTop: HEIGHT * 5
    }
})
export default SpaceStyles