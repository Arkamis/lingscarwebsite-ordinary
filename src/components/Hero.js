import React from 'react'
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import ProductHeroLayout from "./HeroLayout";

const backgroundImage =
  "https://s1.1zoom.me/big3/706/Lamborghini_Tuning_436403.jpg";

const useStyles = makeStyles((theme) => ({
  background: {
    backgroundImage: `url(${backgroundImage})`,
    backgroundColor: "#7fc7d9", // Average color of the background image.
    backgroundPosition: "center",
  },
  button: {
    minWidth: 200,
  },
  h5: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(1),
    [theme.breakpoints.up("sm")]: {
      marginTop: theme.spacing(10),
    },
  },
  h6: {
    marginBottom: theme.spacing(4),
    color: "#b71c1c",
    fontWeight:  600
  },
  more: {
    marginTop: theme.spacing(2),
  },
}));

function ProductHero() {
  const classes = useStyles();

    return (
      <ProductHeroLayout
        className={classes.background}
        backgroundClassName={classes.background}
      >
        {/* Increase the network loading priority of the background image. */}
        {/* <img
            src={backgroundImage}
            alt="increase priority"
        /> */}
        <Typography
          color="inherit"
          align="center"
          variant="h2"
          marked="center"
        ></Typography>
        <Typography
          color="inherit"
          align="center"
          variant="h1"
          className={classes.h5}
        >
          Leader of the Pack - The UK's favorite car leasing website!
        </Typography>
        <Typography
          color="inherit"
          className={classes.h6}
          color="inherit"
          allignSelf="center"
        >
          - Contract hire cars, LINGsCARS is the "UK's favourite car leasing
          website
        </Typography>
        <Button
          color="secondary"
          variant="contained"
          size="large"
          className={classes.button}
          component="a"
          href="/premium-themes/onepirate/sign-up/"
        >
          Get a new Car
        </Button>
        <Typography component="em" variant="body2" color="inherit" className={classes.more}>
          "Ling Valentine is Britain’s BIGGEST individual seller of new cars."
        </Typography>
      </ProductHeroLayout>
    );
}

export default ProductHero;
