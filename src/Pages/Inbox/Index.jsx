import React from "react";
import Conversation from "./../../component/Conversation/Conversation";
import User from "./../../component/User/User";
import Chat from "./../../component/Chat/Chat";
import { Box } from "@material-ui/core";
const Index = () => {
  return (
    <>
      <Box className="ChatMainPageHolder" style={{width:"calc(100% - 500px)"}} >
        <Conversation />
        <Chat />      
      </Box>
      <User />
    </>
  );
};

export default Index;
