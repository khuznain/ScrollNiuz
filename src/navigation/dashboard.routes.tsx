import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
//
import BottomTabNavigator from './bottom-tab';
import {HomeRoutes} from './types';
import Drawer from './drawer';
import {StyleSheet} from 'react-native';

const DrawerMenu = createDrawerNavigator<HomeRoutes>();

const Stack = createStackNavigator();

const HomeNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Home" headerMode="none">
      <Stack.Screen name="Home" component={BottomTabNavigator} />
    </Stack.Navigator>
  );
};

export const DashboardNavigator = () => {
  return (
    <DrawerMenu.Navigator
      drawerStyle={styles.drawerMenu}
      drawerContent={() => <Drawer />}>
      <DrawerMenu.Screen name="Home" component={HomeNavigator} />
    </DrawerMenu.Navigator>
  );
};

const styles = StyleSheet.create({
  drawerMenu: {
    width: '80%',
  },
});
