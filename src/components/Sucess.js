import React from 'react'
import PropTypes from 'prop-types'
import { Box, Button, Grid, makeStyles, Paper, Typography } from '@material-ui/core'
import { CheckCircle } from '@material-ui/icons'
import { green } from '@material-ui/core/colors'

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    padding: theme.spacing(3, 3),
  },
  paper: {
    padding: 25
  },
  button: {
    marginRight: theme.spacing(2)
  },
  successIcon: {
    color: green[500]
  },
  title: {
    color: theme.palette.secondary.main
  }
}))

function Sucess(props) {
  const { title, subtile, onReset } = props;
    const classes = useStyles();
    return (
      <div className={classes.root}>
        <Box m={10} pb={10}>
          <Paper elevation={3} className={classes.paper}>
            <Grid
              container
              spacing={1}
              direction="column"
              justify="center"
              alignItems="center"
              alignContent="center"
              wrap="nowrap"
            >
              <Grid item xs={12}>
                <div>
                  <CheckCircle className={classes.successIcon} fontSize="large" />
                </div>
              </Grid>
              <Grid item xs={12}>
                <Typography variant={"h3"} className={classes.title}>{title}</Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant={"subtitle2"}>{subtile}</Typography>
              </Grid>
              <Grid item spacing={1} xs={12}>
                  <Button
                    variant="contained"
                    color="primary"
                    className={classes.button}
                    onClick={onReset}
                  >
                    Reset
                  </Button>
              </Grid>
            </Grid>
          </Paper>
        </Box>
        {/* <Box m={10} display="flex" flexDirection="row" bgcolor="grey.100" >
              <div>
                  <CheckCircle color={"success"} />
              </div>
              <Typography variant={"h3"}>Qoute sent with success</Typography>
              <Typography variant={"body2"}>You just need to stay alert for our response, we will send you an email with further instructions.</Typography>
              <Grid container justify="center">
              </Grid>
          </Box> */}
      </div>
    );
}

Sucess.propTypes = {
  onReset: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  subtile: PropTypes.string.isRequired
}

export default Sucess

