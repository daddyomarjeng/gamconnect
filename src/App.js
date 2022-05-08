import { createTheme, Stack, ThemeProvider } from "@mui/material";
import { Box } from "@mui/system";
import Feed from "./components/Feed";
import RightBar from "./components/RightBar";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import AddButton from "./components/AddButon";
import { useState } from "react";

function App() {
  const [mode, setMode] = useState("light");

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor="background.default" color="text.primary">
        <Navbar />
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <Sidebar setMode={setMode} mode={mode} />
          <Feed />
          <RightBar />
        </Stack>
        <AddButton />
      </Box>
    </ThemeProvider>
  );
}

export default App;
