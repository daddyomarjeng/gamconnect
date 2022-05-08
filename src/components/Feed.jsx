import { Favorite, FavoriteBorder, MoreVert, Share } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  IconButton,
  Typography,
} from "@mui/material";
import React from "react";
import PostImg from "../assets/p.jpg";

const Feed = () => {
  return (
    <Box flex={4} p={2}>
      <Card>
        {/* top of card */}
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: "red" }} aria-label="feed-avatar">
              DOJ
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVert />
            </IconButton>
          }
          title="You are all Invited to Rohey Cham's Birthday"
          subheader="January 20, 2021"
        />
        {/* image */}
        <CardMedia
          component="img"
          height="20%"
          image={PostImg}
          alt="Post by DOJ"
        />
        {/* card text */}
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt a
            quam itaque maxime tenetur quaerat hic assumenda labore animi, vel
            iste unde ullam et qui voluptatem iure recusandae corporis non!
          </Typography>
        </CardContent>
        {/* card action */}
        <CardActions disableSpacing>
          <IconButton aria-label="add to favourites">
            {/* <Favorite /> */}
            <Checkbox
              icon={<FavoriteBorder />}
              checkedIcon={<Favorite sx={{ color: "red" }} />}
            />
          </IconButton>
          <IconButton aria-label="share">
            <Share />
          </IconButton>
        </CardActions>
      </Card>
    </Box>
  );
};

export default Feed;
