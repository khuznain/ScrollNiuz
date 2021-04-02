import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
//
import Container from '../components/Container';
import {Box, Text} from '../components';
import Icon from '../components/Icon';

function Drawer() {
  return (
    <Container>
      <Box justifyContent="center" alignItems="center" flex={0.2}>
        <Box
          justifyContent="center"
          alignItems="center"
          width={90}
          height={90}
          borderRadius="xl"
          bg="grey2">
          <Icon name="user" color="yellow" size={30} onPress={() => {}} />
        </Box>
      </Box>

      <Box
        flex={1}
        justifyContent="space-between"
        bg="white"
        style={styles.scrollView}>
        <Box>
          <TouchableOpacity activeOpacity={0.6} style={styles.menuItem}>
            <MaterialCommunityIcons
              name="card-account-details-outline"
              size={22}
              color="#000"
            />
            <Box width={10} />
            <Text variant="menuItem">My Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.6} style={styles.menuItem}>
            <MaterialCommunityIcons
              name="bell-outline"
              size={22}
              color="#000"
            />
            <Box width={10} />
            <Text variant="menuItem">Notification</Text>
          </TouchableOpacity>
          <Box style={[styles.menuItem, {alignItems: 'flex-start'}]}>
            <MaterialCommunityIcons
              name="brightness-5"
              size={22}
              color="#000"
            />
            <Box width={10} />
            <Box width="70%">
              <Text variant="menuItem">Notification</Text>
              <Box height={5} />
              <Box
                justifyContent="space-between"
                alignItems="center"
                flexDirection="row">
                <Text fontSize={14} opacity={0.8} variant="menuItem">
                  Day Mode
                </Text>
                <Ionicons name="sunny-outline" size={20} color="#000" />
              </Box>
              <Box height={5} />
              <Box
                justifyContent="space-between"
                alignItems="center"
                flexDirection="row">
                <Text fontSize={14} opacity={0.8} variant="menuItem">
                  Night Mode
                </Text>
                <Ionicons name="moon-outline" size={15} color="#000" />
              </Box>
            </Box>
          </Box>
        </Box>
        <Box>
          <TouchableOpacity activeOpacity={0.6} style={styles.menuItem}>
            <SimpleLineIcons name="logout" size={22} color="#000" />
            <Box width={10} />
            <Text variant="menuItem">Logout</Text>
          </TouchableOpacity>
        </Box>
      </Box>
    </Container>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    padding: 20,
    paddingLeft: 30,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
});

export default Drawer;
