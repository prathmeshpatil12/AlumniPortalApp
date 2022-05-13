import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';


const ChatPage = () => {    
const [chats, setChats] = useState([]);
    const navigate = useNavigate();
    const fetchChats = async () => {
        const { data } = await axios.get("http://localhost:3001/api/chat");

        setChats(data);
    };

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
      fetchChats(); 
    }, []);

  return (
    <div>{chats.map((chat) => (<div key={chat._id}>{chat.chatName}</div>))}</div>
  )
}

export default ChatPage




    // let navigate = useNavigate

    // useEffect(() => {
    //     if(localStorage.getItem("Type") != "Student" || localStorage.getItem("Type") != "Alumni"){
    //         navigate("/login");
    //     }
    // });

    // const logout = () => {
    //     localStorage.removeItem("PRN");
    //     localStorage.removeItem("Name");
    //     localStorage.removeItem("Type");
    //     navigate('/login');
    //   }