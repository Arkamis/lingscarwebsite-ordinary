import { Container, makeStyles, Typography } from '@material-ui/core'
import Head from 'next/head'
import React from 'react'
import SelectCars from '../../modules/SelectCar'

const useStyles = makeStyles((theme) =>( {
	title: {
		marginTop: '20px',
		marginBottom:'20px'
	}
}))
export default function Cars() {
	const classes = useStyles()

	return (
		<React.Fragment>
			<Head>
				<title>Checking our Available cars</title>
				<meta
					name="Description"
					content="You can choose your next car to rent or buy, check hours availables cars."
				/>
			</Head>
			<Container fixed>
				<Typography className={classes.title} variant="h2">
            Select a car based on a Make
				</Typography>
				<SelectCars />
			</Container>
		</React.Fragment>
	)
}