import React, { useState } from 'react';
import { Route, Link, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';

import { Bar } from 'react-chartjs-2';
// import { Line } from 'react-chartjs-2';

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
  }
  clickHandler(value) {
    this.setState({
      page: "m",
    });
  }
  componentDidMount() {
    fetch('https://data.cityofchicago.org/resource/fg6s-gzvg.json')
      .then(res => res.json())
      .then((result) => {
        console.log(result);
        var a = 0;
        var b = 0;
        var c = 0;
        var d = [];
        result.forEach(element => {
          if (element.gender === 'Male') {
            a += 1;
          }
          else if (element.gender === 'Female') {
            b += 1;
          }
          else {
            c += 1;
          }
        });
        d.push(a);
        d.push(b);
        d.push(c);

        console.log(d[0]);
        console.log(d[1]);
        console.log(d[2]);

        this.setState({
          responsive: true,
          labels: ['Male', "Female", 'Unkown'],
          datasets: [
            {
              backgroundColor: ['blue', 'green', 'teal'],
              borderColor: 'red',
              borderWidth: 1,
              data: d,
            },
          ],
        })
        console.log(this.state.datasets);
      });
  }
  render() {
    var a = "";
    if (this.state.page === 'm') {
      if (this.state.valz.length > 0) {
        a = "/map" + "?msg=" + encodeURIComponent(this.state.valz);
        return <Redirect to={a} push to={a}></Redirect>
      }
      return <Redirect to={'/map'} push to={'/map'}></Redirect>
    }
    return (
      <React.Fragment>
        <Box
          bgcolor="white"
          color="white"
          p={2}
          position="absolute"
          top={70}
          left="5%"
          height={300}
          width={600}
        >
          <Bar
            data={this.state}
            options={{
              maintainAspectRatio: false,
              title: {
                display: true,
                text: "Gender from divy bikes",
                fontSize: 20
              },
              legend: {
                display: false,
                position: 'top'
              },
              scales: {
                yAxes: [{
                  scaleLabel: {
                    display: true,
                    labelString: 'Bikes rented by gender'
                  },
                  type: 'logarithmic',
                  min: 1,
                  max: 9,
                  ticks: {
                    callback: function (value, index, values) {
                      return Number(value.toString());
                    }
                  },
                }],

                xAxes: [{
                  scaleLabel: {
                    display: true,
                    labelString: 'Genders'
                  }
                }]
              }
            }}
          >
          </Bar>
        </Box>
        <Box
          bgcolor="gray"
          color="white"
          p={2}
          position="absolute"
          top={0}
          right="0%"
          height="100%"
          width={200}
        >
          <Box
            bgcolor="grey"
            color="white"
            p={2}
            position="absolute"
            top={100}
            right="0%"
            height={200}
            width={200}
          >
            Enter bike id to figure out where you went on the divvy bike
        <TextField
              id="standard-basic"
              label="Standard"
              value={this.state.valz}
              onChange={e => this.setState({ valz: e.target.value })}
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
              >
                Primary
              </Button>
            </Box>
          </Box>
        </Box>
      </React.Fragment>
    );
  }
}