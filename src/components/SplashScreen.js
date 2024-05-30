import React from 'react';
import styled from 'styled-components';
import logo from '../assets/logo.png';

const SplashScreenContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #121212;
`;

const Logo = styled.img`
  width: 150px;
  height: 150px;
`;

const SplashScreen = () => {
  return (
    <SplashScreenContainer>
      <Logo src={logo} alt="Royal Straight Poker" />
    </SplashScreenContainer>
  );
};

export default SplashScreen;