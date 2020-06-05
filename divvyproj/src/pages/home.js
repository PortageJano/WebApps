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
            <h2> What is Divvy Bike?</h2>
              <p>
                <br/>Divvy Bike is a Chicago and Evanstone bike sharing system. Divvy bike is a program made by the 
                <br/>Chicago Department of Transportation or the CDOT.  The CDOT is the owner of the bikes in the city and 
                <br/>is the owner of any transportation vehicle in chicago publicly run. The funds from the city came from grants for certain 
                <br/>project that promote economic recovery, reduce traffic congestion and improve air quality. The CDOT Misson is to
                <br/>create transportation networks safe for users and make transportation environmentally sustainable.
                <br/>Divvy bike tries keeping all there bikes accesible with huge availability. They are litterly always avaible.
                <br/>Divvy is available for use 24 hours/day, 7 days/week, 365 days/year, and riders have access to all bikes and stations across the city of Chicago and Evanston
                <br/>Divvy bike also keeps there prices accesible for a single right up to 30 minutes it will cost you around 3 dollars.
                <br/> For a whole day pass unlimited rides in the 24 hour period it will cost you 15$.
                <br/> If you are going to be riding with Divvy Bike a lot it may be more optimal to go with the anual pass, $99/a year unlimited 45 minute rides.
              </p> 
            <h2> About our data </h2>
              <p>
                <br/> We got our data from the the City of Chicago API. 
                <br/> The API to a lot of the data including divvy bike data can be found here https://data.cityofchicago.org.
                <br/> This resource is good because it provides public information about buisnesses in Chicago.
                <br/> This website has been around since 2012 when our previous Mayor Rahm Emmanuel signed an executive order to be able to keep alot of information avaible.
                <br/> The executive order that he signed was called the Open Data Executive Order. 
                <br/> This data is given to you in JSON format and there is no API key needed to get the data is fully free and fully accesible.
                <br/> The API gave us A Lot of data to work with which is really interesting and you can make a lot of cool things with it. Some of the data you can see from
                <br/> our graphs like gender, customer type, distance traveled, cordinates, station id , and bike id. If you want to see the 
                <br/> visualization of this data I would head to our graphs tab to see some nice bar graphs and the map tab to see some nice map data.
              </p>
            <h2> About our Visualization </h2>
              <h4> Graphs </h4>
              <br/> One of the graphs we created is a gender graph. We are counting the amount of Females/Males that ride Divvy Bikes. 
              <br/> There is also the case where they do not put a gender which goes to the unkown category.
              <br/> The Gender Distance Graph. We thought this graph would be interesting to see the amount each gender rides the bikes. 
              <br/> Seeing demographic statistic between distance traveled.
              <br/> Our third graph is seeing the users using the divvy bikes. If they are just customers or if they are subscribers. We thought this would.
              <br/> be interesting because it would show how many people are actually paying the annual payment.
              <br/> The next graph we have is our Station ID graph. This graph is just showing which stations are the most popular. 
              <br/> We thought this graph would be interesting to show which are the hot zones for the divvy bikes.
              <br/> The last graph we have is the Bike ID graph. Even thought this graph might not have to much use since all the bikes are the same. 
              <br/> It would be interesting to see which bikes are getting used just by chance. 
              <h4> MAPS</h4>
              <br/> We had a pretty interesting idea for our maps page. We are using a MAP APi to generate a map on our website. 
              <br/> This map shows all the divvy bike station around in chicago. We are getting the long and lats from the 
              <br/> Divvy Bike API data and  plotting the points. We are showing all the bikes if a user doesnt enter any input. If you 
              <br/> enter a bike id in the input it will render all the points that the bike has traveled and link lines between them. We thought 
              <br/> this would be interesting because we can see where 1 bike has traveled in the span of the day the data comes through. 
              <br/> If you really wanted you can find out where the bike you took went after you dropped it off using our map input.
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
  