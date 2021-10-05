import React from "react";
import LogoIcon from "./../Common/LogoIcon/LogoIcon";
import { BrowserRouter as Router } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import SettingsOutlinedIcon from "@material-ui/icons/SettingsOutlined";
import BellIcon from "./../Common/BellIcon/BellIcon";
import CustomizedTooltip from "./../Common/ToolTip/CustomizedTooltip";
import Routing from "./../../Routing";
import { Link } from "react-router-dom";
import { AppBar, IconButton, Toolbar, Box } from "@material-ui/core";
const Master = () => {
  return (
    <>
      <Router>
        <Grid className="appBarHeader" container>
          <Grid item xs={12}>
            <AppBar position="sticky" color="transparent" elevation={0} >
              <Toolbar>

                <LogoIcon sx={{ mr: 2 }} className="logoicon"></LogoIcon>

                <Typography variant="h6"  sx={{ flexGrow: 1 }}>
                  <Link to="/">Inbox</Link>
                </Typography>
                <Box sx={{ flexGrow: 1 }} />


                <IconButton size="large" color="inherit">
                  <CustomizedTooltip title="Support center" placement="bottom">
                    <HelpOutlineIcon></HelpOutlineIcon>
                  </CustomizedTooltip>
                </IconButton>
                <IconButton size="large" color="inherit">
                  <BellIcon />
                </IconButton>
                <IconButton size="large" color="inherit">
                  <CustomizedTooltip title="Settings" placement="bottom">
                    <SettingsOutlinedIcon></SettingsOutlinedIcon>
                  </CustomizedTooltip>
                </IconButton>
              </Toolbar>
            </AppBar>
          </Grid>
        </Grid>
        
        <Grid container className="chatSection">
          <Routing></Routing>
        </Grid>
      </Router>

      </>
  );
};

export default Master;
