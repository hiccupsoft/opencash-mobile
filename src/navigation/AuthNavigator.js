import * as React from 'react';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import AuthScreen from '../container/Auth/AuthScreen';
import LoginScreen from '../container/Auth/LoginScreen';
import HeaderTitle from '../components/headerTitle';
import {logoIcon} from '../constants/Images';
import SignUpScreen from '../container/Auth/SignUpScreen';
import ForgotPasswordScreen from '../container/Auth/ForgotPassword';

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
          headerTitle: () => <HeaderTitle iconName={logoIcon} />,
        }}
        name="LoginScreen"
        component={LoginScreen}
      />
      <Stack.Screen
        options={{
          headerTitle: () => <HeaderTitle iconName={logoIcon} />,
        }}
        name="SignUpScreen"
        component={SignUpScreen}
      />
      <Stack.Screen
        options={{
          headerTitle: () => <HeaderTitle iconName={logoIcon} />,
        }}
        name="ForgotPasswordScreen"
        component={ForgotPasswordScreen}
      />
    </Stack.Navigator>
  );
}

export default AuthNavigator;
