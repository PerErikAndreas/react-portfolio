// /////////////// IMPORTS //////////////////////// //

import React from 'react';
import styled from 'styled-components';
import { JobTitleStyling, NameStyling, ParagraphText, PlusTextStyling } from '../Styling/TextStyling';
import { ProfileImage, Icons, BackgroundImage } from '../Styling/ImageStyling';
import AndreasImage from '../Images/AndreasImage.jpeg';
import LinkedInIMG from '../Images/LinkedInIMG.svg';
import GitHubIMG from '../Images/GitHubIMG.svg';
import StackOverflowIMG from '../Images/StackOverflowIMG.svg';
import InstagramIMG from '../Images/InstagramIMG.svg';
import FamilyIMG from '../Images/FamilyIMG2.jpg';

// //////////// SECTION SPECIFIC STYLING ///////////// //

const Section1 = styled.section`
  background: #EEEEEE;
  height: 100%;
  color: #FFFFFF;
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: left;
  padding: 24px;

  @media screen and (min-width: 668px) {
  display: flex;
  padding: 0 0 25px 0;
  }

  @media screen and (min-width: 1024px) {
  display: flex;
  width: 100%;
  padding: 0;
  }
  `;

const SectionTabletPicture = styled.section`
  background: #EEEEEE;
  height: 100%;
  color: #FFD93D;
  text-align: left;
  flex-direction: column;
  justify-content: left;
  display: none;

  @media screen and (min-width: 668px) {
  display: block;
  }

  @media screen and (min-width: 1024px) {
  justify-content: flex-end;
  height: 100vh;
  }
  `;

const List = styled.ul`
  list-style-type: none;
  padding-left: 0;
  display: flex;
  justify-content: space-evenly;
  margin: 25px 0 30px 0;

  @media screen and (min-width: 668px) {
  justify-content: flex-start;
  padding-left: 10%;
  gap: 40px;
  }
  `;

export const ProfileImageStructure = styled.div`
  display: flex;
  justify-content: center;
  margin: 50px 0 30px 0;

  @media screen and (min-width: 668px) {
  margin: 20px 0 30px 0;
  }
  `;

export const InfoStructure = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 668px) {
  margin: 50px 0 0 10px;
  }
  `;

const ParagraphTextStructure = styled.div`
  @media screen and (min-width: 668px) {
  padding: 0 10% 5% 10%;
  }
  `;

export const ProfileAndInfoStructure = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 668px) {
  flex-direction: row;
  justify-content: center
  }
  `;

export const BigScreenStructure = styled.div`
  @media screen and (min-width: 1024px) {
  display: flex;
  flex-direction: row-reverse;
  }
  `;

const ProfileInfoParagraphTextStructure = styled.div`
  @media screen and (min-width: 668px) {
  flex-direction: column;
  margin-top: 40px;
  }

  @media screen and (min-width: 1024px) {
  margin-top: 10vh;
  }

  @media screen and (min-width: 1250px) {
  margin-top: 22vh;
  }

  @media screen and (min-width: 2250px) {
  margin-top: 32vh;
  }
  `;

// /////////////// COMPONENT //////////////////////// //

export const Sec1Presentation = () => {
  return (
    <Section1>
      <BigScreenStructure>
        <SectionTabletPicture>
          <BackgroundImage src={FamilyIMG} alt="Family" />
        </SectionTabletPicture>
        <ProfileInfoParagraphTextStructure>
          <ProfileAndInfoStructure>
            <ProfileImageStructure>
              <ProfileImage src={AndreasImage} alt="Profile" />
            </ProfileImageStructure>
            <InfoStructure>
              <NameStyling>Andreas Axelsson</NameStyling>
              <JobTitleStyling>Frontend Developer &</JobTitleStyling>
              <JobTitleStyling>Teacher</JobTitleStyling>
              <PlusTextStyling>+ background in retail</PlusTextStyling>
            </InfoStructure>
          </ProfileAndInfoStructure>
          <ParagraphTextStructure>
            <ParagraphText>
            Combining my expertise in web development,
            pedagogy and retail management, I bring a unique
            perspective into crafting user-centric experiences.
            In addition, I love great design and have an attention
            to detail. So, have a look at my creations below and let´s create together!
            </ParagraphText>
          </ParagraphTextStructure>
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
        </ProfileInfoParagraphTextStructure>
      </BigScreenStructure>
    </Section1>
  );
};