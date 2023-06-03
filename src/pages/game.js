import React, { useEffect, useState } from 'react'
import { Cards } from '../cards/cards'
import { Card, Grow, Paper } from '@mui/material';
import './game.css'
import Button from '@mui/material/Button';



export const Game = () => {
  const [selectedCard, setSelectedCard] = useState(null);
  const [selectedCards, setSelectedCards] = useState([]);
  const [round, setRound] = useState(1);
  const [currentDeck, setCurrentDeck] = useState(getNewDeck());

  //shuffles the cards and cuts deck in middle to get 3 random cards//
  function getNewDeck() {
    const shuffled = Cards.sort(() => 0.5 - Math.random());
    return shuffled.slice(8, 11);
  }

  //sets the selected card to the card that was clicked//
  const handleCardSelection = (event) => {
    const selectedCard = currentDeck.find((card) => card.description === event.target.value);
    setSelectedCard(selectedCard);
  };

  

  //finalizes selected card once the user clicks next//
  const handleNextButtonClick = () => {
    if (selectedCard) {
      setSelectedCards((prevSelectedCards) => [...prevSelectedCards, selectedCard]);
      setSelectedCard(null);
//allows the user to see results after 3 selections//
      if (selectedCards.length === 3) {
        console.log(selectedCards);
        

       
        setSelectedCards([]);
        setSelectedCard(null);
        setCurrentDeck(getNewDeck());
        setRound(1);
        return;
      }
    }
//sets round so user knows how many selections they have made//
    setCurrentDeck(getNewDeck());
    setRound((prevRound) => prevRound + 1);
  };
  

    
  return (
   
    <div className='wrapper'>
      {selectedCards.length < 3 ? (
        <>
      <div className='header'>
       <h1>PICK A CARD</h1>
       <h2>Round {round}/3</h2>
        </div>
    
    <div className='game'>
    
    <div className='container'>
      
    {currentDeck.map((card) => (

      <div className="card" key={card.id}>
        <Grow in={true}
        style={{ transformOrigin: '0 0 0' }}
        {...(true ? { timeout: 1500 } : {})}>
       <label>
         <input type="radio"
          name="test" 
          value={card.description}
          checked={selectedCard === card}
          onChange={handleCardSelection}
          />
         <img src={card.image} alt={card.name}/>
        </label>
        </Grow>
      </div>
       
      ))}
    </div>
    <button className="next"onClick={handleNextButtonClick}>Next</button>
       
    </div>
    </>
    ) : (
      <div className='results'>
        <div className='header'>
        <h1>RESULTS</h1>
        </div>
        <div className='gameResults'>
          {selectedCards.slice(0,1).map((card) => (
            <div className='past' key={card.id}>
              <div className='fortune'>
              <h2>PAST</h2>
              <p>{card.past}</p>
              </div>
            </div>
          ))}
          {selectedCards.slice(1,2).map((card) => (
            <div className='present' key={card.id}>
              <div className='fortune'>
              <h2>PRESENT</h2>
              <p>{card.present}</p>
              </div>
            </div>
          ))}
          {selectedCards.slice(2,3).map((card) => (
            <div className='future' key={card.id}>
              <div className='fortune'>
              <h2>FUTURE</h2>
              <p>{card.future}</p>
              </div>
            </div>
          ))}
          <div className='buttonAlign'>
          <a href='/tarotcard/game'>
           <button variant='contained' href='/tarotcard/game'> Play Again </button>
           </a>
           <a href='/tarotcard/'>
           <button variant='contained' href='/tarotcard/'> Home </button>
            </a>
          </div>
        </div>
       
      </div>
    )}
  </div>
);
};



