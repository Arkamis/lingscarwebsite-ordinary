import { Paper } from '@material-ui/core'
import React, { useState } from 'react'
import FormCarDetails from '../components/forms/FormCarDetails'

function Stepper() {
	const [step, setStep] = useState(0)
	const [info, setInfo] = useState({
		firstName: '',
		lastName: '',
		email: '',
		address: '',
		carName: '',
		carMake: '',
		carColor: '',
		dealYears: '',
		service: false,
		firstPayment: '',
		monthlyBudget: '',
		creditBackground: '',
		deliveryDate: ''
	})
	const getCurrentStepForm = (step) => {
		switch (step) {
		case 1:
			return (<FormCarDetails  />)
		case 2:
			return
		case 3:
			return
        
		default:
			return (<div>This is a multi-step form built with React.</div>)
		}
	}
	const nextStep = () => {
		setStep(currentStep => currentStep + 1)
	}
	const prevStep = (params) => {
		setStep(currentStep => currentStep - 1)
	}

	const handleChange = input => (event) => {
		setInfo(currentInfo => {
			//copy of this.state.
			let information = { ...currentInfo }
			information[input] = event.target.value

			return information
            
		})
	}
    
	return (
		<Paper>
			{getCurrentStepForm()}
		</Paper>
	)
}

export default Stepper
