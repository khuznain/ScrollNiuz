import React, {useState} from 'react';
import {FlatList, TouchableOpacity, Image, StyleSheet} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import {useTheme} from '@shopify/restyle';

import {flatListDataFormate} from '../../utils/utils';
import Container from '../../components/Container';
import {Box, Text, Header} from '../../components';
import {Theme} from '../../components/theme';

interface ItemType {
  name: string;
  isSelected: boolean;
  logo: string;
}

const Item = ({logo, name, isSelected}: ItemType) => {
  const theme = useTheme<Theme>();
  return (
    <Box
      flex={1}
      marginBottom="s"
      marginHorizontal="s"
      overflow="hidden"
      borderRadius="s"
      position="relative"
      justifyContent="center"
      alignItems="center"
      height={140}
      opacity={0.9}>
      <Box flex={1} style={StyleSheet.absoluteFill}>
        <Image source={logo} resizeMode="cover" style={styles.image} />
      </Box>

      <Text color="white" fontSize={18} letterSpacing={0.2} textAlign="center">
        {name}
      </Text>

      <Box position="absolute" bottom={15} right={12}>
        <Feather
          name="check-circle"
          size={25}
          color={isSelected ? '#3FECE0' : theme.colors.borderBlack}
        />
      </Box>
    </Box>
  );
};

export interface SectionHeaderProps {
  name?: string;
  count?: number;
}

const SectionHeader = ({name, count}: SectionHeaderProps) => (
  <Box
    backgroundColor="grey2"
    flexDirection="row"
    justifyContent="space-between"
    paddingHorizontal="m"
    // margin="s"
    marginHorizontal="s"
    marginTop="m"
    paddingVertical="s">
    <Text color="black" opacity={0.6} fontSize={18}>
      {name}
    </Text>
    <Box
      backgroundColor="primary"
      alignItems="center"
      justifyContent="center"
      borderRadius="xl"
      style={styles.count}>
      <Text color="white" fontSize={18}>
        {count}
      </Text>
    </Box>
  </Box>
);

const numColumns = 3;

const Interest = ({listData, sectionName}) => {
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
    <Box>
      <SectionHeader name={sectionName} count={selectedIds.length} />
      <FlatList
        numColumns={3}
        contentContainerStyle={styles.contentContainer}
        data={flatListDataFormate(listData, numColumns)}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item, index}) => {
          return (
            <TouchableOpacity
              onPress={() => selectTeam(item.id)}
              activeOpacity={0.9}
              style={styles.teamCard}>
              <Item
                isSelected={selectedIds.includes(item.id)}
                key={index}
                {...item}
              />
            </TouchableOpacity>
          );
        }}
      />
    </Box>
  );
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: '100%',
  },
  contentContainer: {
    paddingTop: 10,
  },
  teamCard: {
    flex: 1,
  },
  count: {
    paddingVertical: 3,
    paddingHorizontal: 10,
  },
});

export default Interest;
