import React, {useState} from 'react';
import {StyleSheet, View, TouchableOpacity, Image, Platform} from 'react-native';
import {BLUE, GRAY, WHITE} from '../constants/Colors';
import constants from '../constants';
import {account, history, portfolio, search} from '../constants/Images';
import {ifIphoneX} from "react-native-iphone-x-helper";

const tabBarConfig = [
  {
    icon: portfolio,
    name: 'DashBoardStack',
  },
  {
    icon: search,
    name: 'SearchStack',
  },
  {
    icon: history,
    name: 'HistoryStack',
  },
  {
    icon: account,
    name: 'AccountStack',
  },
];

function TabBar(props) {
  const {descriptors, navigation, state} = props;
  const focusedOptions = descriptors[state.routes[state.index].key].options;

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  return (
    <View style={styles.container}>
      {tabBarConfig.map((route, index) => {
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <TouchableOpacity
            activeOpacity={1}
            onPress={onPress}
            style={styles.singleTab}>
            <Image
              source={route.icon}
              style={isFocused ? styles.selectedIcon : styles.unSelectedIcon}
              resizeMode="contain"
            />
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

export default TabBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: WHITE,
    paddingHorizontal: (constants.BaseStyle.DEVICE_WIDTH / 100) * 2,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: 'rgba(0, 0, 0, 0.25)',
  },
  singleTab: {
    paddingHorizontal: (constants.BaseStyle.DEVICE_WIDTH / 100) * 5,
  },
  selectedIcon: {
    height: Platform.OS === 'ios' ? ifIphoneX(50, 40) : 48,
    width: (constants.BaseStyle.DEVICE_WIDTH / 100) * 5.5,
    marginBottom: Platform.OS === 'ios' ? ifIphoneX(30, 10) : 10,
    tintColor: BLUE,
  },
  unSelectedIcon: {
    height: Platform.OS === 'ios' ? ifIphoneX(50, 40) : 48,
    width: (constants.BaseStyle.DEVICE_WIDTH / 100) * 5.5,
    marginBottom: Platform.OS === 'ios' ? ifIphoneX(30, 10) : 10,
    tintColor: GRAY,
  },
});
