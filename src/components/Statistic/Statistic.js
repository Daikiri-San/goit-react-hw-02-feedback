import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Stats = styled.span`
  display: block;
  margin-left: 3rem;
  font-size: 2.4rem;
  margin-bottom: 1rem;

  &:last-of-type {
    margin-bottom: none;
  }
`;

function Statistic({ label, value }) {
  return (
    <Stats>
      {label}: {value}
    </Stats>
  );
}

Statistic.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

export default Statistic;
