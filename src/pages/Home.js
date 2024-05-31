import React from 'react';
import Navbar from '../components/Navbar';
import styled from 'styled-components';

const HomeContainer = styled.div`
  padding: 20px;
  text-align: center;
`;

const Home = () => {
  return (
    <HomeContainer>
      <Navbar />
      <h1>Home</h1>
    </HomeContainer>
  );
};

export default Home;
