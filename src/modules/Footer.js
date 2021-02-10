import React from "react";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Link from "../components/Link";
import { Divider, Grid, makeStyles, Typography } from "@material-ui/core";
import { grey, red } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: grey[100],
    color: theme.palette.text.secondary,
    "& svg": {
      margin: theme.spacing(1.5),
    },
    "& hr": {
      margin: theme.spacing(0, 0.5),
    },
    marginTop: theme.spacing(5),
    paddingTop: theme.spacing(2)
  },
  divider: {
    marginLeft: 25,
    marginRight: 25,
  },
  termns: {
    marginRight: theme.spacing(1),
  },
  footerItems: {
    fontSize: 14,
    fontWeight: 'lighter',
    color: grey[500]
  },
  row: {
    padding: theme.spacing(0),
    margin: theme.spacing(0)
  }
}));


export default function Footer() {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
      >
        <Grid
          item
          container
          justify="center"
          alignContent="center"
          alignItems="center"
          xs={12}
        >
          <Grid item className={classes.termns}>
            <Typography paragraph className={classes.footerItems}>
              Terms and conditions
            </Typography>
          </Grid>
          <Grid item className={classes.termns}>
            <Typography paragraph className={classes.footerItems}>
              Privacy Policy
            </Typography>
          </Grid>
          <Grid item className={classes.termns}>
            <Typography paragraph className={classes.footerItems}>
              {" "}
              Problems with this website
            </Typography>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Typography paragraph className={classes.footerItems}>
            Company Reg No: 6178634 || VAT No: 866 0241 30
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography paragraph className={classes.footerItems}>
            © Copyright 2004 - 2021 LINGsCARS.com. All rights reserved.
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography paragraph className={classes.footerItems}>
            Made in the People's Republic of China (me, not the website... which
            was handcrafted by Ling, in the UK)Company Reg No: 6178634 || VAT
            No: 866 0241 30
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography paragraph className={classes.footerItems}>
            ALL INCOMING CONNECTIONS TO LINGsCARS.com ARE MONITORED FOR SECURITY
            AND PROVENANCE. NO SCAMMERS! - Ling
          </Typography>
        </Grid>
      </Grid>
    </Box>
    // // <Grid container alignItems="center" spacing={3} className={classes.root}>
    // //   <Grid item>
    // <Container maxWidth="sm">
    //   <Box my={4}>
    //     <Typography variant="body2" color="textSecondary" align="center">
    //       <Link href="">Terms and Conditions</Link>
    //       <Divider
    //         orientation="vertical"
    //         light
    //         className={classes.divider}
    //       />
    //       <Link href="">Privcacy Policy</Link>
    //     </Typography>
    //     </Box>
    //   </Container>
    //   //</Grid>
    // </Grid>
  );
}