// /////////////// IMPORTS //////////////////////// //

import React from 'react';
import styled from 'styled-components';
import { ParagraphText, SectionTitle, BlueBackgroundText, DarkBlueBackgroundText, PinkBackgroundText } from '../Styling/TextStyling';

// //////////// SECTION SPECIFIC STYLING ///////////// //

export const Section = styled.section`
background: lightblue;
height: 100%;
color: yellow;
text-align: left;
display: flex;
flex-direction: column;
justify-content: left;
padding: 24px;
`;

// /////////////// COMPONENT //////////////////////// //

export const Sec2Tech = () => {
  return (
    <Section>
      <SectionTitle>Tech</SectionTitle>
      <div className="thingsiknow">
        <ParagraphText>
            HTML, CSS, Flexbox,<PinkBackgroundText>JavaScript,</PinkBackgroundText> ES6, JSX, React,
            React Hooks, Redux, Node.js, Mongo DB, Web Accessibly,
            API:s, <DarkBlueBackgroundText>mob-programming,</DarkBlueBackgroundText> React,
            pair-programming, <BlueBackgroundText>Github.</BlueBackgroundText>
        </ParagraphText>
      </div>
    </Section>
  );
};