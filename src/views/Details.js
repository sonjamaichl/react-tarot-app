import React from 'react';
import { Box, Toolbar } from '@mui/material';
import { useEffect, useState } from 'react';
import Card from '@mui/joy/Card';
import NotFound404 from './NotFound404';

function Details() {
    //console.log(window.location.href.slice(-3));      => use useParams() Hook instead (and maybe name instead of id because it would be a nicer url?)

  let [card, setCard] = useState();
  
  const getCardById = async () => {
    //fetching data from tarot API
   const id = window.location.href.slice(-3); 
   const url = `http://localhost:3000/id/${id}`; //using last 3 characters (=id) od current page's url to know what to fetch
   try{                                                                        //could also use useParams() Hook instead 
    console.log('fetching card by id...')
    const response = await fetch(url);
     const result = await response.json();
     setCard(result) //a single card object
     console.log('This is the card for the current page:')
     console.log(result);
    } catch (error){
      console.log(error);
    }
  };

  useEffect(() => {
    getCardById();
  }, []); //function will only run once at initial render, change dependency array if other behavior is needed
   
    return (
        //if there are no results for this card (could happen, if user types url manually instead of navigating here from browse), display 404 page
      !card ? <NotFound404 /> : 
          <Box component="main" sx={{ p: 3 }}>
                <Toolbar />
                <Box>
                    <h1>{card.name && card.name.toUpperCase()}</h1>
                    <Card className="details-card" variant="outlined" ratio="7/12" >
                        <img src={card.img_drive} alt={card.name}></img>
    </Card> 
                </Box>
           
            </Box>);
};

export default Details