import BaseStyles from './BaseStyles'

const HEIGHT = (BaseStyles.DEVICE_HEIGHT / 100)
const WIDTH = (BaseStyles.DEVICE_WIDTH / 100)

const Fonts = {
    regular20: {
        fontSize: WIDTH * 5.5,
        fontFamily: 'Manrope-Regular'
    },
    medium16: {
        fontSize: WIDTH * 4,
        fontFamily: 'Manrope-Medium'
    },
    bold16: {
        fontSize: WIDTH * 4,
        fontFamily: 'Manrope-Bold'
    },
    medium14: {
        fontSize: WIDTH * 3.4,
        fontFamily: 'Manrope-Medium'
    },
    semiBold14: {
        fontSize: WIDTH * 3.4,
        fontFamily: 'Manrope-SemiBold'
    },
    regular14: {
        fontSize: WIDTH * 3.4,
        fontFamily: 'Manrope-Regular'
    }
}
module.exports = Fonts