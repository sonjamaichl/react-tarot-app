import React from 'react'
import Searchbar from './Searchbar/Searchbar'
import CardsContainer from './Cards/CardsContainer'
import Pagination from './Pagination/Pagination'

function App() {
  return (
    <>
    <Searchbar />
    <CardsContainer />   {/* should there be a Main Component and GridContainer inside?? or just one component for gridcontainer & items/cards??*/}
    <Pagination />
    </> 
  );
};

export default App;