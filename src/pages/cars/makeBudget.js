import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Container, Paper, Snackbar } from '@material-ui/core';
import FormCarDetails from '../../components/forms/FormCarDetails';
import FormFinantialInfo from '../../components/forms/FormFinantialInfo';
import FormPersonalInfo from '../../components/forms/FormPersonalInfo';
import DetailsView from '../../components/DetailsView';
import Sucess from '../../components/Sucess';
import { Alert } from '@material-ui/lab';
import SnackAlert from '../../components/SnackAlert';
import { PermDeviceInformationOutlined } from '@material-ui/icons';
import Head from 'next/head';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.secondary.light,
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(4),
  },
  container: {
    width: "100%",
  },
  button: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  controls: {
    margin: theme.spacing(3, 4),
    paddingBottom: theme.spacing(3),
  },
}));

function getSteps() {
  return ['Choose a Car', 'Approximate Budget', 'Personal Details', 'Confirm Quote'];
}


export default function MakeBudget() {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);
  const [activeStep, setActiveStep] = React.useState(0);
  const [info, setInfo] = React.useState({
    firstName: "",
    lastName: "",
    alias:"",
    email: "",
    address: "",
    carName: "",
    carMake: "",
    carTrim: "", 
    carColor: "",
    carMiles:"",
    dealYears: "",
    service: "off",
    firstPayment: "",
    monthlyBudget: "",
    creditBackground: "",
  });

  
  const steps = getSteps();

  const alertSnackbar = () => {
    setOpen(true);
  };
  const resetFields = () => {
    setInfo(currentInfo => {
      let information = { ...currentInfo };
      Object.entries(information).forEach(([key, value]) => {
        if (key === "service") {
          information[key] = "off"
        } else {

          information[key] = ""
        }
      });
      return information;
    })
  }
  
  const snackHandleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const handleNext = () => {
    // if (activeStep == 2 && _checkData) {
      
    // }
    // if (activeStep === steps.length - 1) {
    //   if (_checkData) {
    //   alertSnackbar();

    //     return;
    //   }
    // }
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };
  
  const _checkData = (data) => {
    let empty = false;
    Object.entries(data).forEach(([key, value]) => {
      if (value.length < 2 || !value ) {
        empty = true;
      }
    })
    return empty;
  }

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };


  const handleReset = () => {
    resetFields();
    setActiveStep(0);

    };
    
  const handleChange = (input) => (event) => {
   
    setInfo((currentInfo) => {
      //copy of this.state.
      let information = { ...currentInfo };
      information[input] = event.target.value;

      return information;
    });
  };

  const getCurrentStepContent = (step) => {
    switch (step) {
    case 0:
        return (<FormCarDetails handleChange={handleChange} values={ info }/>)
    case 1:
        return <FormFinantialInfo handleChange={handleChange} values={info} />;
    case 2:
        return <FormPersonalInfo handleChange={handleChange} values={info} />;
      case 3: 
        return <DetailsView handleChange={handleChange} values={info} />
    default:
        return <div>This is a multi-step form built with React.</div>;
    }
  };
  
  return (
    <React.Fragment>
      <Head>
        <title>Making a Quote for a Car</title>
        <meta
          name="Description"
          content="Fill out the form to request a quote for your desired car."
        />
      </Head>
      <div className={classes.root}>
        <Container fixed className={classes.container}>
          <SnackAlert
            onClose={snackHandleClose}
            open={open}
            message={"Please check your information."}
            severity="error"
          />
          <Typography variant="h2">GET a NEW CAR</Typography>
          <Stepper activeStep={activeStep}>
            {steps.map((label, index) => {
              return (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              );
            })}
          </Stepper>
          <Paper elevation={0} className={classes.stepContent}>
            {activeStep === steps.length ? (
              <div>
                <Sucess
                  className={classes.instructions}
                  onReset={handleReset}
                  title={"Quote sent with success!"}
                  subtile="Stay alert on your email. We will send you further instructions to your email."
                />
              </div>
            ) : (
              <div>
                {getCurrentStepContent(activeStep)}
                <div className={classes.controls}>
                  <Button
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    className={classes.button}
                  >
                    Back
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button}
                  >
                    {activeStep === steps.length - 1 ? "Finish" : "Next"}
                  </Button>
                </div>
              </div>
            )}
          </Paper>
        </Container>
      </div>
    </React.Fragment>
  );
}

Object.size = function (obj) {
  var size = 0,
    key;
  for (key in obj) {
    if (obj.hasOwnProperty(key)) size++;
  }
  return size;
};