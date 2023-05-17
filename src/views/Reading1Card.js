import { Box, Toolbar } from '@mui/material';
import React, { useState, useEffect } from 'react';
import Card from '@mui/joy/Card';
import randomBoolean from '../utils/randomBoolean';
import backImg from '../utils/backOfCardsImgSrc';


function Reading1Card() {

  let [card, setCard] = useState();
  let [upright, setUpright] = useState();

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
    setUpright(randomBoolean());  //using return value of randomBoolean to decide if the card is upright or reversed
    } catch (error){
      console.log(error);
    }
  };

  useEffect(() => {
    getCardById();
  }, []); //function will only run once at initial render, change dependency array if other behavior is needed

  

  let [clicked, setClicked] = useState(false);
  function handleClick() {
    console.log('card was clicked, now the img src should change...');
    setClicked(true);
  }

  //let h2text = upright ? card.name : `${card.name} reversed`;

    return (
    <>
      {card &&
    <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
          <h1>1 CARD READING</h1>
            <h2>{clicked? upright? `Your card: ${card.name}` : `Your card: ${card.name} reversed` : 'Click on the card to see it...'}</h2>    
        
            <Card className="details-card" variant="outlined" ratio="7/12" sx={{ m: 2 }}>
              <img className={upright? '':'reversed'} src={clicked ? card.img_drive : backImg} alt={clicked ? card.name : "back side of tarot card"} onClick={handleClick}></img>
                </Card>

        </Box>
            }
        </>
    )
}

export default Reading1Card

//src={card.img_drive} alt={card.name}