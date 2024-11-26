import React, { useState } from 'react';
import { AppBar, Button, Container, Toolbar, Typography, IconButton, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import StorefrontIcon from '@mui/icons-material/Storefront';
import AddBoxIcon from '@mui/icons-material/AddBox';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

const NavBar = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="static" sx={{ backgroundColor: darkMode ? '#1d698f' : '#1673a1' }}>
        <Container maxWidth="xl">
          <Toolbar>
            <Button
              component={Link}
              to="/"
              sx={{
                display: 'flex',
                alignItems: 'center',
                textTransform: 'none', // Prevent text from being uppercase
                color: 'inherit', // Use default text color
              }}
            >
              <StorefrontIcon sx={{ m: 0.5, color: darkMode ? 'white' : 'black', fontSize: '40px' }} />
              <Typography sx={{ color: darkMode ? 'white' : 'black', fontSize: '25px', fontWeight:'800' }}>
                ShOpHeRe
              </Typography>
            </Button>

            <Box sx={{ flexGrow: 1 }} />

            <IconButton
              component={Link}
              to="/create" // Replace "/add" with the path of your desired page
              sx={{ color: darkMode ? 'white' : 'black' }}
            >
              <AddBoxIcon sx={{ fontSize: '40px' }} />
            </IconButton>

            <IconButton onClick={toggleDarkMode} sx={{ color: darkMode ? 'white' : 'black' }}>
              {darkMode ? <LightModeIcon sx={{ fontSize: '40px' }} /> : <DarkModeIcon sx={{ fontSize: '40px' }} />}
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
};

export default NavBar;
