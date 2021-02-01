import React from 'react';

import Container from '../components/Container';
import Interest from './components/Interest';
import {CHOOSE_LEAGUE, CHOOSE_STADIUM} from '../utils/data';
import {Header} from '../components';

const ChooseInterest = () => {
  return (
    <Container>
      <Header name="Choose Your interest" />
      <Interest sectionName="League" listData={CHOOSE_LEAGUE} />
      <Interest sectionName="Stadium" listData={CHOOSE_STADIUM} />
    </Container>
  );
};

export default ChooseInterest;
