import React, {useState, useCallback} from 'react';
import {FlatList, TouchableOpacity, Image, StyleSheet} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import {useTheme} from '@shopify/restyle';

import {Box, Text, PrimaryWrapper, Button} from '../components';
import {Routes, StackNavigationProps} from '../navigation';
import {flatListDataFormate} from '../utils/utils';
import {TEAM_DATA} from '../utils/data';
import {CNN} from '../utils/assets';
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
        <Text color="white" fontSize={18}>
          Select your Favorite News Channel
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

const TeamCard = ({isSelected}: TeamCardType) => {
  const theme = useTheme<Theme>();
  return (
    <Box
      flex={1}
      borderRadius="s"
      marginBottom="m"
      marginHorizontal="s"
      padding="s"
      position="relative"
      justifyContent="center"
      alignItems="center"
      backgroundColor="black3">
      <Image source={CNN} style={styles.channelImage} />
      <Text color="white" fontSize={18} textAlign="center">
        Name
      </Text>
      <Box position="absolute" top={5} right={5}>
        <Feather
          name="check-circle"
          size={20}
          color={isSelected ? theme.colors.checked : theme.colors.body}
        />
      </Box>
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
        <Box paddingVertical="l">
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
            onPress={() => navigation.navigate('SelectChannel')}
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
  channelImage: {
    width: 65,
    height: 65,
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 40,
  },
  teamCard: {
    flex: 1,
  },
});

export default SelectTeam;
