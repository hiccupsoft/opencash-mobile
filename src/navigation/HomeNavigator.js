import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TabBar from './TabBar';
import DashBoardStack from './DashBoardStack';
import HistoryScreen from '../container/History/HistoryScreen';
import StockPosition from '../container/DashBoard/StockPosition';
import HeaderTitleText from '../components/headerTitleText';
import CryptoPosition from '../container/DashBoard/CryptoPosition';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function HomeNavigator(props) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="BottomTab"
        component={BootmTab}
      />
      <Stack.Screen
        options={{
          headerTitle: () => <HeaderTitleText titleName={'NFLX'} />,
          headerStyle: {
            shadowColor: 'transparent',
          },
        }}
        name="StockPositionScreen"
        component={StockPosition}
      />
      <Stack.Screen
        options={{
          headerTitle: () => <HeaderTitleText titleName={'BTC'} />,
          headerStyle: {
            shadowColor: 'transparent',
          },
        }}
        name="CryptoPositionScreen"
        component={CryptoPosition}
      />
    </Stack.Navigator>
  );
}

function BootmTab(props) {
  return (
    <Tab.Navigator tabBar={props => <TabBar {...props} />}>
      <Tab.Screen name="DashBoardStack" component={DashBoardStack} />
      <Tab.Screen name="SearchStack" component={DashBoardStack} />
      <Tab.Screen name="HistoryStack" component={HistoryScreen} />
      <Tab.Screen name="AccountStack" component={DashBoardStack} />
    </Tab.Navigator>
  );
}
export default HomeNavigator;
