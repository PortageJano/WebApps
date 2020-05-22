import React from 'react';
import { Route, Link, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import { Bar } from 'react-chartjs-2';
import Box from '@material-ui/core/Box';

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
        var femaleCount = 0;
        var otherCount = 0;
        var datasetArr = [];
        result.forEach(element => {
          if (element.gender === 'Male') {
            maleCount += 1;
          }
          else if (element.gender === 'Female') {
            femaleCount += 1;
          }
          else {
            otherCount += 1;
          }
        });
        datasetArr.push(maleCount);
        datasetArr.push(femaleCount);
        datasetArr.push(otherCount);

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