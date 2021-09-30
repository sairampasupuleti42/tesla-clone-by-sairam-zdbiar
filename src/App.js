import React from 'react';
import Home from './components/Home';
import Header from './components/Header';
import styled from 'styled-components';
import './style.css';
export default function App() {
  return (
    <RootContainer>
      {<Header />}
      <Home />
    </RootContainer>
  );
}
const RootContainer = styled.div`
text-align:center;
`;
