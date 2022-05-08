import {
  Avatar,
  AvatarGroup,
  Box,
  ImageList,
  ImageListItem,
  Typography,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Divider,
} from "@mui/material";
import React from "react";
import User1 from "../assets/1.jpg";
import User2 from "../assets/2.jpg";
import User3 from "../assets/3.jpg";
import User4 from "../assets/4.jpg";
import User5 from "../assets/5.jpg";
import User6 from "../assets/6.jpg";
import PostImg1 from "../assets/p1.jpg";
import PostImg2 from "../assets/p2.png";
import PostImg3 from "../assets/p3.png";
import PostImg4 from "../assets/p4.png";
import PostImg5 from "../assets/p5.jpg";

const RightBar = () => {
  return (
    <Box flex={2} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position="fixed" width={300}>
        <Typography variant="h6" fontWeight={100}>
          Online Friends
        </Typography>
        <AvatarGroup max={7}>
          <Avatar alt="User 1" src={User1} />
          <Avatar alt="User 1" src={User2} />
          <Avatar alt="User 1" src={User3} />
          <Avatar alt="User 1" src={User4} />
          <Avatar alt="User 1" src={User5} />
          <Avatar alt="User 1" src={User6} />
          <Avatar alt="User 1" src={User6} />
          <Avatar alt="User 1" src={User6} />
          <Avatar alt="User 1" src={User6} />
          <Avatar alt="User 1" src={User6} />
        </AvatarGroup>
        <Typography variant="h6" fontWeight={100} mt={2} mb={2}>
          Latest Posts
        </Typography>
        <ImageList cols={3} rowHeight={100} gap={5}>
          <ImageListItem>
            <img src={PostImg1} alt="New Post1" />
          </ImageListItem>
          <ImageListItem>
            <img src={PostImg2} alt="New Post2" />
          </ImageListItem>
          <ImageListItem>
            <img src={PostImg3} alt="New Post1" />
          </ImageListItem>
          <ImageListItem>
            <img src={PostImg4} alt="New Post1" />
          </ImageListItem>
          <ImageListItem>
            <img src={PostImg5} alt="New Post1" />
          </ImageListItem>
        </ImageList>

        <Typography variant="h6" fontWeight={100} mt={2}>
          Latest Conversations
        </Typography>

        <List
          sx={{ width: "100%", maxWidth: 360, bgColor: "background.paper" }}
        >
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Conversation" src={User5} />
            </ListItemAvatar>
            <ListItemText
              primary="First Conversation"
              secondary={
                <>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Malleh Jeng
                  </Typography>
                  {
                    " - Lorem ipsum dolor sit amet consectetur adipisicing elit. conse..."
                  }
                </>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Conversation" src={User3} />
            </ListItemAvatar>
            <ListItemText
              primary="Second Conversation"
              secondary={
                <>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Abdou Sarr
                  </Typography>
                  {
                    " - Lorem ipsum dolor sit amet consectetur adipisicing elit. conse..."
                  }
                </>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Conversation" src={User1} />
            </ListItemAvatar>
            <ListItemText
              primary="Third Conversation"
              secondary={
                <>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Adama Barrow
                  </Typography>
                  {
                    " - Lorem ipsum dolor sit amet consectetur adipisicing elit. conse..."
                  }
                </>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Conversation" src={User2} />
            </ListItemAvatar>
            <ListItemText
              primary="Forth Conversation"
              secondary={
                <>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Yahya Faye
                  </Typography>
                  {
                    " - Lorem ipsum dolor sit amet consectetur adipisicing elit. conse..."
                  }
                </>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Conversation" src={User4} />
            </ListItemAvatar>
            <ListItemText
              primary="First Conversation"
              secondary={
                <>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Musa Sowe
                  </Typography>
                  {
                    " - Lorem ipsum dolor sit amet consectetur adipisicing elit. conse..."
                  }
                </>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
        </List>
      </Box>
    </Box>
  );
};

export default RightBar;
