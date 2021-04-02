import React from 'react';
import {TouchableOpacity} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
//
import {IconNames} from '../types/IconNames';
import theme from './theme';

interface IconProps {
  size?: 20 | 25 | 30 | 40 | 50 | 60 | 70 | 80;
  color: keyof typeof theme.colors;
  onPress?: () => void;
  name: IconNames;
  touchLess?: boolean;
}

const Icon: React.SFC<IconProps> = ({
  size,
  name,
  color,
  onPress,
  touchLess,
}) => {
  return touchLess ? (
    <Feather name={name} color={theme.colors[color]} size={size} />
  ) : (
    <TouchableOpacity
      activeOpacity={0.6}
      hitSlop={{top: 50, left: 50, bottom: 50, right: 50}}
      onPress={onPress}>
      <Feather name={name} color={theme.colors[color]} size={size} />
    </TouchableOpacity>
  );
};

Icon.defaultProps = {
  color: 'white',
  size: 30,
};

export default Icon;
