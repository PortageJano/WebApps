import React, { useState, useEffect } from 'react';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import * as stationData from '../data/divvy-bike-stations.json';

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

  const [hoverStation, setHoverStation] = useState(null);

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

  return (
    <div>
      <h1>.</h1>
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
              onMouseEnter={() => setHoverStation(station)}
              onMouseLeave={() => setHoverStation(null)}
              onClick={(e) => {
                e.preventDefault();
                setSelectedStation(station); // Keep this to display routes
              }}
            >
              <img src="/bike.svg" alt="Station Marker Icon"/>
            </button>
          </Marker>
        ))}

        {hoverStation ? (
          <Popup 
            latitude={hoverStation.geometry.coordinates[1]} 
            longitude={hoverStation.geometry.coordinates[0]}
            onClose={() => {
              setSelectedStation(null);
            }}
          >
            <div>
              <small>{"station: " + hoverStation.properties.STATION_ID}</small>
              <h3>{hoverStation.properties.title}</h3>
              <p>{hoverStation.properties.description}</p>
            </div>
          </Popup>
        ) : null}

        {selectedStation ? (
          null
        ) : null}
      </ReactMapGL>
    </div>
  )
}