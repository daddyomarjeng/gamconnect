import React from "react";
import { Tooltip, Fab } from "@mui/material";
import { Add } from "@mui/icons-material";
const AddButton = () => {
  return (
    <>
      <Tooltip
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
    </>
  );
};

export default AddButton;
