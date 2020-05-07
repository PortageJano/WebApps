import React from 'react';

import ReactDOM from 'react-dom';
import {Bar} from 'react-chartjs-2';





import {Line} from 'react-chartjs-2';


class Appli extends React.Component {
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
      <div>
        <Bar
          data={this.state}
          options={{
            
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
        />
      </div>
    );
  }
}
ReactDOM.render(
  <Appli />, 
  document.getElementById('root')
);
