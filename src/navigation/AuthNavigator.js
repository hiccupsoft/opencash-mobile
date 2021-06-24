import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import AuthScreen from '../container/Auth/AuthScreen';
import HeaderTitle from '../components/headerTitle';
import {logoIcon} from '../constants/Images';
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
        name="ForgotPasswordScreen"
        component={ForgotPasswordScreen}
      />
    </Stack.Navigator>
  );
}

export default AuthNavigator;
