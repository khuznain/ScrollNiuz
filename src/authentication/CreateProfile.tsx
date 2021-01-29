import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import {useTheme} from '@shopify/restyle';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Box, Text, PrimaryWrapper, Button, RadioButton} from '../components';
import {Routes, StackNavigationProps} from '../navigation';
import {Theme} from '../components/theme';

const Header = () => (
  <Box bg="primary" alignItems="center">
    <Text color="white" fontSize={22} paddingTop="m">
      Scrollniuz
    </Text>
    <Text color="white" fontSize={16} paddingTop="xl" paddingBottom="m">
      Create Profile
    </Text>
  </Box>
);

const Form = () => {
  const theme = useTheme<Theme>();
  return (
    <Box paddingVertical="l" paddingHorizontal="m">
      <Box
        justifyContent="center"
        alignItems="center"
        alignSelf="center"
        width={130}
        height={130}
        borderRadius="xl"
        backgroundColor="grey2">
        <Feather name="camera" color={theme.colors.primary} size={50} />
      </Box>

      <Box marginTop="xl" marginBottom="m">
        <Text color="body">Gender</Text>
        <Box paddingVertical="s" flexDirection="row">
          <RadioButton onPress={() => {}} label="Male" selected={true} />
          <RadioButton onPress={() => {}} label="Female" selected={false} />
        </Box>
      </Box>
      <Box>
        <Text color="body">Birthday</Text>
        <TouchableOpacity onPress={() => alert('this is working.')}>
          <Box
            marginTop="s"
            borderColor="black"
            borderWidth={1}
            borderRadius="s"
            padding="m">
            <Text color="black" fontSize={16}>
              DD-MM-YYYY
            </Text>
          </Box>
        </TouchableOpacity>
      </Box>
    </Box>
  );
};

const CreateProfile = ({
  navigation,
}: StackNavigationProps<Routes, 'CreateProfile'>) => {
  return (
    <PrimaryWrapper>
      <KeyboardAwareScrollView contentContainerStyle={{flex: 1}}>
        <Box flex={1}>
          <Header />
          <Form />
          <Box
            flex={1}
            paddingBottom="l"
            justifyContent="flex-end"
            paddingHorizontal="m">
            <Button onPress={() => {}} label="Continue" />
          </Box>
        </Box>
      </KeyboardAwareScrollView>
    </PrimaryWrapper>
  );
};

export default CreateProfile;
