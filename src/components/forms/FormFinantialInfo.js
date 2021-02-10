import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles, Grid, Typography, TextField, FormControl, Input, InputLabel, FormHelperText, FormLabel, RadioGroup, Box, FormControlLabel, Radio } from '@material-ui/core'
import NumberFormat from 'react-number-format'
import Image from 'next/image'

const useStyles = makeStyles((theme) => ({
	root: {
		width: '100%',
		padding: theme.spacing(3, 3),
	},
	textField: {
		textAlign: 'center',
		marginLeft: theme.spacing(20)
	},
	formLabel: {
		margin: theme.spacing(0, 4),
	},
	title: {
		margin: theme.spacing(2,4),
		textAlign: 'left',
	},
	description: {
		marginBottom: theme.spacing(5),
		marginLeft: theme.spacing(5)
	},
}))

function NumberFormatCustom(props) {
	const { inputRef, onChange, ...other } = props

	return (
		<NumberFormat
			{...other}
			getInputRef={inputRef}
			onValueChange={(values) => {
				onChange({
					target: {
						name: props.name,
						value: values.value,
					},
				})
			}}
			thousandSeparator
			isNumericString
			prefix="£"
		/>
	)
}

NumberFormatCustom.propTypes = {
	inputRef: PropTypes.func.isRequired,
	name: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
} 


function FormFinantialInfo(props) {
	const { handleChange, values } = props
	const classes = useStyles()

	return (
    <div className={classes.root}>
      <Grid container spacing={1} justify="center" alignContent="center">
        <Grid item xs={12}>
          <Typography variant="h6" component="h2" className={classes.title}>
            Finantial Information
          </Typography>
          <Typography
            paragraph
            variant={"body2"}
            className={classes.description}
          >
            You MUST tell me your approximate budget - Thanks! (I do not "rip
            you off")
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <TextField
            id="initialPayment"
            className={classes.textField}
            name="initPay"
            required
            label="Initial payment"
            autoComplete
            onChange={handleChange("firstPayment")}
            placeholder="Between £90 and £20,000 Euros."
            InputProps={{
              autoFocus: true,
              inputComponent: NumberFormatCustom,
            }}
            helperText="£ upfront, inc VAT"
            defaultValue={values.firstPayment}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            id="monthlyPayment"
            name="monthlyPay"
            required
            label="Monthly payment"
            autoComplete
            onChange={handleChange("monthlyBudget")}
            placeholder="Between £90 and £1,500 Euros."
            InputProps={{
              inputComponent: NumberFormatCustom,
            }}
            helperText="£ per month, inc VAT"
            defaultValue={values.monthlyBudget}
          />
        </Grid>
        <Grid
          container
          item
          spacing={1}
          direction="column"
          justify="center"
          alignItems="center"
        >
          <Grid item xs={6}>
            <Box m={4}>
              <Image
                src="https://images.lingscars.com/images/quote/quote_credit.gif"
                width={250}
                height={240}
              ></Image>
            </Box>
          </Grid>
          <Grid item xs={6}>
            <FormControl component="fieldset">
              <FormLabel component="legend">Credit score</FormLabel>
              <RadioGroup
                aria-label="credit score"
                name="creditScore"
                // value={values.creditScore}
                onChange={handleChange("creditBackground")}
                defaultValue={values.creditBackground}
              >
                <FormControlLabel
                  value="Fine"
                  control={<Radio />}
                  label="I think it's fine "
                />
                <FormControlLabel
                  value="Some problems"
                  control={<Radio />}
                  label="Some problems"
                />
                <FormControlLabel
                  value="Not Sure"
                  control={<Radio />}
                  label="I'm not quite sure "
                />
              </RadioGroup>
              <FormHelperText>
                Due to effort needed, I need to know you are serious. Quoting
                involves loads of work, speaking to lots of people and finance
                companies. I try hard!
              </FormHelperText>
            </FormControl>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

FormFinantialInfo.propTypes = {
	values: PropTypes.object.isRequired,
	handleChange: PropTypes.func.isRequired,
}



export default FormFinantialInfo

