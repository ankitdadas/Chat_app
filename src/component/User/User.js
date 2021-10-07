import "./User.scss";
import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import MuiCollapse from "@material-ui/core/Collapse";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Divider from "@material-ui/core/Divider";
import { spacing } from "@material-ui/system";
import FilterListOutlinedIcon from "@material-ui/icons/FilterListOutlined";
import PhoneOutlinedIcon from "@material-ui/icons/PhoneOutlined";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import SettingsOutlinedIcon from "@material-ui/icons/SettingsOutlined";
import MailOutlineSharpIcon from "@material-ui/icons/MailOutlineSharp";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  IconButton,
} from "@material-ui/core";
import ComposeIconBlack from "../Common/ComposeIconBlack/ComposeIconBlack";
import CustomizedTooltip from "../Common/ToolTip/CustomizedTooltip";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import KeyboardArrowLeftIcon from "@material-ui/icons/KeyboardArrowLeft";
import UserData from "./User.json";
import ThirdParty from "./ThirdParty.json";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import ListItem from "@material-ui/core/ListItem";
import Drawer from "@material-ui/core/Drawer";
import List from '@material-ui/core/List';

const message = `Truncation should be conditionally applicable on this long line of text
 as this is a much longer line than what the container can support. `;

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "70vw",
    borderRadius: 15,
  },
  paper: {
    padding: theme.spacing(1), //grid padding
    textAlign: "center",
    color: theme.palette.text.secondary,

    boxShadow: "none",
    height: "calc(100vh - 240px)",
    overflow: "auto",
  },
  typography: {
    textAlign: "center",
    fontSize: 20,
    fontFamily: "Work Sans",
    marginTop: 10,
    marginBottom: 20,
  },
  Box: {
    display: "flex",
  },
  ListItem: {
    display: "flex",
    justifyContent: "end",
  },
}));
const drawerWidth = 450;
function User() {
  //create class based upon class outside of export default.
  const classes = useStyles();
  const [thirdPartyDetail, setThirdPartyDetail] = React.useState(
    ThirdParty.data[0].detail
  );
  const [selectedIndx, setSelectedIndx] = React.useState(0);
  const [userDataDetail, setUserDataDetail] = React.useState(UserData.data[0]);
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  return (
    <Drawer
    className="rightSidebarHolder"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
        },
      }}
      variant="persistent"
      anchor="right"
      open={true}
      
    >
      <Box spacing={2} className="user-block" style={{ padding: "0px 15px" }}>
        <Grid conatiner>
          <Grid item xs={12} style={{ textAlign: 'right', marginBottom1: 15 }}>
            <IconButton style={{ position: 'relative', zIndex: 999 }}>
              <ComposeIconBlack />
            </IconButton>
          </Grid>
          <Box className="profileCard" style={{ position: 'relative' }}>
            {userDataDetail && (
              <Grid item xs={12}>
                <Paper className="rectangle" borderRadius={10}>
                  <Box className="userAvtarHolder">
                    <IconButton onClick={() => {
                      if (selectedIndx !== 0) {
                        setThirdPartyDetail(
                          ThirdParty.data[selectedIndx - 1].detail
                        );
                        setSelectedIndx(selectedIndx - 1);
                        setUserDataDetail(UserData.data[selectedIndx - 1]);
                      }
                    }}
                      className="arrowIcon left">
                      <CustomizedTooltip placement="left" title="Previous">
                        <ArrowBackIosIcon></ArrowBackIosIcon>
                      </CustomizedTooltip>
                    </IconButton>

                    <Avatar variant="circular" className="profileCardImage" alt="Remy Sharp" src="/static/images/avatar/1.jpg" />

                    <IconButton class="arrowIcon right">
                      <CustomizedTooltip placement="right" title="Next">
                        <ArrowForwardIosIcon
                          // disabled={selectedIndx === ThirdParty.data.length - 1}
                          onClick={() => {
                            if (selectedIndx !== ThirdParty.data.length - 1) {
                              setThirdPartyDetail(
                                ThirdParty.data[selectedIndx + 1].detail
                              );
                              setUserDataDetail(UserData.data[selectedIndx + 1]);
                              setSelectedIndx(selectedIndx + 1);
                            }
                          }}
                        ></ArrowForwardIosIcon>
                      </CustomizedTooltip>
                    </IconButton>
                  </Box>
                  <Box wrap="wrap" container >
                    <Grid container>
                      <Grid xs={12} item style={{ textAlign: "center" }}>
                        <Typography class={classes.typography}>
                          {`${userDataDetail.contact.firstName} ${userDataDetail.contact.lastName}`}
                        </Typography>
                      </Grid>

                      <Grid xs={12} item >
                        <Box style={{ display: "flex", justifyContent: "flex-start", alignItems: "center" }} >
                          <MailOutlineSharpIcon />
                          {`${userDataDetail.contact.email} `}
                        </Box>
                      </Grid>
                      <Grid xs={12} item >
                        <Box style={{ display: "flex", justifyContent: "flex-start", alignItems: "center" }} >
                          <PhoneOutlinedIcon />
                          {`${userDataDetail.contact.mobile.number} `}
                        </Box>
                      </Grid>
                    </Grid>
                   </Box>
                </Paper>
              </Grid>
            )}
          </Box>
        </Grid>
        <Grid item xs={12} >
          <Paper class={classes.paper} borderRadius={10}>
            {thirdPartyDetail &&
              thirdPartyDetail.length > 0 &&
              thirdPartyDetail.map((t) => {
                console.log(t.logo);
                return (
                  <Accordion >
                    <AccordionSummary
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                      expandIcon={<ExpandMoreIcon />}
                      style={{ alignItems: "center", minHeight: "40px" }}
                    >
                      <img width="30" alt={t.Integration} src={t.logo} style={{ marginRight: "15px" }} />
                      <Typography>{`${t.Integration}`}</Typography>

                    </AccordionSummary>
                    <AccordionDetails >
                      <Grid wrap="nowrap" spacing={0} container>
                        <Grid xs={1} style={{ minWidth: "40px" }}>

                        </Grid>
                        <Grid className="message-spacing">
                          <div>{t.gender}</div>
                          <div>{t.age}</div>
                          <div>{t.color}</div>
                          <div>{t.country}</div>
                        </Grid>
                      </Grid>
                    </AccordionDetails>
                  </Accordion>
                );
              })}
          </Paper>
        </Grid>
      </Box>
    </Drawer>
  );
}

export default User;
