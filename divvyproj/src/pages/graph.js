import React, { useState } from 'react';
import { Route, Link, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';


// import GenderGraph from '../data/genderGraph.js';
// import SubmissionBox from '../components/submit.js';
// import GenderDistGraph from '../data/genderDistance.js';
// import SubGraph from '../data/subscribersGraph.js';
// import BikeID from '../data/bikeId.js';
// import Stations from '../data/StationID.js';
import Tab from '../components/tabs'
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export default class Graph extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      valz: "",
      page: "",
      datasets: [
        {
          backgroundColor: 'rgba(75,192,192,1)',
          borderColor: 'rgba(0,0,0,1)',
          borderWidth: 2,
          data: []
        },
      ],
    };
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler(value) {
    this.setState({
      page: "m",
    });
  }

  render() {
    var a = "";
    if (this.state.page === 'm') {
      if (this.state.valz.length > 0) {
        a = "/map" + "?stationId=" + encodeURIComponent(this.state.valz);
        //window.location.href=window.location.href+a;
        return <Redirect to={a} push to={a}></Redirect>
      }
      
      return <Redirect to={'/map'} push to={'/map'}></Redirect>
    }
    return (
      <React.Fragment>
      <Tab></Tab>  
        <Box
          bgcolor="none"
          color="white"
          p={2}
          position="absolute"
          top={0}
          right="0%"
          height="100%"
          width={200}
          aria-label='Station ID submit box'
        >
        <Box
          bgcolor="none"
          color="black"
          p={2}
          position="absolute"
          top={100}
          right="0%"
          height={200}
          width={200}
          
        >
          Enter a stationId
      <TextField
            id="standard-basic"
            label="Enter ID"
            value={this.state.valz}
            onChange={e => this.setState({ valz: e.target.value }) }
            aria-label='Enter Station ID'
          />
          <Box
            bgcolor="grey"
            color="white"
            p={2}
            position="absolute"
            top={110}
            right="14%"
            height={50}
            width={50}
            
          >
            <Button
              anchor="right"
              size="small"
              variant="outlined"
              color="primary"
              onClick={() => this.clickHandler(this.state.valz)}
              aria-label='Submit Button'
            >
              Submit
            </Button>
          </Box>
        </Box>
      </Box>
      </React.Fragment>
    );
  }
}