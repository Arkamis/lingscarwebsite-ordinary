import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles({
	root: {
		width: 400,
		height: 450
	},
	media: {
		height: 240,
	},
})

export default function CarCard({title, src, children}) {
	const classes = useStyles()

	return (
		<Card className={classes.root} raised  >
			<CardMedia
				className={classes.media}
				image={src}
				title={`${title} example picture`}
			/>
			<CardContent>
				<Typography gutterBottom variant="h5" component="h2">
					{title}
				</Typography>
				<Typography variant="body2" color="textSecondary" component="p">
					{children}
				</Typography>
			</CardContent>
			<CardActions>
				<Button size="small" color="primary">
          Share
				</Button>
				<Button size="small" color="primary">
          Learn More
				</Button>
			</CardActions>
		</Card>
	)
}