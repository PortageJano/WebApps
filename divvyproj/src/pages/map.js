import React, { useState, useEffect } from 'react';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import * as stationData from '../data/divvy-bike-stations.json';

import PolylineOverlay from '../components/polylineOverlay.js';


export default function Map() {
  const [viewport, setViewport] = useState({
    latitude: 41.8781,
    longitude: -87.6298,
    left: "5%",
    top: "12%",
    width: "75%",
    height: "100vh",
    zoom: 11
  });
  const [selectedStation, setSelectedStation] = useState(null);

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
      <ReactMapGL 
        {...viewport} 
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
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
              <img src="/bike.svg" alt="Station Marker Icon" />
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