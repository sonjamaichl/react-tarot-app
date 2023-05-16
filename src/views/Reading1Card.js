import { Box, Toolbar } from '@mui/material';
import React, { useState, useEffect } from 'react';
import Card from '@mui/joy/Card';


function Reading1Card() {

  let [card, setCard] = useState();
  
  const getCardById = async () => {
    //fetching data from tarot API
   const url = `http://localhost:3000/random/1`; //think about writing custom useFetch Hook...
   try{                                                                        
    console.log('fetching random card')
    const response = await fetch(url);
     const result = await response.json();
     setCard(result[0]) //result is an array that contains one single card object
     console.log('This is your random card:')
     console.log(result);
    } catch (error){
      console.log(error);
    }
  };

  useEffect(() => {
    getCardById();
  }, []); //function will only run once at initial render, change dependency array if other behavior is needed

    return (
    <>
      {card &&
    <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
          <h1>1 CARD READING</h1>
          <h2>Your card: {card.name}</h2>
        
                <Card className="details-card" variant="outlined" ratio="7/12" sx={{m: 2}}>
                  <img src={card.img_drive} alt={card.name}></img>
                </Card>

        </Box>
            }
        </>
    )
}

export default Reading1Card