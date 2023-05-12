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

export const SkillFrameStructure = styled.div`
  @media screen and (min-width: 668px) {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr; 
  gap: 90px;
  }

  @media screen and (min-width: 1024px) {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 0fr; 
  gap: 90px;
  margin-bottom: 50px;
  }
  `;

export const SkillFrame = styled.div`
  text-align: center;

  @media screen and (min-width: 668px) {
  text-align: left;
  }
  `;

// /////////////// COMPONENT //////////////////////// //

export const Sec5Skills = () => {
  return (
    <Section>
      <SectionTitle>Skills</SectionTitle>
      <SkillFrameStructure>
        <SkillFrame>
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
        </SkillFrame>
        <SkillFrame>
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
        </SkillFrame>
        <SkillFrame>
          <DarkBlueBackgroundText>More</DarkBlueBackgroundText>
          <ParagraphText>
            <List lang="en">
              <li lang="en">Agile methdology</li>
            </List>
          </ParagraphText>
        </SkillFrame>
        <SkillFrame>
          <GreenBackgroundText>Upcomming</GreenBackgroundText>
          <ParagraphText>
            <List lang="en">
              <li lang="en">Node.js</li>
              <li lang="en">React</li>
              <li lang="en">Redux</li>
            </List>
          </ParagraphText>
        </SkillFrame>
      </SkillFrameStructure>
    </Section>
  );
};