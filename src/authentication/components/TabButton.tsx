import React from 'react';
import {BorderlessButton as Button} from 'react-native-gesture-handler';
import {Text} from '../../components';

interface TabButtonProps {
  onPress: () => void;
  buttonText: string;
  onActive: boolean;
}

const TabButton = ({onPress, buttonText, onActive}: TabButtonProps) => {
  return (
    <Button
      style={{padding: 16, flex: 1, alignItems: 'center'}}
      onPress={onPress}>
      <Text
        fontSize={14}
        fontWeight={onActive ? '600' : '400'}
        color={onActive ? 'primary' : 'body'}>
        {buttonText}
      </Text>
    </Button>
  );
};

export default TabButton;
