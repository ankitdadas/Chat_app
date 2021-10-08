import "./Conversation.scss";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import TextField from "@material-ui/core/TextField";
import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import Fab from "@material-ui/core/Fab";
import Box from "@material-ui/core/Box";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/core/Menu";
import SearchIcon from "@material-ui/icons/Search";
// import { createTheme } from '@mui/material/styles';
import blue from "@mui/material/colors/blue";
import FilterListOutlinedIcon from "@material-ui/icons/FilterListOutlined";
import ComposeIcon from "../Common/ComposeIcon/ComposeIcon";
import Typography from "@material-ui/core/Typography";
import CustomizedTooltip from "./../Common/ToolTip/CustomizedTooltip";
import InfiniteScroll from "react-infinite-scroll-component";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import SmsOutlinedIcon from "@material-ui/icons/SmsOutlined";
import ConversationData from "./Conversion.json";
import Moment from "react-moment";
import { withStyles } from "@material-ui/styles";
import Searchbox from "./../Common/Searchbox/Index";
import { Button, ListItemAvatar, SmallAvatar, Badge } from "@material-ui/core";

const styles = {
  ListItemText: {
    
    
     
  },
  root: {
    MuiAvatar: {
      height: 25,
    },
  },
};

const styleAvatar = makeStyles((theme) => ({
  avatar: {
    backgroundColor: theme.palette.grey[50],
    border: `1px solid ${theme.palette.info.main}`,
    color: theme.palette.info.main,
    bottom: 10,
    left: 20,
    height: "25 !important",
  },
}));

class Conversation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ConversationData: ConversationData.data,
    };
    this.fetchMoreData = this.fetchMoreData.bind(this);
    this.setUsers = this.setUsers.bind(this);
  }
  fetchMoreData = () => {
    this.setState({
      ConversationData: [
        ...this.state.ConversationData,
        ...ConversationData.data,
      ],
    });
  };
  getStatusIcon = (type) => {
    switch (type) {
      case "whatsApp":
        return <WhatsAppIcon style={{ backgroundColor: "#3965FF", color: "#fff", borderRadius: "25px", fontSize: 14 }}></WhatsAppIcon>;
      case "sms":
        return <SmsOutlinedIcon style={{ backgroundColor: "#3965FF", color: "#fff", borderRadius: "25px", fontSize: 14 }}></SmsOutlinedIcon>;
      default:
        return <></>;
    }
  };
  setUsers = (user) => {
    if (user) {
      this.setState({
        ConversationData: this.state.ConversationData.filter((p) =>
          user.includes(
            p.contact.firstName === ""
              ? p.contact.mobile.number
              : p.contact.firstName
          )
        ),
      });
    } else {
      this.setState({
        ConversationData: ConversationData.data,
      });
    }
  };
  getNameOrMobileNumber = ({ contact, mobile }) => {
    if (contact.firstName !== "" && contact.lastName !== "") {
      return `${contact.firstName} ${contact.lastName}`;
    } else {
      return contact.mobile.number;
    }
  };
  render() {
    const { classes } = this.props;
    return (
      <Grid className="conversationBox"  >

        <Grid item className="compose-block" xs={12}>
          <Button className="compose-button" variant="contained" size="large" color="primary">
            <ComposeIcon />
            <Typography className="compose-text">Compose</Typography>
          </Button>
        </Grid>

        <Grid item xs={12}>
          <Paper elevation={0}
            component="form" style={{ display: "flex", justifyContent: "flex-end", marginBottom: 10, marginTop: 1 }}
            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center',  }}
          >
             
            <Searchbox sx={{ ml: 1, flex: 1 }} setUsers={this.setUsers}></Searchbox>
            <IconButton color="primary" sx={{ p: '10px' }} aria-label="directions">
              <CustomizedTooltip title="Filter" placement="left">
                <FilterListOutlinedIcon />
              </CustomizedTooltip>
            </IconButton>
          </Paper>
        </Grid>
        <Grid className="height-conversation scroll">
          <InfiniteScroll className="scroll"
            dataLength={this.state.ConversationData.length}
            next={this.fetchMoreData}
            hasMore={true}
          /*  loader={<h4>Loading...</h4>}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>Yay! You have seen it all</b>
          </p>
        } */
          >
            {this.state.ConversationData.map((c, indx) => {
              return (
                <List
                  className={`message-block active ${indx % 2 === 0 ? " white-bg" : "blue-bg"
                    }`}
                >
                  <ListItemAvatar>
                    <ListItemIcon>
                      <Badge overlap="circular" anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                        badgeContent={this.getStatusIcon(c.type)}
                      >
                        <Avatar style={{ width: "40px" }} alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                      </Badge>
                    </ListItemIcon>
                  </ListItemAvatar>
                  <ListItemText class="user-name">
                    <Grid container>
                      <Grid item xs={12}>
                        <Box style={{ display: "flex", justifyContent: "flex-end" }}>
                          {c.unread && c.unread.length > 0 && (<span className="dot"></span>)}
                        </Box>
                        <Box style={{ display: "flex", justifyContent: "space-between" }}>
                          <div style={{ fontSize: 14, fontWeight: "400" }}> {this.getNameOrMobileNumber(c)}</div>
                          <div>

                            <Moment style={{ fontSize: 14, fontWeight: "400" }} format="hh:mm A" withTitle>{c.created.at}</Moment>
                          </div>
                        </Box>

                        <Box className="textMessage" component="div" style={{ whiteSpace: 'nowrap', width:"100%", maxWidth:"210px", margin: "0px auto", fontSize: "12px" }} sx={{
                          textOverflow: 'ellipsis', my: 2,
                          overflow: 'hidden',
                        }}>
                          {c.lastMessage.message}
                        </Box>
                      </Grid>
                    </Grid>
                  </ListItemText>
                </List>
              );
            })}
          </InfiniteScroll>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(Conversation);
