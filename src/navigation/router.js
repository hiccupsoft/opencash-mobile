import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthNavigator from './AuthNavigator';
import HomeNavigator from './HomeNavigator';

function NavigationRouter(props) {
  return (
    <NavigationContainer>
      {/* <AuthNavigator /> */}
      <HomeNavigator/>
    </NavigationContainer>
  );
}
export default NavigationRouter;
