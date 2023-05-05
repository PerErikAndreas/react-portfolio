// /////////////// IMPORTS //////////////////////// //

import styled from 'styled-components';

// ////////////// IMAGE STYLING /////////////// //

export const ProfileImage = styled.img`
  border-radius: 50%;
  width: 164px; 
  height: 164px;
  object-fit: cover;
  border: solid black 1px;
  `;

export const ProjectImage = styled.img`
  width: 100%; 
  height: auto;
  object-fit: cover;
  margin-top: 10px;
`;

export const Icons = styled.img`
  width: 32px;
  height: 32px;
  filter: invert(97%) sepia(1%) saturate(2529%) hue-rotate(235deg) brightness(109%) contrast(63%);

  &:hover {
    filter: invert(0%) sepia(8%) saturate(7500%) hue-rotate(355deg) brightness(103%) contrast(110%);
  }
`;

export const BackgroundImage = styled.img`
  width: 100%; 
  height: 520px; 
  object-fit: cover;
`;
