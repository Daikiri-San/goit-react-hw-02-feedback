import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Notification from '../Notification';
import Statistic from '../Statistic';

const Section = styled.section`
  margin-bottom: 5rem;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h2`
  font-family: var(--secondary-font);
  font-size: 4rem;
  margin-bottom: 3rem;
`;

function Statistics({ good, neutral, bad, total, positivePercentage }) {
  return (
    <Section>
      <Title>Statistics</Title>
      {total <= 0 ? (
        <Notification message="No feedback given" />
      ) : (
        <>
          {' '}
          <Statistic label="Good" value={good} />
          <Statistic label="Neutral" value={neutral} />
          <Statistic label="Bad" value={bad} />
          <Statistic label="Total" value={total} />
          <Statistic
            label="Positive feedback"
            value={`${positivePercentage}%`}
          />
        </>
      )}
    </Section>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
