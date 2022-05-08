import React, { useState } from "react";
import {
  Tooltip,
  Fab,
  Modal,
  Box,
  styled,
  Typography,
  Avatar,
  TextField,
  Stack,
  ButtonGroup,
  Button,
} from "@mui/material";
import {
  Add,
  DateRange,
  EmojiEmotions,
  Image,
  PersonAdd,
  VideoCameraBack,
} from "@mui/icons-material";
import DOJImg from "../assets/0.jpg";

const AddButton = () => {
  const StyledModal = styled(Modal)({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  });

  const UserBox = styled(Box)({
    display: "flex",
    gap: "10px",
    alignItems: "center",
    marginBottom: "20px",
  });

  const [open, setOpen] = useState(false);
  return (
    <>
      <Tooltip
        onClick={(e) => setOpen(true)}
        title="Add Post"
        sx={{
          position: "fixed",
          bottom: 30,
          left: { xs: "calc(50% - 25px)", md: 30 },
          // if small calculate 50% of width  -  25px(the borderradius of the button)
        }}
      >
        <Fab color="primary" aria-label="add button">
          <Add />
        </Fab>
      </Tooltip>

      <StyledModal
        open={open}
        onClose={(e) => setOpen(false)}
        aria-labelledby="add-post-modal"
        aria-describedby="add-post-modal-description"
      >
        <Box width={400} height={280} bgcolor="white" p={3} borderRadius={5}>
          <Typography variant="h6" color="gray" textAlign="center">
            Create Post
          </Typography>
          <UserBox>
            <Avatar sx={{ width: 30, height: 30 }} src={DOJImg} />
            <Typography>DOJ</Typography>
          </UserBox>
          <TextField
            sx={{ width: "100%" }}
            placeholder="Whats on your mind"
            multiline
            rows={3}
            variant="standard"
          />
          <Stack direction="row" gap={1} mt={2} mb={3}>
            <EmojiEmotions color="primary" />
            <Image color="secondary" />
            <VideoCameraBack color="success" />
            <PersonAdd color="error" />
          </Stack>
          <ButtonGroup
            variant="contained"
            aria-label="Add Post Button Group"
            fullWidth
          >
            <Button>Post</Button>
            <Button sx={{ width: "100px" }}>
              <DateRange />
            </Button>
          </ButtonGroup>
        </Box>
      </StyledModal>
    </>
  );
};

export default AddButton;
