import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { Sec1Presentation } from 'Components/Sections/Sec1Presentation';
import { Sec2Tech } from 'Components/Sections/Sec2Tech';
import { Sec3FeaturedProjects } from 'Components/Sections/Sec3FeaturedProjects';
import { Sec4MyWords } from 'Components/Sections/Sec4MyWords';
import { Sec5Skills } from 'Components/Sections/Sec5Skills';
import { Sec6TimeToTalk } from 'Components/Sections/Sec6TimeToTalk';
import SatoshiBlackOTF from './Fonts/Satoshi/Fonts/OTF/Satoshi-Black.otf';
import SatoshiBoldOTF from './Fonts/Satoshi/Fonts/OTF/Satoshi-Bold.otf';
import SatoshiMediumOTF from './Fonts/Satoshi/Fonts/OTF/Satoshi-Medium.otf';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Satoshi';
    src: url(${SatoshiBlackOTF}) format('opentype'),
  }

  @font-face {
    font-family: 'Satoshi';
    src: url(${SatoshiBoldOTF}) format('opentype'),
  }

  @font-face {
    font-family: 'Satoshi';
    src: url(${SatoshiMediumOTF}) format('opentype'),
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
