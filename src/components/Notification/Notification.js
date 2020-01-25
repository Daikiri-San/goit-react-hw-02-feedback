import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Text = styled.p`
  margin-left: 3rem;
  font-size: 2.4rem;
`;

function Notification({ message }) {
  return <Text>{message}</Text>;
}

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;
