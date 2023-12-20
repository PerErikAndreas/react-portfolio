import React from 'react';
import { ChatMain } from 'Components/Sections/Chatbot/ChatMain';
import { Sec1Presentation } from 'Components/Sections/Sec1Presentation';
import { Sec2Tech } from 'Components/Sections/Sec2Tech';
import { Sec3FeaturedProjects } from 'Components/Sections/Sec3FeaturedProjects';
import { Sec4MyWords } from 'Components/Sections/Sec4MyWords';
import { Sec5Skills } from 'Components/Sections/Sec5Skills';
import { Sec6TimeToTalk } from 'Components/Sections/Sec6TimeToTalk';

export const App = () => {
  return (
    <div>
      <ChatMain />
      <Sec1Presentation />
      <Sec2Tech />
      <Sec3FeaturedProjects />
      <Sec4MyWords />
      <Sec5Skills />
      <Sec6TimeToTalk />
    </div>
  )
}
