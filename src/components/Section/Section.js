import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const FeedbackSection = styled.section`
  margin-bottom: 5rem;
`;

const Title = styled.h2`
  font-size: 4rem;
  margin-bottom: 3rem;
`;

function Section({ title, children }) {
  return (
    <FeedbackSection>
      <Title>{title}</Title>
      {children}
    </FeedbackSection>
  );
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.object,
};

export default Section;
