import React from 'react'
import './home.css'
import Button from '@mui/material/Button';
import hero from '../images/crystal-ball.gif'
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
      
      <a href="/game">
      <button variant="contained" href="/game">Start</button>
      </a>
      <a href="/info">
      <button variant="contained" href="/info">Info</button>
      </a>
      </div>
      <div className='home-image'>
      {/* <img src={hero} alt="tarot" /> */}
      </div>
    </div>
    </div>
  )
}
