// /////////////// IMPORTS //////////////////////// //

import React from 'react';
import styled from 'styled-components';
import { ParagraphText, SectionTitle, BlueBackgroundText, DarkBlueBackgroundText, PinkBackgroundText, GreenBackgroundText } from '../Styling/TextStyling';

// //////////// SECTION SPECIFIC STYLING ///////////// //

export const Section = styled.section`
background: #FDF2E4;
height: 100%;
color: #FFD93D;
text-align:center;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`;

export const List = styled.ul`
  list-style-type: none;
  padding-left: 0;
  margin: 18px 0 30px 0;
`;
// /////////////// COMPONENT //////////////////////// //

export const Sec5Skills = () => {
  return (
    <Section>
      <SectionTitle>Skills</SectionTitle>
      <PinkBackgroundText>Code</PinkBackgroundText>
      <ParagraphText>
        <List lang="en">
          <li lang="en">HTML 5</li>
          <li lang="en">CSS3</li>
          <li lang="en">Javascript ES6</li>
          <li lang="en">React</li>
          <li lang="en">JSX</li>
        </List>
      </ParagraphText>
      <BlueBackgroundText>Toolbox</BlueBackgroundText>
      <ParagraphText>
        <List lang="en">
          <li lang="en">Adobe Photoshop</li>
          <li lang="en">Adobe Illustrator</li>
          <li lang="en">Figma</li>
          <li lang="en">Slack</li>
          <li lang="en">Postman</li>
        </List>
      </ParagraphText>
      <DarkBlueBackgroundText>More</DarkBlueBackgroundText>
      <ParagraphText>
        <List lang="en">
          <li lang="en">Agile methdology</li>
        </List>
      </ParagraphText>
      <GreenBackgroundText>Upcomming</GreenBackgroundText>
      <ParagraphText>
        <List lang="en">
          <li lang="en">Node.js</li>
          <li lang="en">React</li>
          <li lang="en">Redux</li>
        </List>
      </ParagraphText>
    </Section>
  );
};