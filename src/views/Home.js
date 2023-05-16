import React from 'react';
import { Box, Toolbar } from '@mui/material';

function Home() {
    return (
        <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
        <h1>HOME</h1>
        <p>Some info about tarot in general will be displayed here plus two buttons to direct user to either wiki page to learn about the cards and their meaning or reading page"</p>
        </Box>
    );
};

export default Home;