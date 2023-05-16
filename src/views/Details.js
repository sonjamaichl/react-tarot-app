import React from 'react';
import { Box, Toolbar } from '@mui/material';
import { useEffect, useState } from 'react';
import Card from '@mui/joy/Card';
import NotFound404 from './NotFound404';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

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
          <Box sx={{ display: 'flex', flexDirection: 'column', flexWrap: 'wrap', alignItems: 'center'}}>
              
            <Box sx= {{mb: 5, ml: 5, width: '100%'}}>
                <h1>{card && card.name.toUpperCase()}</h1>
                {card && <Stack direction="row" spacing={1}>
                  {card.keywords.map(keyword => <Chip key={keyword} label={keyword} variant="outlined" />)}
                </Stack>}
            </Box>
            
            <Box sx={{ display: 'flex', flexWrap: 'wrap', width: '100%'}}>        
              
                <Card className="details-card" variant="outlined" ratio="7/12" sx={{m: 2}}>
                  <img src={card.img_drive} alt={card.name}></img>
                </Card>

              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', ml: 5}}>
                <h2>Meaning</h2>
                
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', width: '100%'}}>
                  <h3>Light</h3>
                  <ul>
                    {card.meanings.light.map(entry => <li key={entry}>{entry}</li>)}
                  </ul>
                </Box>
                
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', width: '100%'}}>
                  <h3>Shadow</h3>
                  <ul>
                    {card.meanings.shadow.map(entry => <li key={entry}>{entry}</li>)}
                  </ul>
                </Box>      
              </Box>

              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', ml: 5 }}>
                {card.archetype && <><h2>Archetype</h2><p>{card.archetype}</p></>}
                <h2>Questions to ask</h2>
                <ul>
                  {card.questions.map(question => <li key={question}>{question}</li>)}
                </ul>
                
              </Box>

            </Box>

          </Box>
           
        </Box>);
};

export default Details