import React, { useState } from 'react';
import Searchbar from '../components/Searchbar/Searchbar';
import CardsContainer from '../components/Cards/CardsContainer';
//import Pagination from '../components/Pagination/Pagination';
import { Box, Toolbar } from '@mui/material';
import Pagination from '../components/Pagination/Pagination';


function Wiki() {

  let [searchInput, setSearchInput] = useState('');

  let [searchBy, setSearchBy] = useState('name');   //if user chooses nothing search will be by name by default

  let [isLoading, setIsLoading] = useState(true);

  let [numOfCards, setNumOfCards] = useState(null);

  let [pageNum, setPageNum] = useState('1');



  return (
    <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
      <Searchbar handleSearchInput={setSearchInput} handleSelect={setSearchBy} />
      <CardsContainer searchInput={searchInput} searchBy={searchBy} changeIsLoading={setIsLoading} getNumOfCards={setNumOfCards} pageNum={pageNum} handlePageSelect={setPageNum} />
      {!isLoading && <Pagination numOfCards={numOfCards} handlePageSelect={setPageNum} />}
    </Box>
  );
};

export default Wiki;