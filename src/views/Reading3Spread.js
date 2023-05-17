import React, { useEffect, useState } from 'react';
import { Box, Toolbar } from '@mui/material';
import Card from '@mui/joy/Card';
import randomBoolean from '../utils/randomBoolean';

function Reading3Spread() {


    let [cards, setCards] = useState();
  
    const getCardById = async () => {
        //fetching data from tarot API
        const url = `http://localhost:3000/random/3`; //think about writing custom useFetch Hook...
        try {
            console.log('fetching 3 random cards')
            const response = await fetch(url);
            const result = await response.json();
            setCards(result) //result is an array that contains 3 card objects
            console.log('These are your 3 random cards:')
            console.log(result);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getCardById();
    }, []); //function will only run once at initial render, change dependency array if other behavior is needed

    const uprightValues = cards && cards.map(card => randomBoolean());   //creating an array of 3 random boolean values, 1 for each card
    console.log('these are the randomBooleans for your reading: '+uprightValues);

    return (
        <>
            {cards &&
                <Box component="main" sx={{ p: 3 }}>
                    <Toolbar />
                    <h1>3 CARDS READING</h1>
                    <h2>Your cards: {cards.map((card, i) => uprightValues[i] ? card.name : `${card.name} reversed`).join(' , ')}</h2>
                <Box sx= {{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around'}}>
                        {cards.map((card, i) => <Card key={card.name} className="details-card" variant="outlined" ratio="7/12" sx={{ m: 2 }}>
                            <img className={!uprightValues[i] && 'reversed'}src={card.img_drive} alt={card.name}></img>
                        </Card>)    
                    }
                </Box>
                </Box>
            }
        </>
    )
}

export default Reading3Spread