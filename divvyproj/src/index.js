import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';

import Home from './pages/home.js';
import Graph from './pages/graph.js';
import Map from './pages/map.js';
import NavBar from './nav.js';

import './index.css';

class App extends React.Component {
  render() {
    return (
      <Router>
        <NavBar />
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
