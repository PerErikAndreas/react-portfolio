// /////////////// IMPORTS //////////////////////// //

import React from 'react';
import styled from 'styled-components';
import { ParagraphText, SectionTitle } from '../Styling/TextStyling';

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
      <h6 className="pinkbackground">Code</h6>
      <ParagraphText>
                    HTML 5
                    CSS3
                    Javascript ES6
                    GitHub
                    React
      </ParagraphText>
      <h6 className="lightbluebackground">Toolbox</h6>
      <ParagraphText>
                    Adobe Photoshop
                    Adobe Illustrator
                    Figma
                    Slack
                    Postman
      </ParagraphText>
      <h6 className="bluebackground">More</h6>
      <ParagraphText>
                    Agile methdology
      </ParagraphText>
      <h6 className="lightgreenbackground">Upcomming</h6>
      <ParagraphText>
                    Node.js
                    React
                    Redux
      </ParagraphText>
    </Section>
  );
};