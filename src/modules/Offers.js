import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import { Typography } from '@material-ui/core'
import { Feedback, MonetizationOn, Policy } from '@material-ui/icons'

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		overflow: 'hidden',
		backgroundColor: theme.palette.secondary.light,
	},
	container: {
		marginTop: theme.spacing(15),
		marginBottom: theme.spacing(30),
		display: 'flex',
		position: 'relative',
	},
	item: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		padding: theme.spacing(0, 5),
	},
	image: {
		height: 55,
	},
	title: {
		marginTop: theme.spacing(5),
		marginBottom: theme.spacing(5),
	},
	curvyLines: {
		pointerEvents: 'none',
		position: 'absolute',
		top: -180,
	},
	icon: {
		fontSize: 120,
		color: theme.palette.secondary.dark
	}
}))

function Ofers(props) {
	const classes = useStyles()
  
	return (
		<section className={classes.root}>
			<Container className={classes.container}>
				<Grid container spacing={5}>
					<Grid item xs={12}>
						<Typography variant="h3" component={'h2'} align="center">We offer...</Typography>
					</Grid>
					<Grid item xs={12} md={4}>
						<div className={classes.item}>
							<MonetizationOn className={classes.icon} />
							<Typography variant="h6" component="h3" className={classes.title}>
                BEST DEALS ON MARKET
							</Typography>
							<Typography variant="h5" paragraph>
                "We publish all the best and cheapest deals we can source . Most
                bespoke quotes will by their nature be slightly more expensive."
							</Typography>
						</div>
					</Grid>
					<Grid item xs={12} md={4}>
						<div className={classes.item}>
							<Feedback className={classes.icon} />
							<Typography variant="h6" component="h3" className={classes.title}>
                GREAT CUSTOMER FEEDBACK
							</Typography>
							<Typography variant="h5" paragraph>
                "We get positive feedback from our customers all the time. We
                also have a section with their respective evaluations and
                comments"
							</Typography>
						</div>
					</Grid>
					<Grid item xs={12} md={4}>
						<div className={classes.item}>
							<Policy className={classes.icon} />
							<Typography
								variant="h6"
								component={'h3'}
								className={classes.title}
							>
                100% Transparency
							</Typography>
							<Typography variant="h5" paragraph>
                "Unlike most other internet car leasing sites, I publish all my
                contact information openly! ...so, you know who I am"
							</Typography>
						</div>
					</Grid>
				</Grid>
			</Container>
		</section>
	)
}

export default Ofers
