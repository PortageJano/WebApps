import React from 'react';
import { Route, Link, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import { Bar } from 'react-chartjs-2';
import Box from '@material-ui/core/Box';
import HashMap from 'hashmap';

export default class SubGraph extends React.Component {
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
        var bikes = new HashMap();
        console.log("hi")
        result.forEach(element => {
          if (bikes.has(element.bike_id)) {
            var a = bikes.get(element.bike_id);
            a +=1;
            bikes.set(element.bike_id, a);
          }
          else{
              bikes.set(element.bike_id, 0);
          }
        });
        bikes.forEach(function(value, key) {
            console.log(key + " : " + value);
            if(value == 0)
            {
                bikes.remove(key);
            }
        });

       console.log("hi")
        console.log(bikes.keys());
        console.log(bikes.values());
        this.setState({
          responsive: true,
          labels: bikes.keys(),
          datasets: [
            {
              backgroundColor: ['blue', 'green', 'teal'],
              borderColor: 'red',
              borderWidth: 1,
              data: bikes.values(),
            },
          ],
        });
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
      <Box
        bgcolor="white"
        color="white"
        p={2}
        position="absolute"
        top={200}
        left="20%" 
        height={500}
        width={1200}
        aria-label='Number of riders by bike ID graph'
      >
        <Bar
          data={this.state}
          options={{
            maintainAspectRatio: false,
            title: {
              display: true,
              text: "Number of riders based off bike id",
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
                  labelString: 'Total number of riders'
                },
                type: 'linear',
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
                  labelString: 'Bike ID\'s'
                }
              }]
            }
          }}
        >
        </Bar>
      </Box>
    );
  }
}