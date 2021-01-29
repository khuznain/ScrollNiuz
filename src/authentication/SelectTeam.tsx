import React from 'react';
import {Image, StyleSheet, TouchableOpacity} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';

import {Box, Text, PrimaryWrapper, Button, RadioButton} from '../components';
import {Routes, StackNavigationProps} from '../navigation';
import {USER} from '../utils/assets';
import {TEAM_DATA} from '../utils/data';
import {flatListDataFormate} from '../utils/utils';

const Header = () => (
  <Box bg="primary" paddingHorizontal="m">
    <Text textAlign="center" color="white" fontSize={22} paddingTop="m">
      Scrollniuz
    </Text>
    <Box
      paddingTop="l"
      paddingBottom="m"
      flexDirection="row"
      alignItems="center"
      justifyContent="space-between">
      <Box flexDirection="row" alignItems="center">
        <Image source={USER} resizeMode="contain" style={styles.useImage} />
        <Text marginLeft="m" color="white" fontWeight="bold" fontSize={16}>
          Premier League
        </Text>
      </Box>
    </Box>
  </Box>
);

interface TeamCardType {
  name: string;
  logo: string;
}

const TeamCard = ({logo, name}: TeamCardType) => {
  return (
    <Box
      flex={1}
      borderRadius="s"
      marginBottom="l"
      marginHorizontal="s"
      padding="s"
      justifyContent="center"
      alignItems="center"
      backgroundColor="teamCard">
      <Image source={logo} style={styles.teamImage} />
      <Text color="body" fontSize={12} textAlign="center">
        {name}
      </Text>
    </Box>
  );
};

const numColumns = 3;

const TeamList = () => {
  return (
    <Box paddingVertical="l" paddingHorizontal="m">
      <Text color="black" fontSize={18} marginBottom="l" textAlign="center">
        Select your Favourite team
      </Text>
      <FlatList
        numColumns={3}
        data={flatListDataFormate(TEAM_DATA, numColumns)}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item, index}) => {
          return <TeamCard key={index} {...item} />;
        }}
      />
    </Box>
  );
};

const SelectTeam = ({
  navigation,
}: StackNavigationProps<Routes, 'CreateProfile'>) => {
  return (
    <PrimaryWrapper>
      <Box flex={1}>
        <Header />
        <TeamList />
        <Box
          flex={1}
          paddingBottom="l"
          justifyContent="flex-end"
          paddingHorizontal="m">
          <Button onPress={() => {}} label="Continue" />
        </Box>
      </Box>
    </PrimaryWrapper>
  );
};

const styles = StyleSheet.create({
  useImage: {
    width: 40,
    height: 40,
    borderRadius: 40,
    borderWidth: 2,
    borderColor: '#ffff',
  },
  teamImage: {
    width: 65,
    height: 65,
    marginBottom: 10,
    borderRadius: 40,
  },
});

export default SelectTeam;
