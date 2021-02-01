import React, {ReactNode} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {useTheme} from '@shopify/restyle';
// import {RectButton} from 'react-native-gesture-handler';

import {Text, Theme} from './theme';

export interface ButtonProps {
  variant: 'default' | 'primary' | 'disabled' | 'transparent';
  label?: string;
  disabled?: boolean | false;
  onPress: () => void;
  children?: ReactNode;
}

const Button = ({variant, onPress, disabled, label, children}: ButtonProps) => {
  const theme = useTheme<Theme>();

  let backgroundColor;

  switch (variant) {
    case 'primary':
      backgroundColor = theme.colors.primary;
      break;
    case 'disabled':
      backgroundColor = theme.colors.bodyLight;
      break;
    case 'transparent':
      backgroundColor = 'transparent';
      break;
    default:
      backgroundColor = theme.colors.body;
  }

  return (
    <TouchableOpacity
      disabled={disabled}
      activeOpacity={0.9}
      {...{onPress}}
      style={[styles.container, {backgroundColor}]}>
      {children ? (
        children
      ) : (
        <Text fontSize={14} color="white" fontFamily="Poppins-Medium">
          {label}
        </Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 4,
    height: 50,
    marginVertical: 10,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

Button.defaultProps = {variant: 'primary'};

export default Button;
