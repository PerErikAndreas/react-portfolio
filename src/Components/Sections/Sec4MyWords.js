// /////////////// IMPORTS //////////////////////// //

import React from 'react';
import styled from 'styled-components';
import { ParagraphText, SectionTitle } from '../Styling/TextStyling';

// //////////// SECTION SPECIFIC STYLING ///////////// //

export const Section = styled.section`
background: yellow;
height: 100%;
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
      <SectionTitle>My Words</SectionTitle>
      <ParagraphText>
        Since I started my journey to become a developer, I came to a few
        realizations (And no, its not that a child-component also can be a
        parent in flexbox or that everything in javascript is objects),
        Its something more fundamental and personal.
        In this short article, I want to discuss the connection between
        coding and creativity and explain why I think that coding can be an
        inspirational and stimulating activity for creative individuals.
      </ParagraphText>
    </Section>

  );
};