import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Link from './Link'

const useStyles = makeStyles((theme) => ({
	root: {
		width: '100%'
	},
	sidebarAboutBox: {
		padding: theme.spacing(2),
		backgroundColor: theme.palette.grey[200],
	},
	sidebarSection: {
		marginTop: theme.spacing(3),
	},
}))

export default function Sidebar(props) {
	const classes = useStyles()
	const { archives, description, social, title } = props

	return (
		<div role="complementary" className={classes.root}>
			<Paper className={classes.sidebarAboutBox}>
				<Typography variant="h6" gutterBottom component="h2">
					{title}
				</Typography>
				<Typography paragraph>{description}</Typography>
			</Paper>
			<Typography
				variant="h6"
				gutterBottom
				component="h2"
				className={classes.sidebarSection}
			>
        Archives
			</Typography>
			{archives.map((archive) => (
				<Link
					display="block"
					variant="body1"
					href={archive.url}
					key={archive.title}
				>
					{archive.title}
				</Link>
			))}
			<Typography
				variant="h6"
				component="h2"
				gutterBottom
				className={classes.sidebarSection}
			>
        Social
			</Typography>
			{social.map((network) => (
				<Link display="block" variant="body1" href={network.url} key={network}>
					<Grid container direction="row" spacing={1} alignItems="center">
						<Grid item>
							<network.icon />
						</Grid>
						<Grid item>{network.name}</Grid>
					</Grid>
				</Link>
			))}
		</div>
	)
}

Sidebar.propTypes = {
	archives: PropTypes.array,
	description: PropTypes.string,
	social: PropTypes.array,
	title: PropTypes.string,
}
