import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { Sec1Presentation } from 'Components/Sections/Sec1Presentation';
import { Sec2Tech } from 'Components/Sections/Sec2Tech';
import { Sec3FeaturedProjects } from 'Components/Sections/Sec3FeaturedProjects';
import { Sec4MyWords } from 'Components/Sections/Sec4MyWords';
import { Sec5Skills } from 'Components/Sections/Sec5Skills';
import { Sec6TimeToTalk } from 'Components/Sections/Sec6TimeToTalk';
import SatoshiBlackWoff from './Fonts/Satoshi/Fonts/WEB/fonts/Satoshi-Black.woff';
import SatoshiBlackWoff2 from './Fonts/Satoshi/Fonts/WEB/fonts/Satoshi-Black.woff2';
import SatoshiBoldWoff from './Fonts/Satoshi/Fonts/WEB/fonts/Satoshi-Bold.woff';
import SatoshiBoldWoff2 from './Fonts/Satoshi/Fonts/WEB/fonts/Satoshi-Bold.woff2';
import SatoshiMediumWoff from './Fonts/Satoshi/Fonts/WEB/fonts/Satoshi-Medium.woff';
import SatoshiMediumWoff2 from './Fonts/Satoshi/Fonts/WEB/fonts/Satoshi-Medium.woff2';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Satoshi';
    src: url(${SatoshiBlackWoff}) format('woff2'),
         url(${SatoshiBlackWoff2}) format('woff');
  }

  @font-face {
    font-family: 'Satoshi';
    src: url(${SatoshiBoldWoff}) format('woff2'),
         url(${SatoshiBoldWoff2}) format('woff');
  }

  @font-face {
    font-family: 'Satoshi';
    src: url(${SatoshiMediumWoff}) format('woff2'),
         url(${SatoshiMediumWoff2}) format('woff');
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
