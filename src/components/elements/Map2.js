import React, { useRef, useEffect } from "react";
import mapboxgl from "mapbox-gl";
import "./Map2.css";
import "mapbox-gl/dist/mapbox-gl.css";
import geoJson from "./chicago-parks.json";

mapboxgl.accessToken =
    "pk.eyJ1IjoiYmVuam9uaWtzaWMiLCJhIjoiY201bDFodjdxMW1paDJqcHdhdDd2cXh3YyJ9.VnLL-Ca3f51O2OqHx2JXFw";

const Map = () => {
    const mapContainerRef = useRef(null);

    // Initialize map when component mounts
    useEffect(() => {
        const map = new mapboxgl.Map({
            container: mapContainerRef.current,
            style: "mapbox://styles/mapbox/satellite-streets-v12",
            center: [18.296622547826612, 43.83887484528345],
            zoom: 14.1,
        });

        // Create default markers
        geoJson.features.map((feature) =>
            new mapboxgl.Marker()
                .setLngLat(feature.geometry.coordinates)
                .addTo(map)
        );

        // Add navigation control (the +/- zoom buttons)
        map.addControl(new mapboxgl.NavigationControl(), "top-right");

        // Clean up on unmount
        return () => map.remove();
    }, []);

    return <div className="map-container" ref={mapContainerRef} />;
};

export default Map;
