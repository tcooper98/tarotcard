import React from 'react'
import { Cards } from '../cards/cards'
import { Card } from '@mui/material';
import './game.css'
import Button from '@mui/material/Button';



export const Game = () => {
    const shuffled = Cards.sort(() => 0.5 - Math.random());
    var cutDeck = shuffled.slice(8, 11);

    console.log(shuffled);

    
  return (
   
    <div className='wrapper'>
      <div className='header'>
       <h1>✤ PICK A CARD</h1>
        </div>
    
    <div className='game'>
       
    <div className='container'>
      
        {cutDeck.map((card) => {

    return (
   
    
     
      <div className="card" key={card.id}>
        
       <label>
         <input type="radio" name="test" value={card.description}/>
         <img src={card.image} alt={card.name}/>
        </label>
        
      </div>

      
      
    )
    })}
    </div>
    <Button variant="contained" href="/game">Next</Button>
  
    </div>
    </div>
    

  )
}
