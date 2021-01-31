import React, {useState} from 'react';
import {
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import {useTheme} from '@shopify/restyle';

import {Box, Text, Button, Header} from '../components';
import {Routes, StackNavigationProps} from '../navigation';
import {LEAGUE_DATA} from '../utils/data';
import {Theme} from '../components/theme';

interface TeamCardType {
  name: string;
  isSelected: boolean;
  logo: string;
}

const TeamCard = ({logo, name, isSelected}: TeamCardType) => {
  const theme = useTheme<Theme>();
  return (
    <Box
      marginBottom="m"
      marginHorizontal="s"
      padding="m"
      borderRadius="s"
      position="relative"
      flexDirection="row"
      backgroundColor="teamCard"
      justifyContent="space-between"
      alignItems="center">
      <Box flexDirection="row" alignItems="center">
        <Image source={logo} style={styles.teamImage} />
        <Text color="body" fontSize={16} marginLeft="m" textAlign="center">
          {name}
        </Text>
      </Box>

      <Feather
        name="check-circle"
        size={20}
        color={isSelected ? theme.colors.primary : theme.colors.bodyLight}
      />
    </Box>
  );
};

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
    <SafeAreaView style={{flex: 1}}>
      <Header name="Favorite Leagure" />
      <FlatList
        data={LEAGUE_DATA}
        contentContainerStyle={styles.flatListContainer}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <Text color="black" fontSize={18} marginBottom="l" textAlign="center">
            Select your Favourite League
          </Text>
        }
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item, index}) => {
          return (
            <TouchableOpacity
              onPress={() => selectTeam(item.id)}
              activeOpacity={0.9}>
              <TeamCard
                isSelected={selectedIds.includes(item.id)}
                key={index}
                {...item}
              />
            </TouchableOpacity>
          );
        }}
      />

      <Box position="absolute" bottom={30} width="100%" paddingHorizontal="m">
        <Button
          disabled={selectedIds.length === 0}
          variant={selectedIds.length === 0 ? 'disabled' : 'primary'}
          onPress={() => navigation.navigate('ChooseInterest')}
          label="Continue"
        />
      </Box>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  teamImage: {
    width: 25,
    height: 25,
  },
  flatListContainer: {
    paddingBottom: 150,
    paddingTop: 20,
  },
});

export default SelectTeam;
