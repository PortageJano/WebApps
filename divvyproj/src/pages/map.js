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
              onMouseEnter={() => setHoverStation(station)}
              onMouseLeave={() => setHoverStation(null)}
              onClick={(e) => {
                e.preventDefault();
                setSelectedStation(station); // Keep this to display routes
              }}
            >
              <img src="/bike.svg" alt="Station Marker Icon" />
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
              <h3>{hoverStation.properties.title}</h3>
              <p>{hoverStation.properties.description}</p>
            </div>
          </Popup>
        ) : null}

        {selectedStation ? (
          null
          // <PolylineOverlay point={[selectedStation.geometry.coordinates[0],selectedStation.geometry.coordinates[1]]}/>
          // <PolylineOverlay points={[[-87.649993,41.952833],[-87.654406,41.954245]]}/>
        ) : null}
      </ReactMapGL>
    </div>
  )
}