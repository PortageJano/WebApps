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
        <React.Fragment>
          {/* <Box  
            bgcolor="gray"
            color="gray"
            p={2}
            position="absolute"
            bottom={70}
            right="5%"
            height = {60}
            width = {60}>
            <Link to ={"/graph"}  color="inherit">
              this is to the graph page
            </Link>
          </Box> */}
        </React.Fragment>
      );
    }
  }

  export default Home;
  