// /////////////// IMPORTS //////////////////////// //

import React from 'react';
import styled from 'styled-components';
import { JobTitleStyling, NameStyling, ParagraphText, PlusTextStyling } from '../Styling/TextStyling';

// /////////////// STYLING //////////////////////// //

export const Section = styled.section`
background: pink;
height: 100vh;
color: #FFD93D;
text-align: left;
display: flex;
flex-direction: column;
justify-content: left;
padding: 24px;
`;

export const ProfileImage = styled.img`
  border-radius: 50%;
  width: 164px; 
  height: 164px;
  object-fit: cover;
`;

// /////////////// COMPONENT //////////////////////// //

export const Sec1Presentation = () => {
  return (
    <Section>
      <ProfileImage>
        <img
          src="./Images/profilepicture.jpeg"
          alt="Andreas Axelsson with guitar" />
      </ProfileImage>
      <div className="title">
        <NameStyling>Andreas Axelsson</NameStyling>
        <JobTitleStyling>Frontend Developer</JobTitleStyling>
        <PlusTextStyling>+ background in retail and an eye for digital design
        </PlusTextStyling>
      </div>
      <div className="aboutbox">
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
        <nav alt="linkbar" aria-label="linkbar">
          <ul className="linkbar">
            <li>
              <a href="https://www.linkedin.com/in/andreas-axelsson-042588253/" title="Link to Andreas Axelsson's LinkedIn profile" aria-label="Link to Andreas LinkedIn profile">
                <img src="./Images/linkedin.svg" alt="Linked-In icon" />
              </a>
            </li>
            <li>
              <a href="https://github.com/PerErikAndreas" title="Link to Andreas Axelsson's GitHub profile" aria-label="Link to Andreas GitHub profile">
                <img src="./Images/github.svg" alt="GitHub icon" />
              </a>
            </li>
            <li>
              <a href="https://stackoverflowteams.com/c/technigo/users/450/?tab=profile" title="Link to Andreas Axelsson's Stack-Overflow profile" aria-label="Link to Andreas Stack-Overflow">
                <img src="./Images/stack-overflow.svg" alt="Stack-Overflow icon" />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/pererikandreas/?hl=en" title="Link to Andreas Axelsson's Instagram profile" aria-label="Link to Andreas Instagram profile">
                <img src="./Images/instagram.svg" alt="Instagram icon" />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </Section>
  );
};