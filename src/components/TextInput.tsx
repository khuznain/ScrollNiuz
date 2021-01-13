import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import {
  StyleSheet,
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
} from 'react-native';

import {theme, Box} from '.';

interface TextInputProps extends RNTextInputProps {
  placeholder: string;
  icon: string;
  touched?: boolean;
  error?: string;
}

const TextInput = ({icon, touched, error, ...props}: TextInputProps) => {
  const reColor = !touched ? 'borderBlack' : error ? 'danger' : 'primary';
  const color = theme.colors[reColor];

  return (
    <Box
      flexDirection="row"
      height={50}
      marginBottom="m"
      alignItems="center"
      borderRadius="s"
      borderWidth={StyleSheet.hairlineWidth}
      borderColor={reColor}>
      <Box padding="s">
        <Icon name={icon} size={16} {...{color}} />
      </Box>
      <Box flex={1}>
        <RNTextInput
          autoCorrect={false}
          autoCapitalize="none"
          style={{flex: 1, fontFamily: 'Poppins-Regular'}}
          underlineColorAndroid="transparent"
          placeholderTextColor={color}
          {...props}
        />
      </Box>
    </Box>
  );
};

export default TextInput;
