import {  Grid, makeStyles } from "@material-ui/core";
import CarCard from "./Card";
import PropTypes from 'prop-types'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: 20
  }
}));
function TabPanel(props) {
    const { children, value, index, ...other } = props;
    const classes = useStyles();

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
      {...other}
    >
      {value === index && (
              <Grid
                  container
                  spacing={10}
                  className={classes.root}
                  justify="center"
                  alignItems="center"
              >
                {other.vehicles.map(car => 
                    <Grid item>
                        <CarCard title={car.name} src={car.carUrl}/>
                        {/* <Typography>{children}</Typography> */}
                    </Grid>
                )}
        </Grid>
      )}
    </div>
  );
}


TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};
export default TabPanel;