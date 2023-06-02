import React, { useState } from 'react';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { StepButton } from '@mui/material';

const steps = ['Step 1', 'Step 2', 'Step 3'];

export const History = () => {
  const [activeStep, setActiveStep] = useState(0);

  const handleStepClick = (index) => {
    setActiveStep(index);
  };

  const renderStepContent = (step) => {
    switch (step) {
      case 0:
        return <div>Step 1 Content</div>;
      case 1:
        return <div>Step 2 Content</div>;
      case 2:
        return <div>Step 3 Content</div>;
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
            <StepButton onClick={() => handleStepClick(index)}>
              {step}
            </StepButton>
          </Step>
        ))}
      </Stepper>

      
    </>
  );
};
