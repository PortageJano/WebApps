import React from 'react';
import ReactDOM from 'react-dom';
import mapboxgl from 'mapbox-gl';
import { withStyles } from '@material-ui/core/styles';

import SubmissionBox from '../components/submit.js';

mapboxgl.accessToken = 'pk.eyJ1IjoiY2hyaXNsYmFycmVyYSIsImEiOiJja2FrMWQwZWwwazExMnlsNjczejhnZ3R2In0.YIL2WuTSwDKnelA0crDfsw';



class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: 41.8781,
      lng: -87.6298,
      zoom: 13
    }
  }

  componentDidMount() {
    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/chrislbarrera/ckakc4c0i1jbj1ioc7hkkxb2r',
      center: [this.state.lng, this.state.lat],
      zoom: this.state.zoom,
    });
    map.on('move', () => {
      this.setState({
        lng: map.getCenter().lng.toFixed(4),
        lat: map.getCenter().lat.toFixed(4),
        zoom: map.getZoom().toFixed(2)
      });
    });
  }

  render() {
    const style = {
      position: 'absolute',
      top: '12%',
      bottom: 0,
      width: '75%'
    };
    return (
      <div>
        <div ref={el => this.mapContainer = el} style={style}/>
        <SubmissionBox/>
      </div>
    );
  }
}

export default Map;
  //   render(){
  //     return (
  //       <h1> this is the map page this is the queries {decodeURIComponent(new URLSearchParams(window.location.search).get("msg"))} </h1>
  //     );
  //   }
  // }