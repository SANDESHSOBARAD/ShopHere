import React from "react";
import { Button, Box } from "@mui/material";
import NavBar from "./components/NavBar";
import {Routes, Route} from 'react-router-dom'
import HomePage from "./pages/HomePage";
import CreatePage from "./pages/CreatePage";
function App() {
  return (
    <Box sx={{minHeight: '100vh',}}>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/create" element={<CreatePage/>}/>
      </Routes>

    </Box>
  );
}

export default App;
