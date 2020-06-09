import React from 'react';

import { Route, Link, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom'
import Box from '@material-ui/core/Box';

class Home extends React.Component{
    constructor(props) {
      super(props);
      this.state = {
        page : "",
      };
    }
    render(){
      
      return(
        <React.Fragment >
          <br></br>
          <br></br>
          <br></br>
          <center>
            <div style={{maxWidth: 700}}>
            <h2> What Is Divvy Bike?</h2>
              <p>
               Divvy Bike is a Chicago and Evanstone bike sharing system. Divvy bike is a program made by the 
                Chicago Department of Transportation or the CDOT.  The CDOT is the owner of the bikes in the city and 
                is the owner of any transportation vehicle in chicago publicly run. The funds from the city came from grants for certain 
                project that promote economic recovery, reduce traffic congestion and improve air quality. The CDOT Misson is to
                create transportation networks safe for users and make transportation environmentally sustainable.
                Divvy bike tries keeping all there bikes accesible with huge availability. They are litterly always avaible.
                Divvy is available for use 24 hours/day, 7 days/week, 365 days/year, and riders have access to all bikes and stations across the city of Chicago and Evanston
                Divvy bike also keeps there prices accesible for a single right up to 30 minutes it will cost you around 3 dollars.
                For a whole day pass unlimited rides in the 24 hour period it will cost you 15$.
                If you are going to be riding with Divvy Bike a lot it may be more optimal to go with the anual pass, $99/a year unlimited 45 minute rides.
              </p> 
              </div>
              <div style={{maxWidth: 700}}>
            <h2> About Our Data </h2>
              <p>
                We got our data from the the City of Chicago API. 
                The API to a lot of the data including divvy bike data can be found here https://data.cityofchicago.org.
                 This resource is good because it provides public information about buisnesses in Chicago.
                This website has been around since 2012 when our previous Mayor Rahm Emmanuel signed an executive order to be able to keep alot of information avaible.
                 The executive order that he signed was called the Open Data Executive Order. 
                 This data is given to you in JSON format and there is no API key needed to get the data is fully free and fully accesible.
                 The API gave us A Lot of data to work with which is really interesting and you can make a lot of cool things with it. Some of the data you can see from
                 our graphs like gender, customer type, distance traveled, cordinates, station id , and bike id. If you want to see the 
                 visualization of this data I would head to our graphs tab to see some nice bar graphs and the map tab to see some nice map data.
              </p>
              </div>
              <div style={{maxWidth: 700}}>
            <h2> About Our Visualization </h2>
              <h3> Graphs </h3>
              <p>
               One of the graphs we created is a gender graph. We are counting the amount of Females/Males that ride Divvy Bikes. 
              There is also the case where they do not put a gender which goes to the unkown category.
               The Gender Distance Graph. We thought this graph would be interesting to see the amount each gender rides the bikes. 
              Seeing demographic statistic between distance traveled.
               Our third graph is seeing the users using the divvy bikes. If they are just customers or if they are subscribers. We thought this would.
               be interesting because it would show how many people are actually paying the annual payment.
               The next graph we have is our Station ID graph. This graph is just showing which stations are the most popular. 
               We thought this graph would be interesting to show which are the hot zones for the divvy bikes.
               The last graph we have is the Bike ID graph. Even thought this graph might not have to much use since all the bikes are the same. 
               It would be interesting to see which bikes are getting used just by chance. 
               </p>
              <h3> MAPS</h3>
              <p>
               We had a pretty interesting idea for our maps page. We are using a MAP APi to generate a map on our website. 
               This map shows all the divvy bike station around in chicago. We are getting the long and lats from the 
               Divvy Bike API data and  plotting the points. We are showing all the bikes if a user doesnt enter any input. If you 
               enter a bike id in the input it will render all the points that the bike has traveled and link lines between them. We thought 
               this would be interesting because we can see where 1 bike has traveled in the span of the day the data comes through. 
               If you really wanted you can find out where the bike you took went after you dropped it off using our map input.
               </p>
              </div>
          </center>
          <br/>
          <br/>
          <br/>
          <br/>
      
        </React.Fragment>
      );
    }
  }

  export default Home;
  