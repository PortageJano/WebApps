import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import GenderGraph from '../data/genderGraph.js';
import SubGraph from '../data/subscribersGraph.js';
import GenderDistGraph from '../data/genderDistance.js';
import StationID from '../data/StationID.js';
import BikeID from '../data/bikeId.js';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function SimpleTabs(d1, d2, d3) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="absolute" style={{zIndex: 800, top: 60}}>
        <Tabs value={value} onChange={handleChange} centered aria-label="graph selection">
          <Tab label="Gender Graph" {...a11yProps(0)} aria-label="Gender Graph" />
          <Tab label="Gender Distance Graph" {...a11yProps(1)} aria-label="Gender Distance Graph"/>
          <Tab label="Subscribers Graph" {...a11yProps(2)} aria-label="Subscribers Graph"/>
          <Tab label="Station ID Graph" {...a11yProps(3)} aria-label="Station ID Graph"/>
          <Tab label="Bike ID Graph" {...a11yProps(4)} aria-label="Bike ID Graph"/>
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <GenderGraph></GenderGraph>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <GenderDistGraph></GenderDistGraph>
      </TabPanel>
      <TabPanel value={value} index={2}>
      <SubGraph></SubGraph>
      </TabPanel>
      <TabPanel value={value} index={3}>
      <StationID></StationID>
      </TabPanel>
      <TabPanel value={value} index={4}>
      <BikeID></BikeID>
      </TabPanel>
    </div>
  );
}