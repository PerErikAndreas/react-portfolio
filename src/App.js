import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { Sec1Presentation } from 'Components/Sections/Sec1Presentation';
import { Sec2Tech } from 'Components/Sections/Sec2Tech';
import { Sec3FeaturedProjects } from 'Components/Sections/Sec3FeaturedProjects';
import { Sec4MyWords } from 'Components/Sections/Sec4MyWords';
import { Sec5Skills } from 'Components/Sections/Sec5Skills';
import { Sec6TimeToTalk } from 'Components/Sections/Sec6TimeToTalk';
import SatoshiWoff from './fonts/Satoshi/Fonts/WEB/fonts/Satoshi-Black.woff';
import SatoshiWoff2 from './fonts/Satoshi/Fonts/WEB/fonts/Satoshi-Black.woff2';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Satoshi';
    src: url(${SatoshiWoff2}) format('woff2'),
         url(${SatoshiWoff}) format('woff');
  }
`;

export const App = () => {
  return (
    <div>
      <GlobalStyle />
      <Sec1Presentation />
      <Sec2Tech />
      <Sec3FeaturedProjects />
      <Sec4MyWords />
      <Sec5Skills />
      <Sec6TimeToTalk />
    </div>
  )
}
