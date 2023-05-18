import React from 'react'
import './home.css'
import Button from '@mui/material/Button';
export const Home = () => {
  return (
    <div className='home'>
      <h1>TAROT CARD READING</h1>
      <p>pick a card in each round to learn your future</p>
      <Button variant="contained" href="/game">Start</Button>
      <Button variant="contained" href="/info">Info</Button>

    </div>
  )
}
