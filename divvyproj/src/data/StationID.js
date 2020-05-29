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
        var stations = new HashMap();
        console.log("hi")
        result.forEach(element => {
          if (stations.has(element.from_station_id)) {
            var a = stations.get(element.from_station_id);
            a +=1;
            stations.set(element.from_station_id, a);
          }
          else{
            stations.set(element.from_station_id, 0);
          }

          if (stations.has(element.to_station_id)) {
            var a = stations.get(element.to_station_id);
            a +=1;
            stations.set(element.to_station_id, a);
          }
          else{
            stations.set(element.to_station_id, 0);
          }

          
        });
        stations.forEach(function(value, key) {
            console.log(key + " : " + value);
            if(value == 0)
            {
                stations.remove(key);
            }
        });

       console.log("hi")
        console.log(stations.keys());
        console.log(stations.values());
        this.setState({
          responsive: true,
          labels: stations.keys(),
          datasets: [
            {
              backgroundColor: ['blue', 'green', 'teal'],
              borderColor: 'red',
              borderWidth: 1,
              data: stations.values(),
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
        height={500}
        width={700}
      >
        <Bar
          data={this.state}
          options={{
            maintainAspectRatio: false,
            title: {
              display: true,
              text: "Total amount of stations used by Station ID",
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
                  labelString: 'Number of times a station was used'
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
                  labelString: 'Stations ID\'s'
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