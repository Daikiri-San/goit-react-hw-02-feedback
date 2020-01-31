import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Button = styled.button`
  text-transform: capitalize;
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

function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <>
      {options.map(type => (
        <Button key={type} type="button" onClick={() => onLeaveFeedback(type)}>
          {type}
        </Button>
      ))}
    </>
  );
}

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
