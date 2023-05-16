import React, { useEffect, useState } from 'react';
import { Box, Toolbar } from '@mui/material';
import Card from '@mui/joy/Card';

function Reading3Spread() {


    let [cards, setCards] = useState();
  
    const getCardById = async () => {
        //fetching data from tarot API
        const url = `http://localhost:3000/random/3`; //think about writing custom useFetch Hook...
        try {
            console.log('fetching random card')
            const response = await fetch(url);
            const result = await response.json();
            setCards(result) //result is an array that contains 3 card objects
            console.log('This is your random card:')
            console.log(result);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getCardById();
    }, []); //function will only run once at initial render, change dependency array if other behavior is needed

    return (
        <>
            {cards &&
                <Box component="main" sx={{ p: 3 }}>
                    <Toolbar />
                    <h1>3 CARDS READING</h1>
                    <h2>Your cards: {cards.map(card => card.name).join(' , ')}</h2>
                <Box sx= {{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around'}}>
                    {cards.map(card => <Card className="details-card" variant="outlined" ratio="7/12" sx={{ m: 2 }}>
                            <img src={card.img_drive} alt={card.name}></img>
                        </Card>)    
                    }
                </Box>
                </Box>
            }
        </>
    )
}

export default Reading3Spread