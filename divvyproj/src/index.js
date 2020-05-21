import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom'

// import AppBar from "@material-ui/core/AppBar";
// import Drawer from "@material-ui/core/Drawer";
// import Typography from "@material-ui/core/Typography";
// import Divider from "@material-ui/core/Divider";
// import { Container } from '@material-ui/core';
// import { positions } from '@material-ui/system';
// import Grid from '@material-ui/core/Grid';
// import Paper from '@material-ui/core/Paper';

import Home from './pages/home.js';
import Graph from './pages/graph.js';
import Map from './pages/map.js';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/graph">
              <Graph />
            </Route>
            <Route path={"/map"}>
              <Map />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

ReactDOM.render(<React.StrictMode> <App /> </React.StrictMode>, document.getElementById('root'));
