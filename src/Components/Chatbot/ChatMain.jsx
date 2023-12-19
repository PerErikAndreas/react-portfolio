// // //////////////////////////////////////////////////////////////////////// //
// // /////////////////////////////// IMPORTS //////////////////////////////// //
// // //////////////////////////////////////////////////////////////////////// //

// import React, { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { thoughts } from '../reducers/thoughts';
// import { useNavigate } from "react-router-dom"; // Import required modules from React Router
// import { ChatOutput } from '../Components/ChatOutput';
// import { ChatInput } from '../Components/ChatInput';
// import { user } from "../reducers/users"; // Import the "user" reducer from the "reducers" folder
// import { API_URL } from "../utils/urls"; // Import the "API_URL" constant from the "utils/urls" module
// import { Loader } from './Loader';
// import File from './../AssistantsData/VacationPolicy.json';
// import GPT from './../AssistantsData/GPT.json';
// import WeatherAssistantInfo from './../AssistantsData/Weather.json';
// import '../../src/Styling/App.sass'
// import logout from '../assets/logout.png';
// import clean from '../assets/clean2.png';
// import arrow from '../assets/arrow.png';
// import downarrowimg from '../assets/downarrow.png';

// const apiKey = process.env.REACT_APP_OPENAI_API_KEY;

// // //////////////////////////////////////////////////////////////////////// //
// // ////////////////////////////////// APP ///////////////////////////////// //
// // //////////////////////////////////////////////////////////////////////// //

// export const ChatMain = () => {
//   const [isMinimized, setMinimized] = useState(true);
//   const [message, setMessage] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [instructions, setInstructions] = useState("File");
//   const [selectedOption, setSelectedOption] = useState("File");
//   const navigate = useNavigate(); // Access the navigation function from React Router
//   const accessToken = useSelector((store) => store.user.accessToken); // Access the "accessToken" value from the Redux store
//   const username = useSelector((store) => store.user.username); // Access the "username" value from the Redux store
//   const dispatch = useDispatch(); // Here we use the dispatch function to dispatch actions.
//   const thoughtItems = useSelector((store) => store.reducersThoughts.items);

// // //////////////////////////////////////////////////////////////////////// //
// // ////////////////////////////////// AI KEY ////////////////////////////// //
// // //////////////////////////////////////////////////////////////////////// //

//   const OpenAI = require("openai");
//   const openai = new OpenAI({
//     apiKey: apiKey,
//     dangerouslyAllowBrowser: true
//   });

// // //////////////////////////////////////////////////////////////////////// //
// // ////////////////////////////// USE-EFFECT ////////////////////////////// //
// // //////////////////////////////////////////////////////////////////////// //

// useEffect(() => {
//   // Perform an action when the component mounts or when the "accessToken" value changes
//   if (!accessToken) {
//       navigate("/"); // Navigate to the login page if the user is not logged in
//   }
// }, [accessToken]);

// useEffect(() => {
//   // console.log('isMinimized:', isMinimized);
// }, [isMinimized]);

// // //////////////////////////////////////////////////////////////////////// //
// // ////////////////////////////// OPEN AI ///////////////////////////////// //
// // //////////////////////////////////////////////////////////////////////// //

// const ResponseGenerate = async (inputText, setInputText) => {
//   setLoading(true); // Set loading to true if no message, false if there is a message
//   // HERE IS THE ASSISTANT //
//   const assistant = await openai.beta.assistants.retrieve( //
//     "asst_l2gKq13jpcgo5a701XZUPeNi"
//   );

//   // CREATING THE THREAD //
//   const thread = await openai.beta.threads.create();

//   // CREATING THE MESSAGE //
//   const message1 = await openai.beta.threads.messages.create(
//     thread.id,
//     {
//       role: "user",
//       content: `${inputText}`
//     },
//   );
  
//   // CREATING THE RUN //
//   const run = await openai.beta.threads.runs.create(
//     thread.id,
//     { 
//       assistant_id: assistant.id,
//       instructions: `${instructions}`,
//     } 
//   );

//   // VIEW THE RUN //
//   let runStatus = await openai.beta.threads.runs.retrieve(
//     thread.id,
//     run.id
//   );

//   // CHECK IS RUNSTATUS = COMPLETED //
//   while (runStatus.status !== "completed") {
//     runStatus = await openai.beta.threads.runs.retrieve(thread.id, run.id);
//     await new Promise((resolve) => setTimeout(resolve, 2000));
//   }
  
//   // GET THE ASSISTANTS RESPONSE //
//   const messages = await openai.beta.threads.messages.list(
//     thread.id,
//     assistant.id,
//     { 
//       assistant_id: assistant.id,
//     } 
//   );

//   let str = messages.data[0].content[0].text.value;

//   if (str) {
//     const newMessage = { question: inputText, answer: str, threadId: thread.id };
//     setMessage([...message, newMessage]);
//     dispatch(thoughts.actions.setItems([...thoughtItems, newMessage]));
//     setInputText('');
//   }
//   setLoading(false);
// };

//   // //////////////////////////////////////////////////////////////////////// //
//   // ////////////////////////// CLEAR CHAT ////////////////////////////////// //
//   // //////////////////////////////////////////////////////////////////////// //

//   const clearChat = () => {
//     setMessage([]);
//     dispatch(thoughts.actions.setItems([]));
// };

//   // //////////////////////////////////////////////////////////////////////// //
//   // /////////////////////////////// LOGOUT ///////////////////////////////// //
//   // //////////////////////////////////////////////////////////////////////// //

//   const onLogoutButtonClick = () => {
//     // Perform an action when the logout button is clicked
//     dispatch(user.actions.setAccessToken(null)); // Clear the "accessToken" value in the Redux store
//     dispatch(user.actions.setUsername(null)); // Clear the "username" value in the Redux store
//     dispatch(user.actions.setUserId(null)); // Clear the "userId" value in the Redux store
//     dispatch(user.actions.setError(null)); // Clear any previous error in the Redux store
// };

//   // //////////////////////////////////////////////////////////////////////// //
//   // ////////////////////////// HANDLE ASSISTANT PICK /////////////////////// //
//   // //////////////////////////////////////////////////////////////////////// //

//   const handleSelectChange = async (selectedOption) => {
//     if (selectedOption === "Weather") {
//       setSelectedOption(selectedOption);
//       try {
//         const response = await fetch('http://api.openweathermap.org/data/2.5/weather?q=Ostersund,Sweden&units=metric&APPID=efd0845f5916e3c871d91fde63e9b949');
        
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
  
//         const json = await response.json();
//         const weather = json.weather[0].description;
//         // console.log(json.weather[0]); // Add this line to check the value of json.weather[0].description
//         const moreWeather = json.name;
//         const customMessage = `${WeatherAssistantInfo.instructions} "Here is the weather in Östersund today: ${weather} Here is the name of the city:" ${moreWeather}`;

//         setInstructions(customMessage);
//       } catch (error) {
//         console.error('There was a problem with the fetch operation:', error);
//       }
//     } else if (selectedOption === "GPT") {
//       setSelectedOption(selectedOption);
//       setInstructions(GPT.instructions);

//     } else if (selectedOption === "File") {
//       setSelectedOption(selectedOption);
//       setInstructions(File.instructions);
//     }
//     // console.log('Instructions:', instructions); // Add this line to check the value of instructions
//   };

//   // //////////////////////////////////////////////////////////////////////// //
//   // ////////////////////////// TOGGLE CHAT BOT ///////////////////////////// //
//   // //////////////////////////////////////////////////////////////////////// //

//   const toggleChatBot = () => {
//     setMinimized((prevState) => {
//       // console.log('isMinimized:', !prevState);
//       return !prevState;
//     });
//   };
  
//   // //////////////////////////////////////////////////////////////////////// //
//   // /////////////////////////////// RETURN ///////////////////////////////// //
//   // //////////////////////////////////////////////////////////////////////// //

//   return (
//     <div className="OuterWrapper">
//               <button className="SignoutBtn" onClick={onLogoutButtonClick}>
//           <img src={logout} alt="gtp-img" className="signoutimg" />
//         </button>
//         <button className={`ToggleBtn ${isMinimized ? 'minimized' : ''}`} onClick={toggleChatBot}>
//     <img src={downarrowimg} alt="gtp-img" className="downarrowimg" />
//   </button>
//   <div className="ai-here">
//     <p>AI here!</p>
//   </div>
//   <img src={arrow} alt="gtp-img" className="arrowStartpage" />
//         <div className={`chat-bot-container ${isMinimized ? 'minimized' : ''}`}>
//       <div className="App">
//         <div className="sideField">
//           <div className="upperSideField">
//             <div className="upperSideFieldTop">
//               {/* <img src={mbpLogo} alt="logo" className="mbp-logo" /> */}
//               <div className="upperSideFieldBottom">
//               </div>
//             </div>
//           </div>
//           <div className="lowerSideField">
//             <div className="linkItems">
//               <div className="linkPair1">
//                 <button
//                   className={`assistantsButton2 ${selectedOption === "File" ? "active" : ""}`}
//                   onClick={() => handleSelectChange("File")}>
//                   AI Portfolio Assist.
//                 </button>
//                 {/* <button
//                   className={`assistantsButton2 ${selectedOption === "Weather" ? "active" : ""}`}
//                   onClick={() => handleSelectChange("Weather")}>
//                   API Assistant
//                 </button> */}
//               </div>
//               <div className="linkPair2">
//                 <button
//                   className={`assistantsButton3 ${selectedOption === "GPT" ? "active" : ""}`}
//                   onClick={() => handleSelectChange("GPT")}>
//                   ChatGPT Assist.
//                 </button>
//                 {/* <button className="assistantsButton3" onClick={clearChat} disabled={thoughtItems.length === 0}>
//                   Clear Chat
//                 </button> */}
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="mainField">
//           {message.length === 0 ? (
//             <div className="chatContainer">
//               <div className="conversation__greetingcontainer">
//                 <div className="conversation__greeting">
//                   <span className="capatalizeUsername"><p className="greetings-subtext">Hello, {username}!</p></span>
//                 </div>
//                 <div className="greetings-subtext-container">
//                   <p className="greetings-subsubtext">Choose an assistant and start to chat!</p>
//                   <div className="greetings-subsubtext-container">
//                   <p className="greetings-subsubtext1">AI Portfolio Assist.</p>
//                   <p className="greetings-subsubtext2">This assistant only has knowledge of Andreas Axelssons Front-End Developer portfolio.</p>
//                   <p className="greetings-subsubtext1">ChatGPT Assist.</p>
//                   <p className="greetings-subsubtext2">This assistant has the knowledge of the OpenAI 3.5 Turbo Model</p>
//                 </div>

//                 </div>
//               </div>
//             </div>
//              ) : (
//             <div className="chatContainer">
//               <ChatOutput messages={message} />
//             </div>
//               )}
//             <div className="chatFooter">
//               <div className="chatFooterright">
//               <button className="cleanbtn" onClick={clearChat} disabled={thoughtItems.length === 0}>
//                 <img src={clean} alt="gtp-img" className="icons3" />
//               </button>
//               </div>
//               <div className="input">
//               {loading && (<div className="loader2"><Loader loaderColor="var(--cc-btn-primary-bg)"/></div>)}
//                 <ChatInput responseGenerate={ResponseGenerate} />
//               </div>
//             </div>
//         </div>
//       </div>
//       </div>
//       </div>
//   );
// };