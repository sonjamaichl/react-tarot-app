import * as React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Grid from '@mui/material/Unstable_Grid2';
//import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
//import CardActions from '@mui/material/CardActions';
//import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
//import Box from '@mui/joy/Box';
import Modal from './Modal'




function Cards(props) {

  console.log('These are the props at Cards Component:');
  console.log(props);
  console.log('This is the pageNum:');
  console.log(props.pageNum);
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
     console.log('These are all the cards:')
     console.log(cards);
    } catch (error){
      console.log(error);
    }
  };

  useEffect(() => {
    getCards();
  }, []); //function will only run once at initial render, change dependency array if other behavior is needed
   
  //eventHandler for 'Learn More' Button (opens/displays modal)
function handleClick(){
  return <Modal name='TAROT'/>;
}

  return (
    <>
    {cards &&
      cards.map((card, i) => {   //for pagination: check if i is greater than or equal to pageNum-1*12 and less than pageNum*12 (for 12 cards per page)
      return (
    <Grid className='flip-card' xs={12} sm={6} md={4} lg={3} xl={2} key={card.name}>
      
        <Card className='flip-card-inner' variant="outlined" ratio="7/12" >
          
          <img className = 'flipcard-front' src={require(`../Cards/cards-img/${card.img}`)} alt={card.name}></img>   
    
      
      <div className='flip-card-back'>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {card.arcana}
        </Typography>
        <Typography variant="h5" component="div">
          {card.name}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {card.keywords.map(keyword => (<div>{keyword}</div>))} 
        </Typography>
        {(card.arcana === 'Major Arcana') && <Typography variant="body2"> 
          Archetype: {card.Archetype}
        </Typography>}                          {/*only major arcana cards have archetype property!*/}
        <Button size="small" onClick={handleClick}>Learn More</Button>
      </div>
    </Card>
    
        </Grid>)
      })}
      </>
  );
}

export default Cards