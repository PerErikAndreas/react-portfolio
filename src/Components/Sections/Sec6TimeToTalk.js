// /////////////// IMPORTS //////////////////////// //

import React from 'react';
import styled from 'styled-components';
import AndreasImage from '../Images/AndreasImage.jpeg';
import { SectionTitle } from '../Styling/TextStyling';
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
      <h2>Andreas Axelsson</h2>
      <h2>Frontend developer</h2>
      <h3>+ background in retail</h3>
      <h3>and pedagogy</h3>
      <h3 className="contact">
            +46(0)702444938
            pererikandreas@gmail.com
      </h3>
    </Section>
  );
};