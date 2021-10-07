import React from "react";
import LogoIcon from "./../Common/LogoIcon/LogoIcon";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import SettingsOutlinedIcon from "@material-ui/icons/SettingsOutlined";
import BellIcon from "./../Common/BellIcon/BellIcon";
import CustomizedTooltip from "./../Common/ToolTip/CustomizedTooltip";
import LeftSidePanel from "./../LeftSidePanel/LeftSidePanel";
import Routing from "./../../Routing";
import { Link } from "react-router-dom";
import { AppBar, IconButton, Toolbar, Box } from "@material-ui/core";
const Master = () => {
  return (
    <>
      <Router>        
        <AppBar position="fixed" style={{zIndex:9999}} className="appBarHeader"  elevation={0} >
              <Toolbar>

                <LogoIcon sx={{ mr: 2 }} className="logoicon"></LogoIcon>

                <Typography variant="h6"  sx={{ flexGrow: 1 }}>
                  <Link to="/">Inbox</Link>
                </Typography>
                <Box sx={{ flexGrow: 1 }} />


                <IconButton size="large" >
                  <CustomizedTooltip title="Support center" placement="bottom">
                    <HelpOutlineIcon></HelpOutlineIcon>
                  </CustomizedTooltip>
                </IconButton>
                <IconButton size="large" >
                  <BellIcon />
                </IconButton>
                <IconButton size="large" >
                  <CustomizedTooltip title="Settings" placement="bottom">
                    <SettingsOutlinedIcon></SettingsOutlinedIcon>
                  </CustomizedTooltip>
                </IconButton>
              </Toolbar>
            </AppBar>
        <Grid container className="mainChatSection">
          <Routing></Routing>
        </Grid>
      </Router>
      </>
  );
};

export default Master;
