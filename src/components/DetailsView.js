import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles, Typography, Grid, Paper } from '@material-ui/core'
import Image from 'next/image'

const useStyles = makeStyles((theme) => ({
	root: {
		width: '100%',
		padding: theme.spacing(3, 3),
	},
	title: {
		marginTop: theme.spacing(2),
	},
	image: {
		justifyContent: 'center',
		alignItems: 'center',
		textAlign: 'center',
		marginTop: theme.spacing(4),
		marginBottom: theme.spacing(4),
		objectFit: 'contain',
	},
}))

function DetailsView(props) {
	const { handleChange, values } = props
	const classes = useStyles()

	return (
		<div className={classes.root}>
			<Typography variant="h5" component={'h3'}>
          Quote Summary:
			</Typography>
			<Grid
				container
				spacing={2}
				direction="row"
				justify="center"
				alignContent="center"
			>
				<Grid item container direction="column" xs={12} sm={6}>
					<Typography variant="subtitle2" component={'h4'}>
              Car details
					</Typography>
					<Grid container>
						<React.Fragment key={'carName'}>
							<Grid item xs={6}>
								<Typography gutterBottom>Name</Typography>
							</Grid>
							<Grid item xs={6}>
								<Typography gutterBottom>{values.carName}</Typography>
							</Grid>
						</React.Fragment>
						<React.Fragment key={'carMake'}>
							<Grid item xs={6}>
								<Typography gutterBottom>Make</Typography>
							</Grid>
							<Grid item xs={6}>
								<Typography gutterBottom>{values.carMake}</Typography>
							</Grid>
						</React.Fragment>
						{values.carTrim && (
							<React.Fragment key={'carTrim'}>
								<Grid item xs={6}>
									<Typography gutterBottom>Trim</Typography>
								</Grid>
								<Grid item xs={6}>
									<Typography gutterBottom>{values.carTrim}</Typography>
								</Grid>
							</React.Fragment>
						)}
						<React.Fragment key={'carMiles'}>
							<Grid item xs={6}>
								<Typography gutterBottom>Miles peer year</Typography>
							</Grid>
							<Grid item xs={6}>
								<Typography gutterBottom>{values.carMiles}</Typography>
							</Grid>
						</React.Fragment>
						<React.Fragment key={'carColor'}>
							<Grid item xs={6}>
								<Typography gutterBottom>Paint</Typography>
							</Grid>
							<Grid item xs={6}>
								<Typography gutterBottom>{values.carColor}</Typography>
							</Grid>
						</React.Fragment>
						<React.Fragment key={'initialPayment'}>
							<Grid item xs={6}>
								<Typography gutterBottom>Service included</Typography>
							</Grid>
							<Grid item xs={6}>
								<Typography gutterBottom>{values.service}</Typography>
							</Grid>
						</React.Fragment>
					</Grid>
				</Grid>
				<Grid item xs={6}>
					<Typography variant="subtitle1" component="h3">
              Preview
					</Typography>
					<Paper elevation={3}>
						<Image
							src={
								'https://images.lingscars.com/car_images/mercedes_a-class/vbig.jpg'
							}
							width={500}
							height={250}
							className={classes.image}
						/>
					</Paper>
				</Grid>
			</Grid>
			<Grid
				container
				spacing={2}
				justify="center"
				alignContent="center"
				direction="row"
			>
				<Grid item ontainer direction="column" xs={12} sm={6}>
					<Typography variant="h6" gutterBottom className={classes.title}>
              Personal Information
					</Typography>
					<Grid container>
						<React.Fragment key={'name'}>
							<Grid item xs={6}>
								<Typography gutterBottom>Name</Typography>
							</Grid>
							<Grid item xs={6}>
								<Typography gutterBottom>
									{`${values.firstName} ${values.lastName}`}
								</Typography>
							</Grid>
						</React.Fragment>
						<React.Fragment key={'email'}>
							<Grid item xs={6}>
								<Typography gutterBottom>Email</Typography>
							</Grid>
							<Grid item xs={6}>
								<Typography gutterBottom>{values.email}</Typography>
							</Grid>
						</React.Fragment>
						<React.Fragment key={'alias'}>
							<Grid item xs={6}>
								<Typography gutterBottom>Alias</Typography>
							</Grid>
							<Grid item xs={6}>
								<Typography gutterBottom>{values.alias}</Typography>
							</Grid>
						</React.Fragment>
						<React.Fragment key={'address'}>
							<Grid item xs={6}>
								<Typography gutterBottom>Address</Typography>
							</Grid>
							<Grid item xs={6}>
								<Typography gutterBottom>{values.address}</Typography>
							</Grid>
						</React.Fragment>
					</Grid>
				</Grid>
				<Grid item container direction="column" xs={12} sm={6}>
					<Typography variant="h6" gutterBotom className={classes.title}>
              Finantial Information
					</Typography>
					<Grid container>
						<React.Fragment key={'initialPayment'}>
							<Grid item xs={6}>
								<Typography gutterBottom>Initial Payment</Typography>
							</Grid>
							<Grid item xs={6}>
								<Typography gutterBottom>{values.firstPayment}</Typography>
							</Grid>
						</React.Fragment>
						<React.Fragment key="monthlyPayment">
							<Grid item xs={6}>
								<Typography gutterBottom>Monthly Budget</Typography>
							</Grid>
							<Grid item xs={6}>
								<Typography gutterBottom>{values.monthlyBudget}</Typography>
							</Grid>
						</React.Fragment>
						<React.Fragment key={'creditRate'}>
							<Grid item xs={6}>
								<Typography gutterBottom>Credit Rating</Typography>
							</Grid>
							<Grid item xs={6}>
								<Typography gutterBottom>
									{values.creditBackground}
								</Typography>
							</Grid>
						</React.Fragment>
						<React.Fragment key={'contractYears'}>
							<Grid item xs={6}>
								<Typography gutterBottom>Years of Contract</Typography>
							</Grid>
							<Grid item xs={6}>
								<Typography gutterBottom>{values.dealYears}</Typography>
							</Grid>
						</React.Fragment>
					</Grid>
				</Grid>
			</Grid>
		</div>
	)
}

DetailsView.propTypes = {
	values: PropTypes.object.isRequired,
	handleChange: PropTypes.func.isRequired,
}

export default DetailsView

