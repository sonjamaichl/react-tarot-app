import React from 'react';
import { Box, Toolbar } from '@mui/material';
import { useEffect, useState } from 'react';

function Details() {
    console.log(window.location)
    console.log(window.location.href);
    console.log(window.location.href.slice(-3));

    let [card, setCard] = useState([]);

    const getCardById = async () => {
   //fetching data from tarot API
   const url = `http://localhost:3000/id/${window.location.href.slice(-3)}`; //using last 3 characters (=id) od current page's url to know what to fetch
   try{  
    console.log('fetching card by id...')
    const response = await fetch(url);
     const result = await response.json();
     setCard(result) //an array of card objects
     console.log('This is the card for the current page:')
     console.log(card);
    } catch (error){
      console.log(error);
    }
  };

  useEffect(() => {
    getCardById();
  }, []); //function will only run once at initial render, change dependency array if other behavior is needed
   

    return (
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
            <h1>Details of { card.name }</h1>
    </Box>
  )
}

export default Details