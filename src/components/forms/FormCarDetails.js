import React from 'react'
import {
	Box,
	Checkbox,
	FormControl,
	FormControlLabel,
	FormHelperText,
	FormLabel,
	Grid,
	Input,
	InputLabel,
	makeStyles,
	MenuItem,
	Radio,
	RadioGroup,
	Select,
	Typography,
} from '@material-ui/core'
import makes from '../../data/makes'
import PropTypes from 'prop-types'
import Image from 'next/image'

const useStyles = makeStyles((theme) => ({
	root: {
		width: '100%',
		padding: theme.spacing(3, 3),
	},
	formControl: {
		margin: theme.spacing(1),
		width: '100%'
	},
	formLabel: {
		margin: theme.spacing(0, 4),
	},
	title: {
		marginBottom: theme.spacing(5),
		textAlign: 'left',
	},
	image: {
		margin: theme.spacing(1),
	}
}))

export default function FormCarDetails(props) {

	const { handleChange, values } = props
	const classes = useStyles()

	return (
		<div className={classes.root}>
			<Grid container spacing={3}>
				<Grid item xs={12}>
					<Typography variant="h5" component="h2" className={classes.title}>
            Car Information
					</Typography>
				</Grid>
				<Grid container item xs={12} spacing={2}>
					<Grid item xs={4}>
						<FormControl className={classes.formControl}>
							<InputLabel id={'chooseMake-label'}>Select a Make</InputLabel>
							<Select
								autoFocus
								labelId="chooseMake-label"
								id="chooseMake"
								input={<Input />}
								onChange={handleChange('carMake')}
								defaultValue={values.carMake}
							>
								<MenuItem value={values.carMake}>
									{values.carMake ? values.carMake : <em>None</em>}
								</MenuItem>
								{makes.reduce(function (result, make) {
									if (make.make !== values.carMake) {
										result.push(
											<MenuItem value={make.make}>{make.make}</MenuItem>
										)
									}
									return result
								}, [])}
							</Select>
						</FormControl>
					</Grid>
					<Grid item xs={4}>
						<FormControl className={classes.formControl}>
							<InputLabel
								id={'chooseModel-label'}
							>{`Select a model of the make ${values.carMake}`}</InputLabel>
							<Select
								className={classes.select}
								labelId="chooseModel-label"
								id="chooseModel"
								onChange={handleChange('carName')}
								input={<Input />}
								defaultValue={values.carName}
							>
								<MenuItem value={values.carName}>
									{values.carName ? values.carName : 'none'}
								</MenuItem>
								{values.carMake &&
                  makes
                  	.find((each) => each.make === values.carMake)
                  	.cars.reduce(function (result, car) {
                  		if (values.carName !== car.name) {
                  			result.push(
                  				<MenuItem value={car.name}>{car.name}</MenuItem>
                  			)
                  		}
                  		return result
                  	}, [])}
							</Select>
						</FormControl>
					</Grid>
					<Grid item xs={4}>
						<FormControl className={classes.formControl}>
							<InputLabel
								id={'choooseTrim-label'}
							>{`Select a trim for ${values.carName}`}</InputLabel>
							<Select
								className={classes.select}
								labelId="chooseTrim-label"
								id="chooseTrim"
								input={<Input />}
								defaultValue={values.carTrim}
								onChange={handleChange('carTrim')}
							>
								<MenuItem value={values.carTrim}>
									{values.carTrim ? values.carTrim : 'none'}
								</MenuItem>
								{values.carMake &&
                  makes.find((each) => each.make === values.carMake).trims &&
                  makes
                  	.find((each) => each.make === values.carMake)
                  	.trims.map((trim) => {
                  		return <MenuItem value={trim}>{trim}</MenuItem>
                  	})}
							</Select>
						</FormControl>
					</Grid>
				</Grid>
				<Grid item xs={6}>
					<Box m={3}>
						<Typography variant={'subtitle1'} component="h3">
              Average Miles per year selected by user
						</Typography>
						<div style={{ textAlign: 'center' }}>
							<Image
								src="https://images.lingscars.com/images/quote/mileagepie.gif"
								width={271}
								height={189}
								className={classes.imgage}
								alt="The graph shows a range of miles with their percentage of selection by customers."
							/>
						</div>
						<Typography paragraph variant={'body2'}>
							<em>
                A percent of 64% customers has selected to use around 8,000 -
                13,000 miles per year. By far it's the most popular range. The
                range of 13,000 to 18,000 miles has a 20% selection percentage.
                Then, range between 23,000 to 28,000 miles has 3% selection
                percentage. Then, range between 28,000 to 33,000 miles has 2%
                selection percentage. And finally, only 1% of our customers
                choose above 33,000 miles per year.
							</em>
						</Typography>
					</Box>
				</Grid>
				<Grid item xs={6}>
					<FormControl component="fieldset">
						<FormLabel component="legend">Miles per year</FormLabel>
						<RadioGroup
							aria-label="Miles per year"
							name="miles"
							onChange={handleChange('carMiles')}
							defaultValue={values.carMiles}
						>
							<FormControlLabel
								value="20000"
								control={<Radio />}
								label="20,000 miles per year"
							/>
							<FormControlLabel
								value="10000"
								control={<Radio />}
								label="10,000 miles per year"
							/>
							<FormControlLabel
								value="30000"
								control={<Radio />}
								label="30,000 miles per year"
							/>
						</RadioGroup>
					</FormControl>
				</Grid>
				<Grid item xs={6}>
					<FormControl component="fieldset">
						<FormLabel component="legend">
              Which paint would you like?
						</FormLabel>
						<RadioGroup
							aria-label="Car paint"
							name="paint"
							onChange={handleChange('carColor')}
							defaultValue={values.carColor}
						>
							<FormControlLabel
								value="metallic"
								control={<Radio />}
								label="Definitely Metallic"
							/>
							<FormControlLabel
								value="non-metallic"
								control={<Radio />}
								label="Definitely Non-Metallic"
							/>
							<FormControlLabel
								value="none"
								control={<Radio />}
								label="Don't Mind (cheapest)"
							/>
						</RadioGroup>
						<FormHelperText>
              Some cars cheaper in metallic paint, some cars cheaper in flat
              paint. Who knows? Depends on cost & residual values. Some cars
              only available in metallic, some cars only available in flat. Tell
              me your preference, I will do my best to manage it - we can
              discuss this later. I understand this is vague.
						</FormHelperText>
					</FormControl>
				</Grid>
				<Grid container item xs={6}>
					<Grid item xs={12}>
						<FormLabel component="legend">
              How many year of contrat would you like?
						</FormLabel>
					</Grid>
					<Grid item xs={6}>
						<RadioGroup
							aria-label="Deal contract years"
							name="years"
							onChange={handleChange('dealYears')}
							defaultValue={values.dealYears}
						>
							<FormControlLabel value="2" control={<Radio />} label="2 years" />
							<FormControlLabel value="3" control={<Radio />} label="3 Years" />
							<FormControlLabel value="4" control={<Radio />} label="4 years" />
						</RadioGroup>
					</Grid>
					<Grid item xs={6}>
						<Image
							src="https://images.lingscars.com/images/quote/yearspie.gif"
							width={200}
							height={87}
							alt="Pie chart showing the frequency of contract years chosen by the customer."
						/>
					</Grid>
					<Grid item xs={12}>
						<FormHelperText>
              Current customer analysis (left) showing who takes what.
              Currently, one year contracts are very rare and difficult to
              obtain... as you can see. 4-year contracts not too attractive as
              car will often be out of warranty and into MOT.
						</FormHelperText>
					</Grid>
				</Grid>
				<Grid item xs={12}>
					<FormControlLabel
						control={
							<Checkbox
								color={'secondary'}
								name={'service'}
								value="yes"
								onKeyPress={(event) => {
									if (event.key === 'Enter') {
										return handleChange('service')
									}
								}}
							/>
						}
						label="I would like to include service in this car deal."
						onChange={handleChange('service')}
						defaultValue={values.service}
					/>
				</Grid>
			</Grid>
		</div>
	)
}

FormCarDetails.propTypes = {
	values: PropTypes.object.isRequired,
	handleChange: PropTypes.func.isRequired
}
