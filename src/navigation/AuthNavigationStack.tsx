import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {
  Login,
  Register,
  CreateProfile,
  SelectTeam,
  SelectLeague,
  ChooseInterest,
  SelectChannel,
} from '../authentication/';
import {Routes} from './index';

const AuthenticationStack = createStackNavigator<Routes>();

const AuthenticationNavigator = () => {
  return (
    <AuthenticationStack.Navigator
      headerMode="none"
      initialRouteName="Login"
      screenOptions={{
        cardStyle: {
          backgroundColor: '#fff',
        },
      }}>
      <AuthenticationStack.Screen name="Login" component={Login} />
      <AuthenticationStack.Screen name="Register" component={Register} />
      <AuthenticationStack.Screen
        name="CreateProfile"
        component={CreateProfile}
      />
      <AuthenticationStack.Screen name="SelectTeam" component={SelectTeam} />
      <AuthenticationStack.Screen
        name="SelectLeague"
        component={SelectLeague}
      />
      <AuthenticationStack.Screen
        name="ChooseInterest"
        component={ChooseInterest}
      />
      <AuthenticationStack.Screen
        name="SelectChannel"
        component={SelectChannel}
      />
    </AuthenticationStack.Navigator>
  );
};

export default AuthenticationNavigator;
