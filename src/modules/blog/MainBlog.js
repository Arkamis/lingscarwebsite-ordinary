import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import Markdown from '../../components/Markdown'

const useStyles = makeStyles((theme) => ({
	markdown: {
		...theme.typography.body2,
		padding: theme.spacing(3, 0),
	},
}))

export default function Main(props) {
	const classes = useStyles()
	const { blog , title } = props
  
	return (
		<Grid item xs={12} md={8}>
			<Typography variant="h6" component="h2" gutterBottom id="BlogStart">
				{title}
			</Typography>
			<Divider />
			<Markdown className={classes.markdown}></Markdown>
		</Grid>
	)
}

Main.propTypes = {
	blog: PropTypes.string,
	title: PropTypes.string,
}
