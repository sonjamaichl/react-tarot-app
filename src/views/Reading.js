import React from 'react';
import { Box, Toolbar } from '@mui/material';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom';

function Reading() {
    return (
        <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
        <h1>READING</h1>
        <p>Get your free online Tarot Reading now!</p>
        <p>For some quick insights choose the 1 card reading. For a more detailed perspective choose the 3 cards spread.</p>
        <Stack spacing={2} direction="row">
      <Button component={NavLink} to='1' variant="contained">1 card reading</Button>
      <Button component={NavLink} to='3' variant="outlined">3 cards spread</Button>
        </Stack>

        </Box>
  )
}

export default Reading