import React, { useState } from 'react';
import Searchbar from '../components/Searchbar/Searchbar';
import CardsContainer from '../components/Cards/CardsContainer';
import Pagination from '../components/Pagination/Pagination';
import { Box, Toolbar } from '@mui/material';


function Wiki() {
  let [searchInput, setSearchInput] = useState('');
  function handleSearchInput(searchInput) {
    setSearchInput(searchInput);
  }
  return (
    <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
      <Searchbar handleSearchInput={handleSearchInput} />
      <CardsContainer searchInput={searchInput} />
      <Pagination />
    </Box>
  );
};

export default Wiki;