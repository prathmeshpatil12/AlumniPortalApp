import { Box } from '@chakra-ui/react';
import { margin } from '@mui/system';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChatState } from '../../Context/ChatProvider';
import ChatBox from '../miscellaneous/ChatBox';
import MyChats from '../miscellaneous/MyChats';
import SideDrawer from '../miscellaneous/SideDrawer';


const ChatPage = () => {
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
    //fetchChats(); 
  }, []);


    
  // const [fetchAgain, setFetchAgain] = useState(false);
  const { user } = ChatState();
  //console.log("User : From Chat page");
  //console.log(user);
  return (
    <div style={{ width: "100%", marginTop:"-20px"}}>
      {user && <SideDrawer />}
      <Box display="flex"  justifyContent="space-between" width="100%" height="100vh" p="10px">
        {user && <MyChats  />}
        {user && <ChatBox/>} 
      </Box>
    </div>
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