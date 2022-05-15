import axios from "axios";
import { Avatar, Box, Button, Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, Input, Menu, MenuButton, MenuDivider, MenuItem, MenuList, Text, Tooltip, useToast } from '@chakra-ui/react';
import {ArrowBackIcon, BellIcon, ChevronDownIcon} from "@chakra-ui/icons";
import React from 'react'
import { useState } from 'react';
import { ChatState } from '../../Context/ChatProvider';
import ProfileModal from './ProfileModel';
import { useNavigate } from 'react-router-dom';
import { useDisclosure } from '@chakra-ui/hooks';
import ChatLoading from "../ChatLoading";

const SideDrawer = () => {
const [search, setSearch] = useState("");
const [searchResult, setSearchResult] = useState([]);
const [loading, setLoading] = useState(false);
const [loadingChat, setLoadingChat] = useState(false);
const navigate = useNavigate();
const { user } = ChatState();
const { isOpen, onOpen, onClose } = useDisclosure();
const toast = useToast();

  const logoutHandler = () => {
      localStorage.removeItem("PRN");
      localStorage.removeItem("Name");
      localStorage.removeItem("Type");
      console.log("Data removed..navigating");
      navigate('/login');
      console.log("Navigated");
  };

  const goToDashboard = () => {
      console.log("In gotodashboard")
      if (localStorage.getItem("Type") == "Student") {
        navigate('/studentDashboard');
      } else {
        navigate("/alumniDashboard");
      } 
  };
  
  const handleSearch = async () => {
    if (!search) {
      toast({
        title: "Please Enter something in search",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "top-left",
      });
     return;
    }
    try {
        setLoading(true);
  
        const config = {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        };
  
        const { data } = await axios.get(`/api/user?search=${search}`, config);
  
        setLoading(false);
        setSearchResult(data);
      } catch (error) {
        toast({
          title: "Error Occured!",
          description: "Failed to Load the Search Results",
          status: "error",
          duration: 5000,
          isClosable: true,
          position: "bottom-left",
        });
      }
}



  return (
    <><Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          bg="white"
          w="100%"
          padding="5px 10px 5px 10px"
          borderWidth="5px"
      >
          <Tooltip label="Search Users to chat" hasArrow placement="bottom-end">
              <Button variant="ghost" onClick={onOpen}>
                  <i className="fas fa-search"></i>
                  <Text display={{ base: "none", md: "flex" }} padding={4}>
                      Search User
                  </Text>
              </Button>
          </Tooltip>
          <Text fontSize="2xl" fontFamily="Verdana">
              Chat System
          </Text>
          <div>
              <Menu>
                  <MenuButton p={1} onClick={goToDashboard}>
                      {/* <NotificationBadge
                          count={notification.length}
                          effect={Effect.SCALE} /> */}
                      <ArrowBackIcon fontSize="2xl" m={1} />
                  </MenuButton>
                  {/* <MenuList pl={2}>
                    {!notification.length && "No New Messages"}
                    {notification.map((notif) => (
                        <MenuItem
                        key={notif._id}
                        onClick={() => {
                            setSelectedChat(notif.chat);
                            setNotification(notification.filter((n) => n !== notif));
                        }}
                        >
                        {notif.chat.isGroupChat
                            ? `New Message in ${notif.chat.chatName}`
                            : `New Message from ${getSender(user, notif.chat.users)}`}
                        </MenuItem>
                    ))}
                    </MenuList> */}
              </Menu>
              <Menu>
                  <MenuButton as={Button} bg="white" rightIcon={<ChevronDownIcon />}>
                      <Avatar
                          size="sm"
                          cursor="pointer"
                          name={user.name}
                          src={user.pic} />
                  </MenuButton>
                  <MenuList>
                      <ProfileModal user={user}>
                          <MenuItem>My Profile</MenuItem>
                      </ProfileModal>
                      <MenuDivider />
                      <MenuItem onClick={logoutHandler}>Logout</MenuItem>
                  </MenuList>
              </Menu>
          </div>
      </Box><Drawer placement="left" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">Search Users</DrawerHeader>
          <DrawerBody>
            <Box d="flex" pb={2}>
              <Input
                placeholder="Search by name or prn"
                mr={2}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <Button onClick={handleSearch}>Go</Button>
            </Box>
            {loading? <ChatLoading/> : <span>results</span>}
            {/* {loading ? (
              <ChatLoading />
            ) : (
              searchResult?.map((user) => (
                <UserListItem
                  key={user._id}
                  user={user}
                  handleFunction={() => accessChat(user._id)}
                />
              ))
            )}
            {loadingChat && <Spinner ml="auto" d="flex" />} */}
          </DrawerBody>
        </DrawerContent>
      </Drawer></>
  );
};

export default SideDrawer