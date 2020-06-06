import React from 'react';
import { Route, Link, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import { Bar } from 'react-chartjs-2';
import Box from '@material-ui/core/Box';
import zIndex from '@material-ui/core/styles/zIndex';

export default class GenderGraph extends React.Component {
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
        var maleCount = 0;
        var maleDistance = 0;
        var femaleDistance = 0;
        var unknownDistance = 0;
        var femaleCount = 0;
        var otherCount = 0;
        var datasetArr = [];
        result.forEach(element => {
          if (element.gender === 'Male') {
            maleCount += 1;
            
            maleDistance += parseInt(element.trip_duration);
          }
          else if (element.gender === 'Female') {
            
            femaleCount += 1;
            femaleDistance += parseInt(element.trip_duration);
          }
          else {
           
            otherCount += 1;
            unknownDistance += parseInt(element.trip_duration);
          }
        });
        console.log( " male " +  maleDistance);
        console.log("female " + femaleDistance);
        console.log( " unknown " + unknownDistance);
        datasetArr.push(maleDistance/maleCount);
        datasetArr.push(femaleDistance/femaleCount);
        datasetArr.push(unknownDistance/otherCount);
        console.log(datasetArr);

        this.setState({
          responsive: true,
          labels: ['Male', 'Female', 'Unknown'],
          datasets: [
            {
              backgroundColor: ['blue', 'green', 'teal'],
              borderColor: 'red',
              borderWidth: 1,
              data: datasetArr,
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
        left="25%" 
        height={500}
        width={900}
        style={{zIndex: -400}}
      >
        <Bar
          style={{zIndex: -400}}
          data={this.state}
          options={{
            maintainAspectRatio: false,
            title: {
              display: true,
              text: "Average trip duration by gender",
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
                  labelString: 'Average travel duration'
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
                  labelString: 'Genders'
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