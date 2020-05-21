import React from 'react';

export default class Map extends React.Component{
    render(){
      return (
        <h1> this is the map page this is the queries {decodeURIComponent(new URLSearchParams(window.location.search).get("msg"))} </h1>
      );
    }
  }