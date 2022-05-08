import React, { useState } from "react";
import { Tooltip, Fab, Modal, Box } from "@mui/material";
import { Add } from "@mui/icons-material";
const AddButton = () => {
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

      <Modal
        open={open}
        onClose={(e) => setOpen(false)}
        aria-labelledby="add-post-modal"
        aria-describedby="add-post-modal-description"
      >
        <Box>Hi from Modal</Box>
      </Modal>
    </>
  );
};

export default AddButton;
