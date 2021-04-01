import * as React from 'react';
import {useNavigation} from '@react-navigation/native';
//
import {Text, Box} from '../../components';
import Icon from '../../components/Icon';

interface HeaderProps {
  title: string;
}

const Header: React.SFC<HeaderProps> = ({title}) => {
  const navigation = useNavigation<any>();
  return (
    <Box p="m" flexDirection="row" bg="primary">
      <Icon
        size={20}
        name="menu"
        color="white"
        onPress={() => navigation.openDrawer()}
      />
      <Box justifyContent="center" alignItems="center" flex={1}>
        <Text fontSize={16} color="white" variant="body">
          {title}
        </Text>
      </Box>
    </Box>
  );
};

export default Header;
