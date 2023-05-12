import React from 'react';
import Searchbar from '../components/Searchbar/Searchbar';
import CardsContainer from '../components/Cards/CardsContainer';
import Pagination from '../components/Pagination/Pagination';
import { Box, Toolbar } from '@mui/material';

function Wiki() {
  return (
    <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
      <Searchbar />
      <CardsContainer />
      <Pagination />
    </Box>
  );
};

export default Wiki;