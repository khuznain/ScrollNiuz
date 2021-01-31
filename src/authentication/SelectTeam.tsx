import React, {useState, useCallback} from 'react';
import {FlatList, TouchableOpacity, Image, StyleSheet} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import {useTheme} from '@shopify/restyle';

import {Box, Text, PrimaryWrapper, Button} from '../components';
import {Routes, StackNavigationProps} from '../navigation';
import {flatListDataFormate} from '../utils/utils';
import {TEAM_DATA} from '../utils/data';
import {USER} from '../utils/assets';
import {Theme} from '../components/theme';

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
  isSelected: boolean;
  logo: string;
}

const TeamCard = ({logo, name, isSelected}: TeamCardType) => {
  const theme = useTheme<Theme>();
  return (
    <Box
      flex={1}
      borderRadius="s"
      marginBottom="l"
      marginHorizontal="s"
      padding="s"
      position="relative"
      justifyContent="center"
      alignItems="center"
      backgroundColor="teamCard">
      <Image source={logo} style={styles.teamImage} />
      <Text color="body" fontSize={12} textAlign="center">
        {name}
      </Text>
      {isSelected && (
        <Box
          borderColor="primary"
          borderWidth={1}
          borderRadius="l"
          position="absolute"
          top={0}
          right={0}>
          <Feather name="check" size={18} color={theme.colors.primary} />
        </Box>
      )}
    </Box>
  );
};

const numColumns = 3;

const SelectTeam = ({
  navigation,
}: StackNavigationProps<Routes, 'CreateProfile'>) => {
  const [selectedIds, setSelectedIds] = useState<Array<number>>([]);

  const selectTeam = (id: number) => {
    let index = selectedIds.indexOf(id);
    if (index === -1) {
      setSelectedIds([...selectedIds, id]);
    } else {
      const updateIds = selectedIds.filter((selectedId) => selectedId !== id);
      setSelectedIds([...updateIds]);
    }
  };

  return (
    <PrimaryWrapper>
      <Box flex={1}>
        <Header />
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
              return (
                <TouchableOpacity
                  onPress={() => selectTeam(item.id)}
                  activeOpacity={0.9}
                  style={styles.teamCard}>
                  <TeamCard
                    isSelected={selectedIds.includes(item.id)}
                    key={index}
                    {...item}
                  />
                </TouchableOpacity>
              );
            }}
          />
        </Box>
        <Box position="absolute" bottom={10} width="100%" paddingHorizontal="m">
          <Button
            disabled={selectedIds.length === 0}
            variant={selectedIds.length === 0 ? 'disabled' : 'primary'}
            onPress={() => {}}
            label="Continue"
          />
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
  teamCard: {
    flex: 1,
  },
});

export default SelectTeam;
