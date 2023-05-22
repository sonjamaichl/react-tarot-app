import React, { useState } from 'react';
import Searchbar from '../components/Searchbar/Searchbar';
import CardsContainer from '../components/Cards/CardsContainer';
//import Pagination from '../components/Pagination/Pagination';
import { Box, Toolbar } from '@mui/material';
import Pagination from '../components/Pagination/Pagination';


function Wiki() {

  let [searchInput, setSearchInput] = useState('');
  function handleSearchInput(searchInput) {
    setSearchInput(searchInput);
  }

  let [searchBy, setSearchBy] = useState('name');   //if user chooses nothing search will be by name by default
  function handleSelect(searchBy) {
    setSearchBy(searchBy);
  }

  let [isLoading, setIsLoading] = useState(true);
  function loadingTrue() {
    setIsLoading(true);
    console.log('loading true: '+isLoading);
  }

  function loadingFalse() {
    setIsLoading(false);
    console.log('loading false: '+isLoading);
  }

  let [numOfCards, setNumOfCards] = useState(null);
  function getNumOfCards(numOfCards) {
    setNumOfCards(numOfCards);
  }

  let [pageNum, setPageNum] = useState('1');
  function handlePageSelect(pageNum) {
    setPageNum(pageNum);
  }



  return (
    <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
      <Searchbar handleSearchInput={handleSearchInput} handleSelect={handleSelect} />
      <CardsContainer searchInput={searchInput} searchBy={searchBy} loadingTrue={loadingTrue} loadingFalse={loadingFalse} getNumOfCards={getNumOfCards} pageNum={pageNum} handlePageSelect={handlePageSelect} />
      {!isLoading && <Pagination numOfCards={numOfCards} handlePageSelect={handlePageSelect} />}
    </Box>
  );
};

export default Wiki;