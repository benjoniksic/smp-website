import React, { useState, useEffect, useRef, useCallback } from "react";
import Map, {
    Layer,
    Source,
    NavigationControl,
    Marker,
    Feature,
} from "react-map-gl";
import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax
import LocationPin from "./LocationPin";
import { ReactComponent as MarkerIcon } from "../../assets/images/pin.svg";
import geoJson from "./geojson.json";

mapboxgl.accessToken =
    "pk.eyJ1IjoiYmVuam8xOTIxIiwiYSI6ImNsZmRjbDVudDB4anUzd24xMmNpaTJnOTIifQ.b01yPawi_DCI-pItoyv5SQ";

const Mapa = ({ location, zoomLevel }) => {
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(-70.9);
    const [lat, setLat] = useState(42.35);
    const [zoom, setZoom] = useState(9);

    useEffect(() => {
        const geojson = {
            type: "FeatureCollection",
            features: [
                {
                    type: "Feature",
                    geometry: {
                        type: "Point",
                        coordinates: [44.032, 18],
                    },
                    properties: {
                        title: "Mapbox",
                        description: "Washington, D.C.",
                    },
                },
                {
                    type: "Feature",
                    geometry: {
                        type: "Point",
                        coordinates: [-122.414, 37.776],
                    },
                    properties: {
                        title: "Mapbox",
                        description: "San Francisco, California",
                    },
                },
            ],
        };

        if (map.current) return; // initialize map only once
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: "mapbox://styles/mapbox/streets-v12",
            center: [lng, lat],
            zoom: zoom,
        });

        for (const feature of geojson.features) {
            // create a HTML element for each feature
            const el = document.createElement("div");
            el.className = "marker";

            // make a marker for each feature and add it to the map
            new mapboxgl.Marker(el)
                .setLngLat(feature.geometry.coordinates)
                .setPopup(
                    new mapboxgl.Popup({ offset: 25 }) // add popups
                        .setHTML(
                            `<h3>${feature.properties.title}</h3><p>${feature.properties.description}</p>`
                        )
                )
                .addTo(map.current);
        }
    });

    useEffect(() => {
        if (!map.current) return; // wait for map to initialize
        map.current.on("move", () => {
            setLng(map.current.getCenter().lng.toFixed(4));
            setLat(map.current.getCenter().lat.toFixed(4));
            setZoom(map.current.getZoom().toFixed(2));
        });
    });

    return (
        <div className="map">
            <div ref={mapContainer} className="map-container" />
        </div>
    );
};

export default Mapa;
