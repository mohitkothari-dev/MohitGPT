import { createContext, useEffect, useRef, useState } from "react";
import { sendMsgToAI } from "./OpenAi";
export const ContextApp = createContext();

const AppContext = ({ children }) => {

  
  const [showSlide, setShowSlide] = useState(false);
  const [Mobile, setMobile] = useState(false);
  const [chatValue, setChatValue] = useState("");
  const [message, setMessage] = useState([
    {
      text: (
        <>
        Hi, I'm MohitGPT, you can also call me MohitAI - a powerful RAG chatbot created by Mohit Kothari. My primary goal is to provide users all the information regarding Mohit's professional career based on the prompts and questions asked. I have been re-trained on Mohit's updated <a href="https://www.linkedin.com/in/dev-mohit-kothari/" className="italic font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-600" target="_blank">LinkedIn</a> profile, so I can provide information, answer questions, engage in conversations. Please feel free to ask me anything or let me know how I can assist you today!
        </>
      ),
      isBot: true,
    },
  ]);
  const msgEnd = useRef(null);

  useEffect(() => {
    msgEnd.current.scrollIntoView();
  }, [message]);

  // button Click function
  const handleSend = async () => {
    const text = chatValue;
    setChatValue("");
    setMessage([...message, { text, isBot: false }]);
    const res = await sendMsgToAI(text);
    setMessage([
      ...message,
      { text, isBot: false },
      { text: res, isBot: true },
    ]);
  };

  // Enter Click function
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  // Query Click function
  const handleQuery = async (e) => {
    const text = e.target.innerText;
    setMessage([...message, { text, isBot: false }]);
    const res = await sendMsgToAI(text);
    setMessage([
      ...message,
      { text, isBot: false },
      { text: res, isBot: true },
    ]);
  };
  return (
    <ContextApp.Provider
      value={{
        showSlide,
        setShowSlide,
        Mobile,
        setMobile,
        chatValue,
        setChatValue,
        handleSend,
        message,
        msgEnd,
        handleKeyPress,
        handleQuery,
      }}
    >
      {children}
    </ContextApp.Provider>
  );
};
export default AppContext;
