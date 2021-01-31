import React, {useState} from 'react';
import {
  FlatList,
  TouchableOpacity,
  Image,
  ImageBackground,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import {useTheme} from '@shopify/restyle';

import {Box, Text, Button, Header} from '../components';
import {Routes, StackNavigationProps} from '../navigation';
import {CHOOSE_LEAGUE, TEAM_DATA} from '../utils/data';
import {Theme} from '../components/theme';
import {flatListDataFormate} from '../utils/utils';

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
      marginBottom="s"
      marginHorizontal="s"
      overflow="hidden"
      height={150}
      position="relative"
      borderRadius="s"
      justifyContent="center"
      alignItems="center"
      opacity={0.5}
      backgroundColor="black">
      <Text color="white" fontSize={16} letterSpacing={0.6} textAlign="center">
        {name}
      </Text>

      <Box position="absolute" bottom={10} right={10}>
        <Feather
          name="check-circle"
          size={25}
          color={isSelected ? theme.colors.primary : theme.colors.bodyLight}
        />
      </Box>

      {/* <Image
        source={logo}
        resizeMode="cover"
        style={{width: '100%', height: '100%'}}
      /> */}
    </Box>
  );
};

const SectionHeader = () => (
  <Box
    backgroundColor="grey2"
    flexDirection="row"
    justifyContent="space-between"
    paddingHorizontal="m"
    margin="s"
    paddingVertical="m">
    <Text color="black" opacity={0.6} fontSize={18}>
      League
    </Text>
    <Box
      backgroundColor="primary"
      alignItems="center"
      justifyContent="center"
      borderRadius="xl"
      style={{paddingVertical: 5, paddingHorizontal: 10}}>
      <Text color="white" fontSize={18}>
        2
      </Text>
    </Box>
  </Box>
);

const numColumns = 3;

const ChooseInterest = ({
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
      <Header name="Choose Your interest" />
      <SectionHeader />
      <FlatList
        numColumns={3}
        contentContainerStyle={{paddingVertical: 10}}
        data={flatListDataFormate(CHOOSE_LEAGUE, numColumns)}
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
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  teamImage: {
    width: '100%',
    height: '100%',
  },
  teamCard: {
    flex: 1,
  },
});

export default ChooseInterest;
