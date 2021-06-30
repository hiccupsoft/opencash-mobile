import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import DashBoard from '../container/DashBoard/DashBoard';
const Stack = createStackNavigator();

function DashBoardStack(props) {
  return (
    <Stack.Navigator initialRouteName={'DashBoardScreen'}>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="DashBoardScreen"
        component={DashBoard}
      />
    </Stack.Navigator>
  );
}

export default DashBoardStack;
