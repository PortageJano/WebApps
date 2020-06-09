import React, { useState, useEffect } from 'react';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import * as stationData from '../data/divvy-bike-stations.json';

// import PolylineOverlay from '../components/polylineOverlay.js';
// import Box from '@material-ui/core/Box';
// import TextField from '@material-ui/core/TextField';
// import Button from '@material-ui/core/Button';
// import {
//   BrowserRouter as Router,
//   Redirect
// } from "react-router-dom";


export default function Map() { 
  const [selectedStation, setSelectedStation] = useState(null);
  var lo = new URLSearchParams(window.location.search);
  var st = {
    latitude: 41.8781,
    longitude: -87.6298,
    left: "5%",
    top: "12%",
    width: "75%",
    height: "100vh",
    zoom: 11
  };
  console.log(window.location.href.length);
  const [viewport, setViewport] = useState(st);
  const [newQ, setNewQ] = useState(true);
  const [valz, setValz] = useState("");
  const [srch, setSrch] = useState(false);
  const [urlOr, setOrigin] = useState("");

   if(lo.has("stationId")&&newQ) {
     stationData.features.forEach(element => {
       if (element.properties.STATION_ID.localeCompare(lo.get("stationId")) === 0) {
         setViewport({latitude : element.geometry.coordinates[1],
           longitude: element.geometry.coordinates[0],
               left: "5%",
               top: "12%",
               width: "75%",
               height: "100vh",
           zoom: 15
         });
         setNewQ(false);
      }
    });
  }


  // Escape key listener
  useEffect(() => {
    const listener = (e) => {
      if(e.key === "Escape") {
        setSelectedStation(null);
      }
    };
    window.addEventListener("keydown", listener);

    // cleanup
    return () => {
      window.removeEventListener("keydown", listener);  
    }
  }, []);

  // var a = "";
  // if (srch) {
  //   if (valz.length > 0) {
  //     a = "/map" + "?stationId=" + encodeURIComponent(valz);
  //     // console.log(urlOr);
  //     // if((urlOr.localeCompare(""))===0){
  //     //   console.log(urlOr);
  //     //   setOrigin(window.location.href);
  //     //   console.log(urlOr);
  //     // }
  //     //window.location.href=window.location.href+a;
  //     //window.location.href=window.location.href.slice(26,window.location.href.length)+a;
  //     return <Redirect to={a} push to={a}></Redirect>
  //   }
  //   setSrch(false);
  //   return <Redirect to={'/map'} push to={'/map'}></Redirect>
  //}
  return (
    <div>
      <ReactMapGL 
        {...viewport} 
        mapboxApiAccessToken='pk.eyJ1IjoiY2hyaXNsYmFycmVyYSIsImEiOiJja2FrMWQwZWwwazExMnlsNjczejhnZ3R2In0.YIL2WuTSwDKnelA0crDfsw'
        mapStyle="mapbox://styles/chrislbarrera/ckakc4c0i1jbj1ioc7hkkxb2r"
        onViewportChange={viewport => {
          setViewport(viewport);
        }}
      >
        {stationData.features.map(station => (
          <Marker 
            key={station.properties.STATION_ID} 
            latitude={station.geometry.coordinates[1]}
            longitude={station.geometry.coordinates[0]}
          >
            <button 
              className="marker-btn" 
              onClick={(e) => {
                e.preventDefault();
                setSelectedStation(station);
              }}
            >
              <img src="/bike.svg" alt="Station Marker Icon" aria-label='Station Marker Icon' />
            </button>
          </Marker>
        ))}

        {selectedStation ? (
          // <PolylineOverlay points={[[-87.649993,41.952833],[-87.654406,41.954245]]}/>
          <Popup 
            latitude={selectedStation.geometry.coordinates[1]} 
            longitude={selectedStation.geometry.coordinates[0]}
            onClose={() => {
              setSelectedStation(null);
            }}
          >
            <div>
              <h3>{selectedStation.properties.title}</h3>
              <p>{selectedStation.properties.description}</p>
            </div>
          </Popup>
        ) : null}
      </ReactMapGL>
    </div>
  )
}