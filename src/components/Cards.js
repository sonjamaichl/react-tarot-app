import * as React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
//import { styled } from '@mui/material/styles';
//import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
//import CardImg from '/cards-img/m00'

/*const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));*/


function Cards() {
  //declaring a variable for the cards with a useState so that changing the value will rerender the component
  let [cards, setCards] = useState([]);
  
  const getCards = async () => {
   //fetching data from tarot API
   const url = 'http://localhost:3000/allcards'; //fetching from own API => make sure it actually runs on localhost 3000!!
   
   try{  
    console.log('fetching now')
    const response = await fetch(url);
     const result = await response.json();
     setCards(result.cards) //an array of card objects
     console.log(cards);
    } catch (error){
      console.log(error);
    }
  };

  useEffect(() => {
    getCards();
  }, []); //function will only run once at initial render, change dependency array if other behavior is needed
   

  return (
    <>
    {cards && 
      cards.map((card) => {
      return (
    <Grid xs={12} sm={6} md={4} lg={3} xl={2}>
        <Card variant="outlined" ratio="7/12" sx={{ maxWidth: 350, maxHeigth: 600 }}>
      <AspectRatio ratio="7/12">
        <div>
          <img src={require(`../cards-img/${card.img}`)} alt={card.name}></img>   
        </div>
      </AspectRatio>
    </Card>
        </Grid>)
      })}
      </>
  );
}

export default Cards