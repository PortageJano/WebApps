import React, { useState } from 'react';
import { Route, Link, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';

import GenderGraph from '../data/genderGraph.js';
import SubmissionBox from '../components/submit.js';

export default class Graph extends React.Component {
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
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler(value) {
    this.setState({
      page: "m",
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
      <React.Fragment>
        <GenderGraph props={this.state}/>
        <SubmissionBox props={this.state}/>   
      </React.Fragment>
    );
  }
}