// //////////////////////////////////////////////////////////////////////// //
// //////////////////////////// IMPORTS /////////////////////////////////// //
// //////////////////////////////////////////////////////////////////////// //

import React, { useState } from 'react';
import sendButtonImg from './assets/sent.png'

// //////////////////////////////////////////////////////////////////////// //
// /////////////////////////// CHAT INPUT ///////////////////////////////// //
// //////////////////////////////////////////////////////////////////////// //

export const ChatInput = ({ responseGenerate }) => {
  const [message, setMessage] = useState('');

  const onFormSubmit = (e) => {
    e.preventDefault();
    responseGenerate(message, setMessage);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      onFormSubmit(e);
    }
  };

  // //////////////////////////////////////////////////////////////////////// //
  // /////////////////////////////// RETURN ///////////////////////////////// //
  // //////////////////////////////////////////////////////////////////////// //

  return (
    <div className="inputplusbutton">
      <textarea
        rows="2"
        type="text"
        className="input"
        placeholder="Hi! How can I help you?"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={handleKeyDown} />
      <br />
      <form onSubmit={onFormSubmit}>
        <button type="submit" className="sendButton">
          <img src={sendButtonImg} alt="send button" className="icons" />
        </button>
      </form>
    </div>
  );
};