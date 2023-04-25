// /////////////// IMPORTS //////////////////////// //

import React from 'react';
import styled from 'styled-components';

// /////////////// STYLING //////////////////////// //

export const Section = styled.section`
background: yellow;
height: 40px;
color: #FFD93D;
text-align:center;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`;
// /////////////// COMPONENT //////////////////////// //

export const Sec4MyWords = () => {
  return (
    <Section>
      <h1>Sec4MyWords</h1>
    </Section>
  );
};