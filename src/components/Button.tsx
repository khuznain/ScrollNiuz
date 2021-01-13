import React, {ReactNode} from 'react';
import {StyleSheet} from 'react-native';
import {useTheme} from '@shopify/restyle';
import {RectButton} from 'react-native-gesture-handler';

import {Text, Theme} from './theme';

export interface ButtonProps {
  variant: 'default' | 'primary' | 'transparent';
  label?: string;
  onPress: () => void;
  children?: ReactNode;
}

const Button = ({variant, onPress, label, children}: ButtonProps) => {
  const theme = useTheme<Theme>();

  const backgroundColor =
    variant === 'primary'
      ? theme.colors.primary
      : variant === 'transparent'
      ? 'transparent'
      : theme.colors.body;

  return (
    <RectButton {...{onPress}} style={[styles.container, {backgroundColor}]}>
      {children ? (
        children
      ) : (
        <Text fontSize={14} color="white" fontFamily="Poppins-Medium">
          {label}
        </Text>
      )}
    </RectButton>
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
