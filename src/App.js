import { Stack } from "@mui/material";
import { Box } from "@mui/system";
import Feed from "./components/Feed";
import RightBar from "./components/RightBar";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import AddButton from "./components/AddButon";

function App() {
  return (
    <Box>
      <Navbar />
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <Sidebar />
        <Feed />
        <RightBar />
      </Stack>
      <AddButton />
    </Box>
  );
}

export default App;
