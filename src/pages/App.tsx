import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import logo from 'assets/img/logo.svg';

const AppLogoSpinAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Container = styled.div`
  text-align: center;
`;

const Header = styled.header`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

const AppLogo = styled.img`
  animation: ${AppLogoSpinAnimation} 20s linear;
  height: 40vmin;
`;

const AppLink = styled.a`
  color: #61dafb;
`;

class App extends Component {
  render() {
    return (
      <Container>
        <Header>
          <AppLogo src={logo} alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <AppLink
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </AppLink>
        </Header>
      </Container>
    );
  }
}

export default App;
