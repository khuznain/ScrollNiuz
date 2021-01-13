import * as React from 'react';
import {BorderlessButton as Button} from 'react-native-gesture-handler';
import {Box, Text} from '../../components';
interface BottomButtonProps {
  text: string;
  buttonText: string;
  onPress: () => void;
}

const BottomButton: React.SFC<BottomButtonProps> = ({
  onPress,
  text,
  buttonText,
}: BottomButtonProps) => {
  return (
    <Box alignItems="center" marginTop="xl">
      <Button onPress={onPress}>
        <Box flexDirection="row">
          <Text variant="body">{text}</Text>
          <Text
            textDecorationLine="underline"
            fontWeight="500"
            color="primary"
            paddingLeft="s">
            {buttonText}
          </Text>
        </Box>
      </Button>
    </Box>
  );
};

export default BottomButton;
