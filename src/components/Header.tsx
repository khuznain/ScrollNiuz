import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Feather from 'react-native-vector-icons/Feather';
import {Box, Text} from './theme';

interface HeaderProps {
  name?: String;
  hideBack?: boolean;
}

const Header = ({name}: HeaderProps) => {
  const navigation = useNavigation();
  return (
    <Box
      height={50}
      borderBottomColor="grey2"
      borderBottomWidth={1}
      justifyContent="center"
      alignItems="center"
      paddingHorizontal="m">
      <TouchableOpacity
        style={styles.backButton}
        hitSlop={{top: 50, left: 50, bottom: 50, right: 50}}
        onPress={() => {
          navigation.goBack();
        }}>
        <Feather name="arrow-left" size={24} color="#000" />
      </TouchableOpacity>

      <Text fontSize={16} color="black">
        {name}
      </Text>
    </Box>
  );
};

export default Header;

const styles = StyleSheet.create({
  backButton: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    left: 20,
  },
});
