// /////////////// IMPORTS //////////////////////// //

import React from 'react';
import styled from 'styled-components';
import { ParagraphText, SectionTitle, BlueBackgroundText, DarkBlueBackgroundText, PinkBackgroundText, GreenBackgroundText } from '../Styling/TextStyling';

// //////////// SECTION SPECIFIC STYLING ///////////// //

export const Section = styled.section`
background: sandybrown;
height: 100%;
color: #FFD93D;
text-align:center;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`;
// /////////////// COMPONENT //////////////////////// //

export const Sec5Skills = () => {
  return (
    <Section>
      <SectionTitle>Skills</SectionTitle>
      <PinkBackgroundText>Code</PinkBackgroundText>
      <ParagraphText>
          HTML 5
          CSS3
          Javascript ES6
          GitHub
          React
      </ParagraphText>
      <BlueBackgroundText>Toolbox</BlueBackgroundText>
      <ParagraphText>
          Adobe Photoshop
          Adobe Illustrator
          Figma
          Slack
          Postman
      </ParagraphText>
      <DarkBlueBackgroundText>More</DarkBlueBackgroundText>
      <ParagraphText>
          Agile methdology
      </ParagraphText>
      <GreenBackgroundText>Upcomming</GreenBackgroundText>
      <ParagraphText>
          Node.js
          React
          Redux
      </ParagraphText>
    </Section>
  );
};