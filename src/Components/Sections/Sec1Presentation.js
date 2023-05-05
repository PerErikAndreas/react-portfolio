// /////////////// IMPORTS //////////////////////// //

import React from 'react';
import styled from 'styled-components';
import { JobTitleStyling, NameStyling, ParagraphText, PlusTextStyling } from '../Styling/TextStyling';
import { ProfileImage, Icons, BackgroundImage } from '../Styling/ImageStyling';
import AndreasImage from '../Images/AndreasImage.jpeg';
import LinkedInIMG from '../Images/LinkedIn.svg';
import GitHubIMG from '../Images/GitHubIMG.svg';
import StackOverflowIMG from '../Images/StackOverflowIMG.svg';
import InstagramIMG from '../Images/InstagramIMG.svg';
import FamilyIMG from '../Images/FamilyIMG.JPG';

// //////////// SECTION SPECIFIC STYLING ///////////// //

const Section = styled.section`
background: #F5F5F5;
height: 100%;
color: #FFD93D;
text-align: left;
display: flex;
flex-direction: column;
justify-content: left;
padding: 24px;
`;

const List = styled.ul`
  list-style-type: none;
  padding-left: 0;
  display: flex;
  justify-content: space-evenly;
  margin: 40px 0 30px 0;
`;

const ProfileImageStructure = styled.div`
  display: flex;
  justify-content: center;
`;

// /////////////// COMPONENT //////////////////////// //

export const Sec1Presentation = () => {
  return (
    <Section>
      <BackgroundImage src={FamilyIMG} alt="Family" />
      <ProfileImageStructure>
        <ProfileImage src={AndreasImage} alt="Profile" />
      </ProfileImageStructure>
      <NameStyling>Andreas Axelsson</NameStyling>
      <JobTitleStyling>Frontend Developer</JobTitleStyling>
      <PlusTextStyling>+ background in retail and pedagogy
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