import React from 'react'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import ProTip from '../modules/ProTip'
import Link from '../components/Link'
import aboutMe from '../data/content/lings.md'
import Markdown from '../components/Markdown'

export default function About() {
	return (
		<Container fixed>
			{/* <Typography variant="h4" component="h1" gutterBottom>
				
			</Typography>
			<Button variant="contained" color="primary" component={Link} naked href="/">
		Go to the main page
			</Button>
			<ProTip /> */}
			<Markdown>{aboutMe}</Markdown>
		</Container>
	)
}
