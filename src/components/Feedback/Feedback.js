import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Section = styled.section`
  margin-bottom: 5rem;
`;

const Title = styled.h1`
  font-family: var(--secondary-font);
  font-size: 4rem;
  margin-bottom: 3rem;
`;

const Button = styled.button`
  font-size: 2rem;
  padding: 1rem;
  border-radius: 2rem;
  margin-left: 2rem;
  background-color: snow;

  &:hover,
  &:focus {
    background-color: #40c965;
    color: snow;
    border-color: #7a7a7a;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
    outline: none;
  }

  &:active {
    background-color: green;
  }
`;

const BUTTON_TYPE = {
  good: 'good',
  neutral: 'neutral',
  bad: 'bad',
};

function Feedback({ cb }) {
  const { good, neutral, bad } = BUTTON_TYPE;
  return (
    <Section>
      <Title>Please leave feedback</Title>
      <Button type="button" onClick={() => cb(good)}>
        Good
      </Button>
      <Button type="button" onClick={() => cb(neutral)}>
        Neutral
      </Button>
      <Button type="button" onClick={() => cb(bad)}>
        Bad
      </Button>
    </Section>
  );
}

Feedback.propTypes = {
  cb: PropTypes.func.isRequired,
};

export default Feedback;
