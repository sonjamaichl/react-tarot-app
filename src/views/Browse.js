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

  let [searchBy, setSearchBy] = useState('name');   //if user chooses nothing search will be by name by default
  function handleSelect(searchBy) {
    setSearchBy(searchBy);
  }

  return (
    <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
      <Searchbar handleSearchInput={handleSearchInput} handleSelect={handleSelect} />
      <CardsContainer searchInput={searchInput} searchBy={searchBy} />
    </Box>
  );
};

export default Wiki;