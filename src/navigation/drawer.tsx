import React from 'react';
import {StyleSheet, ScrollView} from 'react-native';
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
          width={80}
          height={80}
          borderRadius="xl"
          bg="grey2">
          <Icon name="user" color="yellow" size={30} onPress={() => {}} />
        </Box>
      </Box>

      <Box flex={1} bg="white">
        <ScrollView
          contentContainerStyle={styles.scrollView}
          showsVerticalScrollIndicator={false}>
          <Box>
            <Text>khalid</Text>
          </Box>
        </ScrollView>
      </Box>
    </Container>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    padding: 20,
  },
  thumbnail: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 0,
  },
  userImage: {
    borderRadius: 50,
    borderWidth: 4,
    borderColor: '#fff',
    width: 80,
    height: 80,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.4)',
    zIndex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Drawer;
