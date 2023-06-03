import React, { useState } from 'react';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import { StepButton} from '@mui/material';
import '../pages/info.css'





const steps = ['1440 - 1500', '1730 - 1909', '1918 - 1996'];

export const History = () => {
  const [activeStep, setActiveStep] = useState(0);

  const handleStepClick = (index) => {
    setActiveStep(index);
  };

  const renderStepContent = (step) => {
    switch (step) {
      case 0:
        return<>
        <div className='timeWrapper'>
        <div className='time'>
          <h2>1440</h2>
          <h1>Tarot was originally known as trionfi. These cards were used to play an Italian card game</h1>
          <h2>1480</h2>
          <h1>Prohibitions against gaming in various cities exempt certain games favored by aristocrats like tarot, backgammon and chess, possibly because these are considered games of skill rather than chance, and because the Church didn’t want to alienate the ruling class.</h1>
          <h2>1500</h2>
          <h1>Earliest examples of printed wood block cards that survive. They were preserved as uncut sheets of cards used in book binding. Some were found in a well at Sforza Castle in Milan. Some cards have typical Tarot de Marseilles imagery.</h1>
        </div>;
        <div className='timeImg'>
           <img src='https://www.wopc.co.uk/galleries/353/2677_colleoni_9.jpg' alt="trionfi tarot cards" />
        </div>
        </div>
        </>
      case 1:
        return<div className='timeWrapper'>
        <div className='time'>
          <h2>1730</h2>
          <h1>Height of popularity of the Tarot game. The rules and decks are standardized.</h1>
          <h2>1781</h2>
          <h1>Antoine Court de Gebelin publishes Le Monde Primitif, a study of religious symbolism. He claims that the Tarot is derived from the Book of Thoth. He also claims that the Tarot is Egyptian in origin, and that it is a book of mystical wisdom that encodes the secrets of the universe.</h1>
          <h2>1888</h2>
          <h1>France. Ely Star publishes an astrology book using Paul Christian’s teachings on Tarot and his card names, which influenced Egyptian decks. His use of the term Major and Minor Arcana was adopted by Papus.</h1>
        </div>;
        <div className='timeImg'>
           <img src='https://upload.wikimedia.org/wikipedia/commons/7/76/Court_de_G%C3%A9belin_-_Monde_Primitif_T._8_Pl._06.jpg' alt="illustrations from the book Le Monde Primitif" />
        </div>
        </div>
      case 2:
        return<div className='timeWrapper'>
         <div className='time'>
          <h2>1918</h2>
          <h1>C.Z. Zain publishes instructional courses for his Church of Light which contain the first English translations of Paul Christian’s teachings. He uses the Falconnier-Wegener Egyptian card designs for his deck.</h1>
          <h2>1971</h2>
          <h1>Tarot of Bohemians by Papus is re-published in English for the first time since 1910. It’s one of the most influential tarot books of all time.</h1>
          <h2>1996</h2>
          <h1>The books A Wicked Pack of Cards followed by The History of Occult Tarot in 2002, as well as research into tarot history by Michael Dummett and independent researchers who share their findings online, debunk occultist theories of Tarot’s ancient origins.</h1>
        </div>;
        <div className='timeImg'>
           <img src='https://cdn11.bigcommerce.com/s-sjtdec3ql9/images/stencil/1280x1280/products/2421/2846/egyptianrinascimentocards__12680.1604869514.jpg?c=2' alt="Brother's of Light tarot cards" />
        </div>
        </div>
      default:
        return null;
    }
  };

  return (
    <>
    {renderStepContent(activeStep)}
      <Stepper nonLinear activeStep={activeStep}>
        {steps.map((step, index) => (
          <Step key={step}>
           
            <StepButton  onClick={() => handleStepClick(index)}   
            sx={{
            '& .MuiStepIcon-root.Mui-active': {
              color: '#aff71f',
            },
            '& .MuiStepIcon-root': {
              color: '#864c97',
            },
            
            }}>
              <p className='stepLabel'>{step}</p>
            </StepButton>
           
          </Step>
        ))}
      </Stepper>

      
    </>
  );
};
