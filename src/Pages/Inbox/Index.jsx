import React from "react";
import Conversation from "./../../component/Conversation/Conversation";
import User from "./../../component/User/User";
import Chat from "./../../component/Chat/Chat";
import { Box, Drawer } from "@material-ui/core";
import { styled, useTheme } from '@material-ui/core/styles';

 

 

export default function Index() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Box className="ChatMainPageHolder" style={{width:"calc(100% - 500px)"}} >
        <Conversation />
        <Chat />      
      </Box>
      <Drawer style={{width:300}}  
       sx={{
         
        flexShrink: 0,
        '& .MuiDrawer-paper': {
         width:300,
          boxSizing: 'border-box',
           
        },
      }}
      variant="permanent"
      anchor="right"
      >
      <User />
      </Drawer>
      
    </>
  );
}

 
 
