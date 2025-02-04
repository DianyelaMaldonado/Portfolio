import React, { useRef, useEffect, useState } from "react";
import mapboxgl from "mapbox-gl";
import "./Maps.scss";

mapboxgl.accessToken =
  "pk.eyJ1IjoiZGlhbnllbGFtYWxkb25hZG8iLCJhIjoiY2tlYWF0dHVlMHppNzJyazB4NW93bWVwbCJ9.Ek9X_CGe_dHZar18cG6UDw";

export function Map() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng] = useState(-99.13);
  const [lat] = useState(19.42);
  const [zoom] = useState(11);

  useEffect(() => {
    if (map.current) return;
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v12",
      center: [lng, lat],
      zoom: zoom,
    });
  }, []);

  return (
    <div className='map'>
      <div ref={mapContainer} className='map-container' />
    </div>
  );
}
