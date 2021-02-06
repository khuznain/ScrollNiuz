import React from 'react';
import {View, SafeAreaView, TouchableOpacity, StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MyTeam from '../dashboard/MyTeam';
import {Box, Text} from '../components';

const Tab = createBottomTabNavigator();

function MyTabBar({state, descriptors, navigation}) {
  const focusedOptions = descriptors[state.routes[state.index].key].options;

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  return (
    <View style={{flexDirection: 'row'}}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];

        console.log('options ->', options);

        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

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

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={[styles.tab, isFocused ? {} : {flex: 1}]}>
            <Box flexDirection="row" style={isFocused ? styles.selected : {}}>
              {options.tabBarIcon()}
              {isFocused && (
                <Text
                  fontSize={18}
                  letterSpacing={0.5}
                  color="primary"
                  paddingLeft="s">
                  {label}
                </Text>
              )}
            </Box>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  tab: {
    height: 60,
    paddingHorizontal: 10,
    paddingTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  selected: {
    backgroundColor: '#F2F7F6',
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 5,
  },
});

const TabNavigator = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Tab.Navigator
        tabBar={(props) => <MyTabBar {...props} />}
        initialRouteName="Home">
        <Tab.Screen
          options={{
            tabBarLabel: 'My Team',
            tabBarIcon: () => (
              <FontAwesome color={'#418B86'} name="newspaper-o" size={22} />
            ),
          }}
          name="My Team"
          component={MyTeam}
        />
        <Tab.Screen
          options={{
            tabBarIcon: () => (
              <FontAwesome5 color={'#418B86'} name="globe" size={25} />
            ),
          }}
          name="Interests"
          component={MyTeam}
        />
        <Tab.Screen
          options={{
            tabBarIcon: () => (
              <Ionicons color={'#418B86'} name="bookmark" size={25} />
            ),
          }}
          name="Bookmarks"
          component={MyTeam}
        />
        <Tab.Screen
          options={{
            tabBarIcon: () => (
              <Ionicons color={'#418B86'} name="settings-sharp" size={25} />
            ),
          }}
          name="Setting"
          component={MyTeam}
        />
      </Tab.Navigator>
    </SafeAreaView>
  );
};

export default TabNavigator;
