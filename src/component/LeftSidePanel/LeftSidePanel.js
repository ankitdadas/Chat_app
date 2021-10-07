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
import { IconButton, Toolbar, Drawer, Box } from "@material-ui/core";
const drawerWidth = 60;
function LeftSidePanel() {
  return (

    
     <Drawer variant="permanent" style={{flexDirection:"column", justifyContent:"space-between", padding:"70px 5px 0px",}} > 
    <Toolbar style={{flexDirection:"column", paddingTop:70}}>
      <IconButton>
          <NavLink to={"/"} exact activeClassName="selected">
            <InboxIcon />
          </NavLink>
      </IconButton>


      <IconButton>
          <NavLink to={"/Campaigns"} exact activeClassName="selected">
            <Podcast />
          </NavLink>
      </IconButton>



      <IconButton>
          <NavLink to={"/Contacts"} exact activeClassName="selected">
            <GroupIcon />
          </NavLink>
      </IconButton>

      <IconButton>
          <NavLink to={"/Templates"} exact activeClassName="selected">
            <TextIcon />
          </NavLink>
      </IconButton>

      <IconButton>
          <NavLink to={"/Tools"} exact activeClassName="selected">
            <PanelIcon />
          </NavLink>
      </IconButton>



      <IconButton>
          <NavLink to={"/Featurerequests"} exact activeClassName="selected">
            <ConstructionIcon />
          </NavLink>
      </IconButton>


    </Toolbar>

    <Box  sx={{ flexGrow: 1 }}
            ></Box>

<Toolbar  style={{flexDirection:"column"}} >
      <IconButton>
        <CustomizedTooltip title="Status">
          <SentimentSatisfiedOutlinedIcon className="panel-icon smile-icon"></SentimentSatisfiedOutlinedIcon>
        </CustomizedTooltip>
      </IconButton>
      <IconButton>
        <CustomizedTooltip title="Status">
          <SentimentSatisfiedOutlinedIcon className="panel-icon smile-icon"></SentimentSatisfiedOutlinedIcon>
        </CustomizedTooltip>
      </IconButton>
      

</Toolbar>


     
</Drawer>
  );
}

export default LeftSidePanel;
