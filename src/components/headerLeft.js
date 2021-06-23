import React from 'react'
import { TouchableOpacity, Image } from 'react-native'
import constants from '../constants'

function HeaderLeft({ iconName, onPress = () => { } }) {
    return (
        <TouchableOpacity onPress={onPress}
            style={{
                borderRadius: 90,
                width: (constants.BaseStyle.DEVICE_WIDTH / 100) * 9,
                height: (constants.BaseStyle.DEVICE_WIDTH / 100) * 9,
                justifyContent: 'center',
                alignItems: 'center',
                marginLeft: (constants.BaseStyle.DEVICE_WIDTH / 100) * 3,
            }}
        >
            <Image source={iconName}  resizeMode='contain'/>
        </TouchableOpacity>
    )
}

export default HeaderLeft