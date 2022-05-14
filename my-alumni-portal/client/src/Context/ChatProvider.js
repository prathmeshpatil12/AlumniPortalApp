import React, { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ChatContext = createContext();

const ChatProvider = ({ children }) => {
  const [selectedChat, setSelectedChat] = useState();
  const [user, setUser] = useState();
  const [notification, setNotification] = useState([]);
  const [chats, setChats] = useState();

  const navigate = useNavigate();

  useEffect(() => {
    if(localStorage.getItem("PRN")==null) {
        console.log("Checked1");
        navigate('/login');
    }
    if(localStorage.getItem("Type") == "Admin"){
      navigate('/adminDashboard');
    }
    if(localStorage.getItem("Type") == "Coordinator"){
      navigate('/coordinatorDashboard');
    }
    setUser({
        prn: localStorage.getItem("PRN"),
        name: localStorage.getItem("Name"),
        type: localStorage.getItem("Type"),
        pic:"https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"
    })
    //fetchChats(); 
  }, []);

  return (
    <ChatContext.Provider
      value={{
        selectedChat,
        setSelectedChat,
        user,
        setUser,
        notification,
        setNotification,
        chats,
        setChats,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};

export const ChatState = () => {
  return useContext(ChatContext);
};

export default ChatProvider;