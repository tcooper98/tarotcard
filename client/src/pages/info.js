import React from 'react'
import './info.css'
import Header from '../components/header'
import historyImg from '../images/history.jpg'
import { History } from '../components/history'


export const Info = () => {
  return (
    <div className='infoWrapper'>
    <Header/>
    <div>
    <div className='info'>
      <div className='history'>
      <div className='historyHeader'>
      <h1>HISTORY</h1>
      <p>The history of tarot cards can be traced back to the 15th century when they first emerged in Europe. The exact origins of tarot cards remain somewhat mysterious, with various theories surrounding their creation. One popular belief suggests that tarot cards were initially used as playing cards in Italy. However, it was during the 18th century that tarot cards began to gain prominence as a tool for divination and occult practices. Influenced by the esoteric and mystical movements of the time, tarot cards started to be associated with fortune-telling and spiritual guidance. The iconic 78-card deck, consisting of major and minor arcana, became established, with each card symbolizing different aspects of life, emotions, and spiritual journeys. Over the years, the tarot has evolved and expanded, with various interpretations, artistic styles, and deck designs. Today, tarot cards continue to be widely used for self-reflection, personal growth, and accessing intuitive wisdom, making them an enduring and fascinating aspect of human culture.</p>
      </div>
      <div className='historyImg'>
      {/* <img src={historyImg} alt="history" /> */}
      </div>

      </div>
      <History/>
      </div>
      </div>
    </div>
  )
}
