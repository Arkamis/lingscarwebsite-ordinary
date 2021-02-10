import React from 'react'
import Container from '@material-ui/core/Container'
import Link from '../components/Link'
import aboutMe from '../data/content/lings.md'
import Markdown from '../components/Markdown'
import Head from 'next/head'

export default function About() {
	return (
    <React.Fragment>
      <Head>
        <title>About LingsCars</title>
        <meta
          name="Description"
          content="Learn more about ling Valentine and how she manage her business."
        />
      </Head>
      <Container fixed>
        {/* <Typography variant="h4" component="h1" gutterBottom>
					
				</Typography>
				<Button variant="contained" color="primary" component={Link} naked href="/">
			Go to the main page
				</Button>
				<ProTip /> */}
        <Markdown>{aboutMe}</Markdown>
      </Container>
    </React.Fragment>
  );
}
