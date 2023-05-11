import React from 'react';
import Searchbar from '../components/Searchbar/Searchbar';
import CardsContainer from '../components/Cards/CardsContainer';
import Pagination from '../components/Pagination/Pagination';

function Wiki() {
  return (
    <>
      <Searchbar />
      <CardsContainer />
      <Pagination />
    </> 
  );
};

export default Wiki;