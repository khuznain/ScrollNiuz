import React from 'react';

import Container from '../components/Container';
import Interest from './components/Interest';
import {Routes, StackNavigationProps} from '../navigation';
import {CHOOSE_LEAGUE, CHOOSE_STADIUM} from '../utils/data';
import {Box, Button, Header} from '../components';

const ChooseInterest = ({
  navigation,
}: StackNavigationProps<Routes, 'ChooseInterest'>) => {
  return (
    <Container>
      <Header name="Choose Your interest" />
      <Interest sectionName="League" listData={CHOOSE_LEAGUE} />
      <Interest sectionName="Stadium" listData={CHOOSE_STADIUM} />
      <Box position="absolute" bottom={30} width="100%" paddingHorizontal="m">
        <Button
          variant={'primary'}
          onPress={() => navigation.navigate('SelectChannel')}
          label="Continue"
        />
      </Box>
    </Container>
  );
};

export default ChooseInterest;
