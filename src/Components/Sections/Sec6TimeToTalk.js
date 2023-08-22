// /////////////// IMPORTS //////////////////////// //

import React from 'react';
import styled, { keyframes } from 'styled-components';
import AndreasImage from '../Images/AndreasImage.jpeg';
import LinkedInIMG from '../Images/LinkedInIMG.svg';
import GitHubIMG from '../Images/GitHubIMG.svg';
import StackOverflowIMG from '../Images/StackOverflowIMG.svg';
import InstagramIMG from '../Images/InstagramIMG.svg';
import { ProfileAndInfoStructure, InfoStructure, ProfileImageStructure } from './Sec1Presentation';
import { SectionTitle2, JobTitleStyling, NameStyling, ParagraphText, PlusTextStyling } from '../Styling/TextStyling';
import { ProfileImage, Icons } from '../Styling/ImageStyling';

// //////////// SECTION SPECIFIC STYLING ///////////// //

export const Section = styled.section`
  background: #EEEEEE;
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
  margin: 60px 0 60px 0;
  `;

const wavyLineAnimation = keyframes`
  0% {
    transform: scaleX(1) translateX(0);
  }
  25% {
    transform: scaleX(1.5) translateX(-0px);
  }
  50% {
    transform: scaleX(1) translateX(0);
  }
  75% {
    transform: scaleX(0.5) translateX(10px);
  }
  100% {
    transform: scaleX(1) translateX(0);
  }
`;

export const Link = styled.a`
  position: relative;
  display: inline-block;
  color: blue;
  text-decoration: none;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 70%;
    height: 2px;
    background-color: blue;
    transform: scaleX(0); /* Start with no visible line */
    transform-origin: left;
    transition: transform 0.3s ease-in-out;
  }

  &:hover::after {
    transform: scaleX(1); /* Expand the line on hover */
    animation: ${wavyLineAnimation} 2s linear infinite; /* Add animation effect */
  }
`;

// /////////////// COMPONENT //////////////////////// //

export const Sec6TimeToTalk = () => {
  const email = 'pererikandreas@gmail.com';
  const phoneNumber = '+46(0)702444938';

  return (
    <Section>
      <SectionTitle2>Time to talk</SectionTitle2>
      <ProfileAndInfoStructure>
        <ProfileImageStructure>
          <ProfileImage src={AndreasImage} alt="Profile" />
        </ProfileImageStructure>
        <InfoStructure>
          <NameStyling>Andreas Axelsson</NameStyling>
          <JobTitleStyling>Frontend Developer</JobTitleStyling>
          <PlusTextStyling>+ background in retail and pedagogy
          </PlusTextStyling>
          <ParagraphText>
            <Link href={`tel:${phoneNumber}`}>{phoneNumber}</Link>
          </ParagraphText>
          <ParagraphText>
            <Link href={`mailto:${email}`}>{email}</Link>
          </ParagraphText>
        </InfoStructure>
      </ProfileAndInfoStructure>
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