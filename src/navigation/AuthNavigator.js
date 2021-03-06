import * as React from 'react';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import AuthScreen from '../container/Auth/AuthScreen';
import HeaderTitle from '../components/headerTitle';
import {logoIcon} from '../constants/Images';
import ForgotPasswordScreen from '../container/Auth/ForgotPassword';
import LoginScreen from '../container/Auth/LoginScreen';
import SignUpScreen from '../container/Auth/SignUpScreen';

const Stack = createStackNavigator();

function AuthNavigator(props) {
  return (
    <Stack.Navigator initialRouteName={'AuthScreen'}>
      <Stack.Screen
        options={{
          headerShown: false,
          gestureEnabled: false,
        }}
        name="AuthScreen"
        component={AuthScreen}
      />
      <Stack.Screen
        options={{
          ...TransitionPresets.ModalSlideFromBottomIOS,
          gestureEnabled: false,
          headerShown: false,
        }}
        name="LoginScreen"
        component={LoginScreen}
      />
      <Stack.Screen
        options={{
          ...TransitionPresets.ModalSlideFromBottomIOS,
          gestureEnabled: false,
          headerShown: false,
        }}
        name="SignUpScreen"
        component={SignUpScreen}
      />
      <Stack.Screen
        options={{
          gestureEnabled: false,
          headerTitle: () => <HeaderTitle iconName={logoIcon} />,
          headerStyle: {
            shadowColor: 'transparent',
          },
        }}
        name="ForgotPasswordScreen"
        component={ForgotPasswordScreen}
      />
    </Stack.Navigator>
  );
}

export default AuthNavigator;
