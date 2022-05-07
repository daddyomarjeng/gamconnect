import { Stack } from "@mui/material";
import Feed from "./components/Feed";
import RightBar from "./components/RightBar";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <Stack direction="row" spacing={2} justifyContent="space-between">
      <Sidebar />
      <Feed />
      <RightBar />
    </Stack>
  );
}

export default App;
