import React, { useState } from 'react'
import Stepper from '@mui/material/Stepper'
import Step  from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { Card, StepButton } from '@mui/material';

const steps = ['Step 1', 'Step 2', 'Step 3'];

export const History = () => {
  const [activeStep] = useState(0);

  const setActiveStep = (index) => {

    console.log(index);
   }

  return (
    <>
   
    <Stepper nonLinear activeStep={activeStep}>
      {steps.map((step, index) => (
        <Step key={step}>
        <StepButton onClick={() => setActiveStep({index})}>
        {step}
        </StepButton>
        </Step>

      ))}
    </Stepper>
    
    </>
  )
}
