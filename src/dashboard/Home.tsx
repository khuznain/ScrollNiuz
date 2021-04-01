import * as React from 'react';
//
import Container from '../components/Container';
import Header from './components/Header';

export interface HomeProps {}

const Home: React.SFC<HomeProps> = () => {
  return (
    <Container>
      <Header title="Teams News" />
    </Container>
  );
};

export default Home;
