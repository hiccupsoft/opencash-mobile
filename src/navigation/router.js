import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import AuthNavigator from './AuthNavigator'

function NavigationRouter(props) {
    return (
        <NavigationContainer>
            <AuthNavigator />
        </NavigationContainer>
    )
}
export default NavigationRouter