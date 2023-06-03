import React from 'react'
import './info.css'
import Header from '../components/header'
import { History } from '../components/history'
import { Card, CardContent, CardMedia } from '@mui/material'


export const Info = () => {
  return (
    <div className='infoWrapper'>
    <Header/>
    <div>
    <div className='info'>
      <div className='history'>
      <div className='historyHeader'>
      <h1>HISTORY OF</h1>
      <h2>TAROT</h2>
      <div className='background'>
      <p>The history of tarot cards can be traced back to the 15th century when they first emerged in Europe. The exact origins of tarot cards remain somewhat mysterious, with various theories surrounding their creation. One popular belief suggests that tarot cards were initially used as playing cards in Italy. However, it was during the 18th century that tarot cards began to gain prominence as a tool for divination and occult practices. Influenced by the esoteric and mystical movements of the time, tarot cards started to be associated with fortune-telling and spiritual guidance. The iconic 78-card deck, consisting of major and minor arcana, became established, with each card symbolizing different aspects of life, emotions, and spiritual journeys. Over the years, the tarot has evolved and expanded, with various interpretations, artistic styles, and deck designs. Today, tarot cards continue to be widely used for self-reflection, personal growth, and accessing intuitive wisdom, making them an enduring and fascinating aspect of human culture.</p>
      </div>
      </div>
    

      </div>
      <div className='timeline'>
      <History/>
      </div>
      <div className='how'>
      <div className='howHeader'>
      <h1>HOW IT WORKS</h1>
      </div>
      <div className='howp1'>
      <p>The online tarot game starts by randomly shuffling an array of cards. Once the array is presented in a random order three elements of the array are sliced from the middle to simulate cutting the deck. The user is then presented with the three elements to select from. Once the user clicks the card they would like their choice is set as the selected card. This choice is finalized with the next button. This process will repeat until the user makes three selections. Once the user selects all three cards they will be presented with the results page that shows a generic past, present, and future fortune. These fortunes are pre-written and depend on the order in which the user picks each card.</p>
      </div>
      <div className='howp2'>
        <p>Actual tarot readings have a lot more factors involved that depend on the circumstance. To start you shuffle the deck thoroughly while concentrating on your intention or question you seek guidance for. Once you are finished shuffling you pick a specific number of cards based on the type of spread. You can then turn over the cards. When interpreting the cards consider their position, relationship, and narrative. The interpretation can be guided by traditional meanings, personal association, or intuitive impression. Many people view tarot as a way to connect with your intuition as the meaning is up to interpretation</p>
      </div>
      </div>

      <div className='sets'>
        
      <h1>TAROT SETS</h1>
      <div className='setsWrapper'>
      <div>
        <a href='https://www.etsy.com/listing/1112255840/the-telezma-tarot' rel="noreferrer" target="_blank">
       <Card sx={{ width: 400, marginLeft: 10, marginRight:10 }}>
        <CardMedia
        sx={{ height: 600, margin: 3 }}
        image="https://i.etsystatic.com/29360631/r/il/79ee30/3630365517/il_1588xN.3630365517_kn62.jpg"
        />
        <CardContent>
          <h3>telezma tarot</h3>
          <p>$74.78</p>
        </CardContent>
       </Card>
        </a>
       </div>
        <div>
      <a href='https://www.etsy.com/listing/1126481255/b-grade-red-edge-mars-power-tarot-deck?click_key=958074e15eafc2bd4a6ad0c1dc9f273e56eebd13%3A1126481255&click_sum=1f2ecb3c&ref=sold_out-2' rel="noreferrer" target="_blank">
       <Card sx={{ width: 400, marginLeft: 10, marginRight:10  }}>
        <CardMedia
        sx={{ height: 600, margin: 3 }}
        image="https://i.etsystatic.com/15986728/r/il/ef7db6/3625412355/il_fullxfull.3625412355_ef3z.jpg"
        />
        <CardContent>
          <h3>mars power</h3>
          <p>$51.23</p>
        </CardContent>
       </Card>
        </a>
       </div>
       <div>
      <a href='https://www.barnesandnoble.com/w/the-gentle-thrills-tarot-isa-beniston/1141659029?ean=9781401971779' rel="noreferrer" target="_blank">
       <Card sx={{ width: 400, marginLeft: 10, marginRight:10  }}>
        <CardMedia
        sx={{ height: 600, margin: 3 }}
        image="https://static01.nyt.com/images/2022/01/18/t-magazine/art/19tmag-tarot-slide-0DZT/19tmag-tarot-slide-0DZT-superJumbo.jpg?quality=75&auto=webp"
        />
        <CardContent>
          <h3>Gentle Thrills</h3>
          <p>$29.99</p>
        </CardContent>
       </Card>
        </a>
       </div>
       <div>
       <a href='https://dust2onyx.com/' rel="noreferrer" target="_blank">
       <Card sx={{ width: 400, marginLeft: 10, marginRight:10  }}>
        <CardMedia
        sx={{ height: 600, margin: 3 }}
        image="https://64.media.tumblr.com/0fa38af8871792a6091f4452a754b265/38010341d18353a9-a6/s1280x1920/fa3b74a7715b5562e8dfc214d88e2b11b86e8911.jpg"
        />
        <CardContent>
          <h3>dust || onyx</h3>
          <p>$126.00</p>
        </CardContent>
       </Card>
        </a>
       </div>
      </div>
      </div>
      </div>
      </div>
    </div>
  )
}
