import "./LeftSidePanel.scss";
import React from "react";
import Grid from "@material-ui/core/Grid";
import InsertPhotoOutlinedIcon from "@material-ui/icons/InsertPhotoOutlined";
import DescriptionOutlinedIcon from "@material-ui/icons/DescriptionOutlined";
import SettingsInputAntennaOutlinedIcon from "@material-ui/icons/SettingsInputAntennaOutlined";
import SentimentSatisfiedOutlinedIcon from "@material-ui/icons/SentimentSatisfiedOutlined";
// import PodcastsOutlinedIcon from '@material-ui/icons/PodcastsOutlined';
// import InsightsIcon from '@material-ui/icons/Insights';
import Podcast from "../Common/Podcast/Podcast";
import PanelIcon from "../Common/PanelIcon/PanelIcon";
import InboxIcon from "../Common/InboxIcon/InboxIcon";
import ConstructionIcon from "../Common/ConstructionIcon/ConstructionIcon";
import GroupIcon from "../Common/GroupIcon/GroupIcon";
import TextIcon from "../Common/TextIcon/TextIcon";
import CustomizedTooltip from "../Common/ToolTip/CustomizedTooltip";
import { NavLink } from "react-router-dom";
import { IconButton, Toolbar, Drawer, Box, List, ListItem } from "@material-ui/core";
 
const drawerWidth = 40;
function LeftSidePanel() {
  return (

    
     <Drawer variant="permanent"   anchor="left" style={{flexDirection:"column", justifyContent:"space-between", padding:"70px 5px 0px",}} > 
        <Toolbar className="sideNavigationHolder" style={{flexDirection:"column", padding:"70px 5px 0px !important", position:"relative", top:70}}>

        <List className="sideNavigation">
          <ListItem>
              <NavLink to={"/"} exact activeClassName="selected">
                  <InboxIcon />
              </NavLink>
          </ListItem>
          <ListItem >
            <NavLink to={"/Campaigns"} exact activeClassName="selected">
              <Podcast />
            </NavLink>
          </ListItem>
          <ListItem >
            <NavLink to={"/Contacts"} exact activeClassName="selected">
              <GroupIcon />
            </NavLink>
          </ListItem>
         
          <ListItem >
            <NavLink to={"/Templates"} exact activeClassName="selected">
              <TextIcon />
            </NavLink>
          </ListItem>
          <ListItem >
            <NavLink to={"/Tools"} exact activeClassName="selected">
              <PanelIcon />
            </NavLink>
          </ListItem>
          <ListItem >
            <NavLink to={"/Featurerequests"} exact activeClassName="selected">
              <ConstructionIcon />
            </NavLink>
          </ListItem>

        </List>
        
   
    </Toolbar>

    <Box sx={{ flexGrow: 1 }}></Box>

      <Toolbar className="sideNavigationHolder" style={{flexDirection:"column", padding:"0 5px 0px"}} >
              <List>
              <ListItem >
                    <CustomizedTooltip title="Status">
                        <SentimentSatisfiedOutlinedIcon className="panel-icon smile-icon"></SentimentSatisfiedOutlinedIcon>
                    </CustomizedTooltip>
              </ListItem>
              <ListItem >
                <CustomizedTooltip title="Status">
                  <SentimentSatisfiedOutlinedIcon className="panel-icon smile-icon"></SentimentSatisfiedOutlinedIcon>
                </CustomizedTooltip>
              </ListItem>
            </List>
    </Toolbar>    
</Drawer>
  );
}

export default LeftSidePanel;
