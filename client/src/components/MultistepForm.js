import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Stepper, Step, StepLabel, Typography, Button} from '@material-ui/core';
//components imports
import StepOne from './StepOne';
import StepTwo from './StepTwo';


const useStyles = makeStyles({
    root: {
        width: "50%",
        margin: "6rem auto",
        border: "10px solid #999",
        "& .MuiStepIcon-root.MuiStepIcon-active": {
            color: "red"
        },
        "& .MuiStepIcon-root.MuiStepIcon-completed": {
            color: "red"
        }
    }
    
})


const MultistepForm = () => {

    const [activeStep, setActiveStep] = useState(0);

    function getSteps() {
        return ["SIGNUP", "INTRO", "MYMATCH"];
    }
    const handleNext =() => {
        setActiveStep(prevActiveStep => prevActiveStep +1)
    }

    const steps = getSteps();

    function getStepsContent(stepIndex){
        switch(stepIndex) {
        case 0:
            return <StepOne
            handleNext={handleNext}
            activeStep={activeStep}
            steps = {steps}
            />;
        case 1:
            return <StepTwo />;
        case 2:
            return "Step Three (MYMATCH)";
        default: return "Unknow Step";
    }
}

   const classes = useStyles();
    return (
        <div className = {classes.root}>
            <Stepper activeStep={activeStep} alternativeLabel >
                {steps.map(label => (
                  <Step key ={label}> 
                      <StepLabel>
                          {label}
                     </StepLabel> 
                  </Step>
                ))}
            </Stepper>
            <>
            {activeStep ===steps.length ? "Welcome to LA locals": (
            <>
            {getStepsContent(activeStep)}  
            <Button onClick={handleNext}>
             {activeStep ===steps.length ? "Finish": "Next"}
            </Button>
            </>
            )}
        </>    
        </div>
    )
}

export default MultistepForm
