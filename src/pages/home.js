import React from 'react'
import './home.css'
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
export const Home = () => {
  return (
    <div className='home-wrapper'>
    <div className='home'>
      <div className='home-header'>
      <h1> <AutoAwesomeIcon sx={{ fontSize: "4.5vw" }} />TAROT CARD READING</h1>
      </div>
      <div className='home-body'>
      <p>pick a card each round to learn your future</p>
      
      <a href="/tarotcard/game">
      <button variant="contained" href="/tarotcard/game">Start</button>
      </a>
      <a href="/tarotcard/info">
      <button variant="contained" href="/tarotcard/info">Info</button>
      </a>
      </div>
      <div className='home-image'>
      {/* <img src={hero} alt="tarot" /> */}
      </div>
    </div>
    </div>
  )
}
