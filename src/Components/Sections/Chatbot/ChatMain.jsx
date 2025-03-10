/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
// //////////////////////////////////////////////////////////////////////// //
// /////////////////////////////// IMPORTS //////////////////////////////// //
// //////////////////////////////////////////////////////////////////////// //

import React, { useState, useEffect } from 'react';
import { OpenAI } from 'openai'; // Importera OpenAI från SDK
import { ChatOutput } from './ChatOutput';
import { ChatInput } from './ChatInput';
import { API_URL } from './utils/urls'; // Import the "API_URL" constant from the "utils/urls" module
import { Loader } from './Loader';
import File from './AssistantsData/VacationPolicy.json';
import GPT from './AssistantsData/GPT.json';
import WeatherAssistantInfo from './AssistantsData/Weather.json';
import './Styling/ChatMain.sass'
import clean from './assets/clean2.png';
import downarrowimg from './assets/downarrow.png';

const apiKey = process.env.REACT_APP_OPENAI_API_KEY;

// //////////////////////////////////////////////////////////////////////// //
// ////////////////////////////////// APP ///////////////////////////////// //
// //////////////////////////////////////////////////////////////////////// //

export const ChatMain = () => {
  const [isMinimized, setMinimized] = useState(true);
  const [message, setMessage] = useState([]);
  const [loading, setLoading] = useState(false);
  const [instructions, setInstructions] = useState('File');
  const [selectedOption, setSelectedOption] = useState('File');

  // //////////////////////////////////////////////////////////////////////// //
  // ////////////////////////////////// AI KEY ////////////////////////////// //
  // //////////////////////////////////////////////////////////////////////// //

  // eslint-disable-next-line global-require

  const openai = new OpenAI({
    apiKey: process.env.REACT_APP_OPENAI_API_KEY, // Se till att API-nyckeln är korrekt
    dangerouslyAllowBrowser: true // Endast om du kör i webbläsaren
  });

  // //////////////////////////////////////////////////////////////////////// //
  // ////////////////////////////// USE-EFFECT ////////////////////////////// //
  // //////////////////////////////////////////////////////////////////////// //

  useEffect(() => {
  // console.log('isMinimized:', isMinimized);
  }, [isMinimized]);

  // //////////////////////////////////////////////////////////////////////// //
  // ////////////////////////////// OPEN AI ///////////////////////////////// //
  // //////////////////////////////////////////////////////////////////////// //
  const ResponseGenerate = async (inputText, setInputText) => {
    setLoading(true);

    try {
      // 1️Skapa en tråd (thread)
      const thread = await openai.beta.threads.create();

      // 2️ Skapa ett meddelande i tråden
      await openai.beta.threads.messages.create(thread.id, {
        role: 'user',
        content: inputText
      });

      // 3️Skapa en körning (run) för assistenten
      const run = await openai.beta.threads.runs.create(thread.id, {
        assistant_id: 'asst_qcT4FkzCIC0XcPBLZEyTP519', // Ersätt med ditt ID
        instructions
      });

      // 4️Vänta på att körningen ska bli klar
      let runStatus;
      do {
        // eslint-disable-next-line no-await-in-loop, no-promise-executor-return
        await new Promise((resolve) => setTimeout(resolve, 2000));
        // eslint-disable-next-line no-await-in-loop
        runStatus = await openai.beta.threads.runs.retrieve(thread.id, run.id);
      } while (runStatus.status !== 'completed');

      // 5️Hämta svaret från assistenten
      const messages = await openai.beta.threads.messages.list(thread.id);

      if (messages.data.length > 0) {
        const str = messages.data[0].content[0].text.value;
        const newMessage = { question: inputText, answer: str, threadId: thread.id };
        setMessage([...message, newMessage]);
        setInputText('');
      }
    } catch (error) {
      console.error('Error generating response:', error);
    }

    setLoading(false);
  };

  // //////////////////////////////////////////////////////////////////////// //
  // ////////////////////////// CLEAR CHAT ////////////////////////////////// //
  // //////////////////////////////////////////////////////////////////////// //

  const clearChat = () => {
    setMessage([]);
  };

  // //////////////////////////////////////////////////////////////////////// //
  // ////////////////////////// HANDLE ASSISTANT PICK /////////////////////// //
  // //////////////////////////////////////////////////////////////////////// //

  const handleSelectChange = async (selectedOption) => {
    if (selectedOption === 'Weather') {
      setSelectedOption(selectedOption);
      try {
        const response = await fetch('http://api.openweathermap.org/data/2.5/weather?q=Ostersund,Sweden&units=metric&APPID=efd0845f5916e3c871d91fde63e9b949');

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const json = await response.json();
        const weather = json.weather[0].description;
        const moreWeather = json.name;
        const customMessage = `${WeatherAssistantInfo.instructions} "Here is the weather in Östersund today: ${weather} Here is the name of the city:" ${moreWeather}`;

        setInstructions(customMessage);
      } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
      }
    } else if (selectedOption === 'GPT') {
      setSelectedOption(selectedOption);
      setInstructions(GPT.instructions);
    } else if (selectedOption === 'File') {
      setSelectedOption(selectedOption);
      setInstructions(File.instructions);
    }
    // console.log('Instructions:', instructions);
  };

  // //////////////////////////////////////////////////////////////////////// //
  // ////////////////////////// TOGGLE CHAT BOT ///////////////////////////// //
  // //////////////////////////////////////////////////////////////////////// //

  const toggleChatBot = () => {
    setMinimized((prevState) => {
      // console.log('isMinimized:', !prevState);
      return !prevState;
    });
  };

  // //////////////////////////////////////////////////////////////////////// //
  // /////////////////////////////// RETURN ///////////////////////////////// //
  // //////////////////////////////////////////////////////////////////////// //

  return (
    <div className="OuterWrapper">
      <button className={`ToggleBtn ${isMinimized ? 'minimized' : ''}`} type="button" onClick={toggleChatBot}>
        <img src={downarrowimg} alt="gtp-img" className="downarrowimg" />
      </button>
      <div className="ai-here">
        <p>AI portfolio chatbot!</p>
      </div>
      <div className={`chat-bot-container ${isMinimized ? 'minimized' : ''}`}>
        <div className="App">
          <div className="sideField">
            <div className="upperSideField">
              <div className="upperSideFieldTop">
                <div className="upperSideFieldBottom" />
              </div>
            </div>
          </div>
          <div className="mainField">
            {message.length === 0 ? (
              <div className="chatContainer">
                <div className="conversation__greetingcontainer">
                  <div className="conversation__greeting" />
                  <div className="greetings-subtext-container">
                    <p className="greetings-subsubtext">Chat with the bot I&apos;ve created</p>
                    <p className="greetings-subsubtext">about my developer skills!</p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="chatContainer">
                <ChatOutput messages={message} />
              </div>
            )}
            <div className="chatFooter">
              <div className="chatFooterright">
                <button className="cleanbtn" type="button" onClick={clearChat} disabled={message.length === 0}>
                  <img src={clean} alt="gtp-img" className="icons3" />
                </button>
              </div>
              <div className="input">
                {loading && (<div className="loader2"><Loader /></div>)}
                <ChatInput responseGenerate={ResponseGenerate} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};