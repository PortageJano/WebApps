import React from 'react';
import ReactDOM from 'react-dom';
import {Bar} from 'react-chartjs-2';
import {Line} from 'react-chartjs-2';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom'
import AppBar from "@material-ui/core/AppBar";
import Drawer from "@material-ui/core/Drawer";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import { Container } from '@material-ui/core';




class Home extends React.Component{
    render(){
      return(
        <h1> this is the home page </h1>
      );
    }
}
class Graph extends React.Component{
  constructor(props) {
  super(props);
  this.state = {
    
    
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

componentDidMount(){

 fetch('https://data.cityofchicago.org/resource/fg6s-gzvg.json')
  .then(res => res.json())
 .then((result) => { 
   console.log(result);
  var a = 0;
  var b = 0;
  var c = 0;
var d = [];
   result.forEach(element =>{

    if(element.gender == 'Male')
    {
        a+=1;
    }
    else if(element.gender == 'Female')
    {
        b+=1;
    }
    else
    {
        c +=1;
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
        labels: ['Male' , "Female", 'Unkown'],
        datasets: [
        {
          
          backgroundColor:  ['blue' ,'green' , 'teal'],
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
  return (
    <React.Fragment>
      <AppBar>
      <Typography variant="h2" >
      News
    </Typography>
      </AppBar>
      <Container maxWidth="sm">
      <Bar
       width={20}
       height={400}
        data={this.state}
        options={{
          maintainAspectRatio: false ,
          title:{
            display:true,
            text:"Gender from divy bikes",
            fontSize:20
          },
          legend:{
            display:false,
            position:'top'
          },
          scales:{
          yAxes: [{
            scaleLabel: {
              display: true,
              labelString: 'Bikes rented by gender'
            },
           
            type: 'logarithmic',
              min: 1,
              max: 9,   
              ticks: {
                callback: function(value, index, values) {
                  return Number(value.toString());
                 }
         },
                        
             }],
             
             xAxes: [{
              scaleLabel: {
                display: true,
                labelString: 'Year'
              }
                          
               }]

        }}}
      >
   </Bar>
   </Container>
   <Drawer 
      width={200} anchor="right" variant="permanent">
        <Typography>
          Want to see some Map data?
        </Typography>
   </Drawer>

   </React.Fragment>
  );
}
}
class Map extends React.Component{
  render(){
    return (
      <h1> this is the map page </h1>
    );
  }
}
const routing = (
  <Router>
    <div>
      <Switch>
      <Route exact path="/">
        <Home></Home>
        </Route>

      <Route path="/graph">
       <Graph> </Graph>
       </Route>
      <Route path="/map">
        <Map></Map>
        </Route>
      </Switch>
    </div>
  </Router>
)
ReactDOM.render(routing, document.getElementById('root'));
