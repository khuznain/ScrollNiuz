import React from 'react';
import {TouchableOpacity} from 'react-native';
import {Box, Text} from './index';

export interface RadioButtonProps {
  style?: any;
  label: String;
  selected: boolean;
  onPress: () => void;
}

const RadioButton: React.SFC<RadioButtonProps> = ({
  label,
  selected,
  onPress,
}: RadioButtonProps) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Box flexDirection="row" alignItems="center" paddingRight="xl">
        <Box
          justifyContent="center"
          alignItems="center"
          width={24}
          height={24}
          borderRadius="l"
          borderColor="primary"
          borderWidth={2}>
          {selected ? (
            <Box
              width={16}
              height={16}
              borderRadius="l"
              backgroundColor="primary"
            />
          ) : null}
        </Box>
        <Text letterSpacing={0.5} fontSize={16} paddingLeft="s" color="black">
          {label}
        </Text>
      </Box>
    </TouchableOpacity>
  );
};

export default RadioButton;
