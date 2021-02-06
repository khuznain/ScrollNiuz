import React from 'react';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';

import BottomTabNavigator from './bottom-tab';

const Stack = createStackNavigator();

const DashboardNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      headerMode="float"
      animation="fade"
      screenOptions={{
        // gestureEnabled: true,
        // gestureDirection: 'horizontal',
        ...TransitionPresets.SlideFromRightIOS,
        header: () => null,
        cardStyle: {
          backgroundColor: '#fff',
        },
      }}>
      <Stack.Screen name="Home" component={BottomTabNavigator} />
    </Stack.Navigator>
  );
};

export default DashboardNavigator;
