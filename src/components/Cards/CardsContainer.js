import * as React from "react";
//import { useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import Cards from "./Cards";
import UserInfo from "./UserInfo";
import { useState, useEffect } from 'react';

export default function CardsContainer({searchInput, searchBy}) {

//declaring a variable for the cards with a useState so that changing the value will rerender the component
  let [cards, setCards] = useState([]);

  const url = searchInput === ''? 'http://localhost:3000/allcards' : `http://localhost:3000/${searchBy}/${searchInput.toLowerCase()}`; //fetching from own API => make sure it actually runs on localhost 3000!!
   console.log(url);
  
  const getCards = async (url) => {
   //fetching data from tarot API
   

   try{  
    console.log('fetching now')
    const response = await fetch(url);
     const result = await response.json();
     setCards(searchInput === '' ? result.cards : result) //cards is now an array of card objects
     //when fetching from endpoint /allcards we get an object with a property of cards which contains the array of cards, so we use result.cards
     //when fetching from endpoint /name/:searchInput we get an array of card objects we can use directly!
    } catch (error){
      console.log(error);
    }
  };

  useEffect(() => {
    getCards(url);
  }, [searchInput, searchBy]); //function should run when opening the page & whenever the value of the searchInput changes
   

  return (
    <Box sx={{ flexGrow: 1, m: '2rem' }}>
      <Grid container spacing={2} >
        {/*insert grid items = cards here + display UserInfo on search results, if user has typed in search input*/}
        {(searchInput !== '') && <UserInfo searchInput={searchInput} searchBy={searchBy} numOfResults={cards.length} />}
        <Cards cards={cards} />
      </Grid>
    </Box>
  );
}