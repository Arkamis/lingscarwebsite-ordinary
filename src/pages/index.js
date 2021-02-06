import React from 'react'
import Hero from '../components/Hero'
import Ofers from '../modules/Offers';
import GetStarted from '../modules/GetStarted';
import Head from 'next/head';

export default function Index() {
	return (
    // <Container maxWidth="lg" style={{ padding: 0, margin: 0 }} fixed={true}>
    //   <Box>
    //     <MenuAppBar />
    //     <Hero />
    //   </Box>
    // </Container>

    <React.Fragment>
      <Head>
        <title>Lingscars BEST WEBSITE</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <Hero />
      <Ofers />
      <GetStarted />
    </React.Fragment>
  );

}

