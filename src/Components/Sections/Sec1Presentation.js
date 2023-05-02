// /////////////// IMPORTS //////////////////////// //

import React from 'react';
import styled from 'styled-components';
import { JobTitleStyling, NameStyling, ParagraphText, PlusTextStyling } from '../Styling/TextStyling';
import { ProfileImage } from '../Styling/ImageStyling';
import AndreasImage from '../Images/AndreasImage.jpeg';

// //////////// SECTION SPECIFIC STYLING ///////////// //

export const Section = styled.section`
background: pink;
height: 100%;
color: #FFD93D;
text-align: left;
display: flex;
flex-direction: column;
justify-content: left;
padding: 24px;
`;

// /////////////// COMPONENT //////////////////////// //

export const Sec1Presentation = () => {
  return (
    <Section>
      <ProfileImage src={AndreasImage} alt="Profile" />
      <NameStyling>Andreas Axelsson</NameStyling>
      <JobTitleStyling>Frontend Developer</JobTitleStyling>
      <PlusTextStyling>+ background in retail and an eye for digital design
      </PlusTextStyling>
      <ParagraphText>
          Andreas has a background in retail, teaching,
          music and snowboarding and has therefor always
          needed to be creative, structured and goal-oriented.
          These skills has now made his way into
          programming maybe not easy but natural
          and pleasant. His work is always made with
          high responsibility and dedication,
          but also with character. Its as if he put his
          signature on every work, on every project.
      </ParagraphText>
    </Section>
  );
};