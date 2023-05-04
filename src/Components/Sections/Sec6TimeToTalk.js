// /////////////// IMPORTS //////////////////////// //

import React from 'react';
import styled from 'styled-components';
import AndreasImage from '../Images/AndreasImage.jpeg';
import { SectionTitle, JobTitleStyling, NameStyling, ParagraphText, PlusTextStyling } from '../Styling/TextStyling';
import { ProfileImage } from '../Styling/ImageStyling';

// //////////// SECTION SPECIFIC STYLING ///////////// //

export const Section = styled.section`
background: lightseagreen;
height: 100%;
color: #FFD93D;
text-align:center;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`;

// /////////////// COMPONENT //////////////////////// //

export const Sec6TimeToTalk = () => {
  return (
    <Section>
      <SectionTitle>Time to talk</SectionTitle>
      <ProfileImage src={AndreasImage} alt="Profile" />
      <NameStyling>Andreas Axelsson</NameStyling>
      <JobTitleStyling>Frontend developer</JobTitleStyling>
      <PlusTextStyling>+ background in retail</PlusTextStyling>
      <PlusTextStyling>and pedagogy</PlusTextStyling>
      <ParagraphText>
            +46(0)702444938
            pererikandreas@gmail.com
      </ParagraphText>
    </Section>
  );
};