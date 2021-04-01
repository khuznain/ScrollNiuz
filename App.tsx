import * as React from 'react';
import {ThemeProvider} from '@shopify/restyle';
import {NavigationContainer} from '@react-navigation/native';
// import AuthenticationNavigator from './src/navigation/AuthNavigationStack';
import {DashboardNavigator} from './src/navigation/dashboard.routes';
import {theme} from './src/components';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        {/* <AuthenticationNavigator /> */}
        <DashboardNavigator />
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;
