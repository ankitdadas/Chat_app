import "./Chat.scss";
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
import SendIcon from "@material-ui/icons/Send";
import AddSharpIcon from "@material-ui/icons/AddSharp";
import LocalPrintshopOutlinedIcon from "@material-ui/icons/LocalPrintshopOutlined";
import CheckIcon from "@material-ui/icons/Check";
import SendOutlinedIcon from "@material-ui/icons/SendOutlined";
import AttachFileSharpIcon from "@material-ui/icons/AttachFileSharp";
import InsertLinkSharpIcon from "@material-ui/icons/InsertLinkSharp";
import TextIcon from "../Common/TextIcon/TextIcon";
import TokenIcon from "../Common/TokenIcon/TokenIcon";
import Typography from "@material-ui/core/Typography";
import {
  AppBar,
  Box,
  IconButton,
  ListItemAvatar,
  TextareaAutosize,
  Toolbar
} from "@material-ui/core";

// import TextSnippetOutlinedIcon from '@material-ui/icons/TextSnippetOutlined';
// import TextSnippetOutlinedIcon from '@material-ui/icons/TextSnippetOutlined';
import CustomizedTooltip from "./../Common/ToolTip/CustomizedTooltip";

class Chat extends Component {
  render() {
    return (
      <Box className="chat-grid">
        <AppBar color="default" elevation={0}  position="absolute">
   <Toolbar style={{textAlign:"right", display:"flex", justifyContent:"flex-end"}}>
     <IconButton>
       <TextIcon/>
     </IconButton>
   </Toolbar>
</AppBar>
        <Box
          className="chatBoxHolder"
          style={{ height: "calc(100vh - 160px)" }}
        >


          {/*============ left section start ============ */}
          <Box className="chatSection">
            <List className="chatBox">
              <Box className="messageInfoBox">
                <ListItemAvatar>
                  {" "}
                  <Avatar
                    alt="Remy Sharp"
                    src="https://material-ui.com/static/images/avatar/1.jpg"
                  />
                </ListItemAvatar>
                <ListItemText>
                  <div className="messageInfoUser">
                    <span>John Wick</span>
                    <span>9.30 AM</span>
                  </div>
                </ListItemText>
              </Box>
              <Box className="messageBoxBlue" borderRadius={5}>
                Cool. i am good, let's catch up!
              </Box>
              <Box style={{ textAlign: "right" }}>
                <CheckIcon className="tickGreen" />
              </Box>
            </List>
          </Box>

          {/*============ left section end ============ */}
          {/*============ right section start ============ */}

          <Box className="chatSection right">
            <List className="chatBox">
              <Box className="messageInfoBox">
                <ListItemAvatar>
                  {" "}
                  <Avatar
                    alt="Remy Sharp"
                    src="https://material-ui.com/static/images/avatar/1.jpg"
                  />
                </ListItemAvatar>
                <ListItemText>
                  <div className="messageInfoUser">
                    <span>John Wick</span>
                    <span>9.30 AM</span>
                  </div>
                </ListItemText>
              </Box>
              <Box className="messageBoxBlue" borderRadius={5}>
                Cool. i am good, let's catch up!
              </Box>
              <Box style={{ textAlign: "right" }}>
                <CheckIcon style={{}} className="tickGreen" />
              </Box>
            </List>
          </Box>

          {/*============ right section end ============ */}

          {/*============ left section start ============ */}
          <Box className="chatSection">
            <List className="chatBox">
              <Box className="messageInfoBox">
                <ListItemAvatar>
                  {" "}
                  <Avatar
                    alt="Remy Sharp"
                    src="https://material-ui.com/static/images/avatar/1.jpg"
                  />
                </ListItemAvatar>
                <ListItemText>
                  <div className="messageInfoUser">
                    <span>John Wick</span>
                    <span>9.30 AM</span>
                  </div>
                </ListItemText>
              </Box>
              <Box className="messageBoxBlue" borderRadius={5}>
                Cool. i am good, let's catch up!
              </Box>
              <Box style={{ textAlign: "right" }}>
                <CheckIcon className="tickGreen" />
              </Box>
            </List>
          </Box>

          {/*============ left section end ============ */}
          {/*============ right section start ============ */}

          <Box className="chatSection right">
            <List className="chatBox">
              <Box className="messageInfoBox">
                <ListItemAvatar>
                  {" "}
                  <Avatar
                    alt="Remy Sharp"
                    src="https://material-ui.com/static/images/avatar/1.jpg"
                  />
                </ListItemAvatar>
                <ListItemText>
                  <div className="messageInfoUser">
                    <span>John Wick</span>
                    <span>9.30 AM</span>
                  </div>
                </ListItemText>
              </Box>
              <Box className="messageBoxBlue" borderRadius={5}>
                Cool. i am good, let's catch up!
              </Box>
              <Box style={{ textAlign: "right" }}>
                <CheckIcon style={{}} className="tickGreen" />
              </Box>
            </List>
          </Box>

          {/*============ right section end ============ */}

          {/*============ left section start ============ */}
          <Box className="chatSection">
            <List className="chatBox">
              <Box className="messageInfoBox">
                <ListItemAvatar>
                  {" "}
                  <Avatar
                    alt="Remy Sharp"
                    src="https://material-ui.com/static/images/avatar/1.jpg"
                  />
                </ListItemAvatar>
                <ListItemText>
                  <div className="messageInfoUser">
                    <span>John Wick</span>
                    <span>9.30 AM</span>
                  </div>
                </ListItemText>
              </Box>
              <Box className="messageBoxBlue" borderRadius={5}>
                Cool. i am good, let's catch up!
              </Box>
              <Box style={{ textAlign: "right" }}>
                <CheckIcon className="tickGreen" />
              </Box>
            </List>
          </Box>

          {/*============ left section end ============ */}
          {/*============ right section start ============ */}

          <Box className="chatSection right">
            <List className="chatBox">
              <Box className="messageInfoBox">
                <ListItemAvatar>
                  {" "}
                  <Avatar
                    alt="Remy Sharp"
                    src="https://material-ui.com/static/images/avatar/1.jpg"
                  />
                </ListItemAvatar>
                <ListItemText>
                  <div className="messageInfoUser">
                    <span>John Wick</span>
                    <span>9.30 AM</span>
                  </div>
                </ListItemText>
              </Box>
              <Box className="messageBoxBlue" borderRadius={5}>
                Cool. i am good, let's catch up!
              </Box>
              <Box style={{ textAlign: "right" }}>
                <CheckIcon style={{}} className="tickGreen" />
              </Box>
            </List>
          </Box>

          {/*============ right section end ============ */}

          {/*============ left section start ============ */}
          <Box className="chatSection">
            <List className="chatBox">
              <Box className="messageInfoBox">
                <ListItemAvatar>
                  {" "}
                  <Avatar
                    alt="Remy Sharp"
                    src="https://material-ui.com/static/images/avatar/1.jpg"
                  />
                </ListItemAvatar>
                <ListItemText>
                  <div className="messageInfoUser">
                    <span>John Wick</span>
                    <span>9.30 AM</span>
                  </div>
                </ListItemText>
              </Box>
              <Box className="messageBoxBlue" borderRadius={5}>
                Cool. i am good, let's catch up!
              </Box>
              <Box style={{ textAlign: "right" }}>
                <CheckIcon className="tickGreen" />
              </Box>
            </List>
          </Box>

          {/*============ left section end ============ */}
          {/*============ right section start ============ */}

          <Box className="chatSection right">
            <List className="chatBox">
              <Box className="messageInfoBox">
                <ListItemAvatar>
                  {" "}
                  <Avatar
                    alt="Remy Sharp"
                    src="https://material-ui.com/static/images/avatar/1.jpg"
                  />
                </ListItemAvatar>
                <ListItemText>
                  <div className="messageInfoUser">
                    <span>John Wick</span>
                    <span>9.30 AM</span>
                  </div>
                </ListItemText>
              </Box>
              <Box className="messageBoxBlue" borderRadius={5}>
                Cool. i am good, let's catch up!
              </Box>
              <Box style={{ textAlign: "right" }}>
                <CheckIcon style={{}} className="tickGreen" />
              </Box>
            </List>
          </Box>

          {/*============ right section end ============ */}

          {/*============ left section start ============ */}
          <Box className="chatSection">
            <List className="chatBox">
              <Box className="messageInfoBox">
                <ListItemAvatar>
                  {" "}
                  <Avatar
                    alt="Remy Sharp"
                    src="https://material-ui.com/static/images/avatar/1.jpg"
                  />
                </ListItemAvatar>
                <ListItemText>
                  <div className="messageInfoUser">
                    <span>John Wick</span>
                    <span>9.30 AM</span>
                  </div>
                </ListItemText>
              </Box>
              <Box className="messageBoxBlue" borderRadius={5}>
                Cool. i am good, let's catch up!
              </Box>
              <Box style={{ textAlign: "right" }}>
                <CheckIcon className="tickGreen" />
              </Box>
            </List>
          </Box>

          {/*============ left section end ============ */}
          {/*============ right section start ============ */}

          <Box className="chatSection right">
            <List className="chatBox">
              <Box className="messageInfoBox">
                <ListItemAvatar>
                  {" "}
                  <Avatar
                    alt="Remy Sharp"
                    src="https://material-ui.com/static/images/avatar/1.jpg"
                  />
                </ListItemAvatar>
                <ListItemText>
                  <div className="messageInfoUser">
                    <span>John Wick</span>
                    <span>9.30 AM</span>
                  </div>
                </ListItemText>
              </Box>
              <Box className="messageBoxBlue" borderRadius={5}>
                Cool. i am good, let's catch up!
              </Box>
              <Box style={{ textAlign: "right" }}>
                <CheckIcon style={{}} className="tickGreen" />
              </Box>
            </List>
          </Box>

          {/*============ right section end ============ */}

          {/*============ left section start ============ */}
          <Box className="chatSection">
            <List className="chatBox">
              <Box className="messageInfoBox">
                <ListItemAvatar>
                  {" "}
                  <Avatar
                    alt="Remy Sharp"
                    src="https://material-ui.com/static/images/avatar/1.jpg"
                  />
                </ListItemAvatar>
                <ListItemText>
                  <div className="messageInfoUser">
                    <span>John Wick</span>
                    <span>9.30 AM</span>
                  </div>
                </ListItemText>
              </Box>
              <Box className="messageBoxBlue" borderRadius={5}>
                Cool. i am good, let's catch up!
              </Box>
              <Box style={{ textAlign: "right" }}>
                <CheckIcon className="tickGreen" />
              </Box>
            </List>
          </Box>

          {/*============ left section end ============ */}
          {/*============ right section start ============ */}

          <Box className="chatSection right">
            <List className="chatBox">
              <Box className="messageInfoBox">
                <ListItemAvatar>
                  {" "}
                  <Avatar
                    alt="Remy Sharp"
                    src="https://material-ui.com/static/images/avatar/1.jpg"
                  />
                </ListItemAvatar>
                <ListItemText>
                  <div className="messageInfoUser">
                    <span>John Wick</span>
                    <span>9.30 AM</span>
                  </div>
                </ListItemText>
              </Box>
              <Box className="messageBoxBlue" borderRadius={5}>
                Cool. i am good, let's catch up!
              </Box>
              <Box style={{ textAlign: "right" }}>
                <CheckIcon style={{}} className="tickGreen" />
              </Box>
            </List>
          </Box>

          {/*============ right section end ============ */}
        </Box>

        <Box className="bottomChatSectionHolder">
          <Divider style={{ maxWidth: "100%" }} />
          <Box
            className="bottomChatSectionInner"
            style={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "flex-end",
              padding: "10px 10px 0px",
            }}
          >


            <Box   style={{
                            display: "flex",
                            justifyContent: "space-around",
                            alignItems: "flex-start",
                          }}>
                <IconButton>
                  <TokenIcon />
                </IconButton>
                <IconButton>
                  <CustomizedTooltip placement="top" title="Links">
                    <InsertLinkSharpIcon></InsertLinkSharpIcon>
                  </CustomizedTooltip>
                </IconButton>
                <IconButton>
                  <CustomizedTooltip placement="top" title="Attachments">
                    <AttachFileSharpIcon></AttachFileSharpIcon>
                  </CustomizedTooltip>
                </IconButton>
                <IconButton>
                  <TextIcon />
                </IconButton>
            </Box>
            <Box
              style={{
                display: "flex",
                flexDirection: "column",
                marginRight: 10,
              }}
              sx={{ flexGrow: 1 }}
            >
              <TextareaAutosize
                aria-label="minimum height"
                minRows={1}
                maxRows={3}
                placeholder="Minimum 3 rows"
                style={{ width: "100%", border:0, background:"#f1f1f1",  padding:"8px 15px", maxWidth:"95%" }}
              />
              <Typography className="helper-text">
                3 segments (23 characters remaining)
              </Typography>
            </Box>
            <Box
              style={{
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "flex-start",
              }}
            >
              <IconButton>
                <CustomizedTooltip placement="top" title="Send">
                  <SendOutlinedIcon></SendOutlinedIcon>
                </CustomizedTooltip>
              </IconButton>         
            </Box>
          </Box>
        </Box>
      </Box>
    );
  }
}

export default Chat;
