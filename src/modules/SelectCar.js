import React from 'react';
import PersonPinIcon from "@material-ui/icons/PersonPin";
import HelpIcon from "@material-ui/icons/Help";
import ShoppingBasket from "@material-ui/icons/ShoppingBasket";
import ThumbDown from "@material-ui/icons/ThumbDown";
import ThumbUp from "@material-ui/icons/ThumbUp";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import PropTypes from 'prop-types'
//data
import cars from "../data/makes";
import { AppBar, makeStyles, Tab, Tabs } from "@material-ui/core";
import TabPanel from '../components/TabPanel';

// function TabPanel(props) {
//   const { children, value, index, ...other } = props;

//   return (
//     <div
//       role="tabpanel"
//       hidden={value !== index}
//       id={`scrollable-force-tabpanel-${index}`}
//       aria-labelledby={`scrollable-force-tab-${index}`}
//       {...other}
//     >
//       {value === index && (
//         <Box p={3}>
//           <Typography>{children}</Typography>
//         </Box>
//       )}
//     </div>
//   );
// }

// TabPanel.propTypes = {
//   children: PropTypes.node,
//   index: PropTypes.any.isRequired,
//   value: PropTypes.any.isRequired,
// };

function a11yProps(index) {
  return {
    id: `scrollable-force-tab-${index}`,
    "aria-controls": `scrollable-force-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  imageZoom: {
    height: "45px",
    '&:hover': {
      transform: 'scale(1.5)',
    }
  }
}));

export default function SelectCars() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  //array of vehicles

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          selectionFollowsFocus
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="on"
          indicatorColor="primary"
          textColor="primary"
          aria-label="Choose a make to view cars"
        >
          {cars.map((car, index) => (
            <Tab
              label={car.make}
              {...a11yProps(index)}
              icon={<img src={car.imageUrl} className={classes.imageZoom} />}
            />
          ))}
        </Tabs>
      </AppBar>
      {cars.map((car, index) => (
        <TabPanel value={value} index={index} vehicles={car.cars}>
          {car.make}
        </TabPanel>
      ))}
    </div>
  );
}
