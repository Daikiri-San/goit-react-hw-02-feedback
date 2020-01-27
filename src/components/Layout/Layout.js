import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  margin: 8rem;
  max-width: 80rem;
`;

const Title = styled.h1`
  display: inline-block;
  width: 0.01rem;
  height: 00.1rem;
  opacity: 0;
  font-size: 0.01rem;
`;

const Layout = ({ children }) => (
  <Container>
    <Title>Feedback</Title>
    {children}
  </Container>
);

export default Layout;
