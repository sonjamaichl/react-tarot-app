import * as React from 'react';
//import { useState, useEffect } from 'react';
import Grid from '@mui/material/Unstable_Grid2';
//import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
//import CardActions from '@mui/material/CardActions';
//import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { NavLink } from 'react-router-dom';
//import Box from '@mui/joy/Box';




function Cards({cards}) {

  //console.log('These are the props at Cards Component:');
  //console.log(props);

  

  return (
    <>
    {cards &&
      cards.map((card, i) => {   //for pagination: check if i is greater than or equal to pageNum-1*12 and less than pageNum*12 (for 12 cards per page)
      return (
    <Grid className='flip-card' xs={12} sm={6} md={4} lg={3} xl={2} key={card.name}>
      
        <Card className='flip-card-inner' variant="outlined" ratio="7/12" >
          
          <img className = 'flipcard-front' src={card.img_drive} alt={card.name}></img>   
    
      
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
              <Button component={NavLink} to={card.id} size="small">Learn More</Button>
      </div>
    </Card>
    
        </Grid>)
      })}
      </>
  );
}

export default Cards