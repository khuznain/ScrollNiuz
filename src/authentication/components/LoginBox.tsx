import React from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import {Box} from '../../components';
import TabButton from './TabButton';

interface LoginBoxProps {
  children: React.ReactNode;
}

const LoginBox = ({children}: LoginBoxProps) => {
  const navigation = useNavigation();
  const route = useRoute();

  console.log(route.name);

  return (
    <Box
      shadowOffset={{
        width: 0,
        height: 1,
      }}
      backgroundColor="white"
      elevation={3}
      borderRadius="s"
      shadowOpacity={0.22}
      shadowRadius={2.22}
      width="90%">
      <Box
        flexDirection="row"
        borderBottomColor="primary"
        borderBottomWidth={0.5}>
        <TabButton
          buttonText="SIGN UP"
          onActive={route.name === 'Register'}
          onPress={() => navigation.navigate('Register')}
        />
        <TabButton
          buttonText="LOGIN"
          onActive={route.name === 'Login'}
          onPress={() => navigation.navigate('Login')}
        />
      </Box>
      {children}
    </Box>
  );
};

export default LoginBox;
