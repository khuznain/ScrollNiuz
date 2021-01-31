import * as React from 'react';
import {ThemeProvider} from '@shopify/restyle';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {
  Login,
  Register,
  CreateProfile,
  SelectTeam,
  SelectLeague,
  ChooseInterest,
} from './src/authentication';
import {theme} from './src/components';
import {Routes} from './src/navigation';

const AuthenticationStack = createStackNavigator<Routes>();

const AuthenticationNavigator = () => {
  return (
    <AuthenticationStack.Navigator
      headerMode="none"
      initialRouteName="SelectLeague"
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
    </AuthenticationStack.Navigator>
  );
};

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <AuthenticationNavigator />
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;
