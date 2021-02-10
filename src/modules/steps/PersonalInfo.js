import React, { useState } from 'react'
import { Box, FormControl, FormLabel, Input, InputLabel, MenuItem, RadioGroup, Select, Typography } from '@material-ui/core'
import makes from '../../data/makes'

//we need a form to do:
//  Choose a Make
// Choose  miles per year
// Choose color of the car
// Choose if include service
// Choose contract years


export default function PersonalInfo() {
	const [car, setCar] = useState(null)

	const handlerMake = (event) => {
		setCar(event.target.value)
	}

	return (
		<Box>
			<Typography variant="h3">Choose your car</Typography>
			<FormControl>
				<InputLabel htmlFor="chooseMake">Select an Make</InputLabel>
				<Select
					labelId="chooseMake-label"
					id="chooseMake"
					input={<Input />}
					onChange={handlerMake}
				>
					{makes.map((make) => (
						<MenuItem>{make}</MenuItem>
					))}
				</Select>
				<InputLabel htmlFor="chooseMiles">
            Select Miles per year available
				</InputLabel>
				<Select
					labelId="chooseMiles-label"
					id="chooseMiles"
					input={<Input />}
				>
					{makes
						.find((each) => each.make === make)
						.cars.map((car) => (
							<MenuItem>{car.name}</MenuItem>
						))}
				</Select>
				<InputLabel>Select a Color</InputLabel>
				<InputLabel>Do you want to include service?</InputLabel>
				<FormLabel></FormLabel>
				<RadioGroup>
            
				</RadioGroup>
			</FormControl>
		</Box>
	)
}