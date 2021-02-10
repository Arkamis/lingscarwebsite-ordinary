import React from 'react'
import PropTypes from 'prop-types'
import { Grid, makeStyles, TextField, Typography } from '@material-ui/core'
import { AccountCircle, Email, Face, LocationOn } from '@material-ui/icons'
import MapLocation from '../MapLocation'

const useStyles = makeStyles((theme) => ({
	root: {
		width: '100%',
		padding: theme.spacing(3, 3),
	},
	textField: {
		textAlign: 'center',
		marginLeft: theme.spacing(20),
	},
	formLabel: {
		margin: theme.spacing(0, 4),
	},
	title: {
		margin: theme.spacing(2, 4),
		textAlign: 'left',
	},
	description: {
		marginBottom: theme.spacing(5),
		marginLeft: theme.spacing(5),
	},
}))

function FormPersonalInfo(props) {
	const classes = useStyles()
	const { handleChange, values } = props

	return (
    <div className={classes.root}>
      <Grid container spacing={1} justify="center" alignContent="center">
        <Grid item xs={12}>
          <Typography variant="h6" component="h2" className={classes.title}>
            Contact Information Form
          </Typography>
          <Typography
            paragraph
            variant={"body2"}
            className={classes.description}
          >
            Please tell me more about yourself so I can contact you later for
            the follow-up of this quote form.
          </Typography>
        </Grid>
        <Grid
          container
          item
          spacing={1}
          direction="row"
          justify="center"
          alignItems="flex-end"
          xs={12}
        >
          <Grid item>
            <AccountCircle />
          </Grid>
          <Grid item>
            <TextField
              id="firstNameInput"
              label="First Name"
              defaultValue={values.firstName}
              name="firstName"
              placeholder={'Ex: " Miguel Antonio", " Eduardo " '}
              helperText="Name appear on your birth certificate."
              onChange={handleChange("firstName")}
              type="text"
              required
              autoComplete
              autoFocus
            />
          </Grid>
          <Grid item>
            <AccountCircle />
          </Grid>
          <Grid item>
            <TextField
              id="lastNameInput"
              defaultValue={values.lastName}
              placeholder={'Ex. "Rodriguez Gutierrez"'}
              required
              label="Last Name"
              name="lastName"
              autoComplete
              helperText="Last name appear on your birth certificate."
              onChange={handleChange("lastName")}
              type="text"
            />
          </Grid>
          <Grid item>
            <Face />
          </Grid>
          <Grid item>
            <TextField
              id="aliasInput"
              defaultValue={values.alias}
              label="Alias"
              autoComplete
              placeholder={'eg: "Dave", "Pete", "Suzie", "Topgun", "Nobby"'}
              name="alias"
              helperText="The name I will call you by, or appear on comments."
              onChange={handleChange("alias")}
              type="text"
            />
          </Grid>
        </Grid>
        <Grid
          container
          spacing={1}
          direction="row"
          justify="center"
          alignItems="center"
          alignContent="center"
          xs={12}
        >
          <Grid item>
            <Email />
          </Grid>
          <Grid item>
            <TextField
              autoComplete
              id="emailInput"
              label="Email"
              defaultValue={values.email}
              name="firstName"
              placeholder={'Ex:" example@gmail.com" '}
              helperText="Enter a valid email so we can contact you."
              onChange={handleChange("email")}
              type="email"
              required
            />
          </Grid>
        </Grid>
        <Grid
          container
          spacing={1}
          direction="row"
          justify="center"
          alignItems="center"
          alignContent="center"
          xs={12}
        >
          <Grid item>
            <LocationOn />
          </Grid>
          <Grid item>
            <TextField
              id="addressInput"
              label="Address"
              autoComplete
              defaultValue={values.address}
              name="address"
              placeholder={'Ex: "Manzanillo, Colima, Mexico" '}
              helperText="We need a location to let you know if we would be able to deliver the car."
              onChange={handleChange("address")}
              type="text"
              required
            />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

FormPersonalInfo.propTypes = {
	values: PropTypes.object.isRequired,
	handleChange: PropTypes.func.isRequired,
}

export default FormPersonalInfo

