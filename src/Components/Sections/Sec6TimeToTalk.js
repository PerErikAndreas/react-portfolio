// /////////////// IMPORTS //////////////////////// //

import React from 'react';
import styled from 'styled-components';
import AndreasImage from '../Images/AndreasImage.jpeg';
import LinkedInIMG from '../Images/LinkedIn.svg';
import GitHubIMG from '../Images/GitHubIMG.svg';
import StackOverflowIMG from '../Images/StackOverflowIMG.svg';
import InstagramIMG from '../Images/InstagramIMG.svg';
import { SectionTitle2, JobTitleStyling, NameStyling, ParagraphText, PlusTextStyling } from '../Styling/TextStyling';
import { ProfileImage, Icons } from '../Styling/ImageStyling';

// //////////// SECTION SPECIFIC STYLING ///////////// //

export const Section = styled.section`
background: #F5F5F5;
height: 100%;
color: #FFD93D;
text-align: left;
display: flex;
flex-direction: column;
justify-content: left;
padding: 24px;
`;

export const List = styled.ul`
  list-style-type: none;
  padding-left: 0;
  display: flex;
  justify-content: space-evenly;
  margin: 40px 0 30px 0;

`;
// /////////////// COMPONENT //////////////////////// //

export const Sec6TimeToTalk = () => {
  return (
    <Section>
      <SectionTitle2>Time to talk</SectionTitle2>
      <ProfileImage src={AndreasImage} alt="Profile" />
      <NameStyling>Andreas Axelsson</NameStyling>
      <JobTitleStyling>Frontend developer</JobTitleStyling>
      <PlusTextStyling>+ background in retail and pedagogy</PlusTextStyling>
      <ParagraphText>
            +46(0)702444938
            pererikandreas@gmail.com
      </ParagraphText>
      <nav aria-label="linkbar">
        <List>
          <li>
            <a href="https://www.linkedin.com/in/andreas-axelsson-042588253/" title="Link to Andreas Axelsson's LinkedIn profile" aria-label="Link to Andreas LinkedIn profile">
              <Icons src={LinkedInIMG} alt="Linked-In icon" />
            </a>
          </li>
          <li>
            <a href="https://github.com/PerErikAndreas" title="Link to Andreas Axelsson's GitHub profile" aria-label="Link to Andreas GitHub profile">
              <Icons src={GitHubIMG} alt="GitHub icon" />
            </a>
          </li>
          <li>
            <a href="https://stackoverflowteams.com/c/technigo/users/450/?tab=profile" title="Link to Andreas Axelsson's Stack-Overflow profile" aria-label="Link to Andreas Stack-Overflow">
              <Icons src={StackOverflowIMG} alt="Stack-Overflow icon" />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/pererikandreas/?hl=en" title="Link to Andreas Axelsson's Instagram profile" aria-label="Link to Andreas Instagram profile">
              <Icons src={InstagramIMG} alt="Instagram icon" />
            </a>
          </li>
        </List>
      </nav>
    </Section>
  );
};