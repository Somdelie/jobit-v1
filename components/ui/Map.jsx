"use client";
import { useEffect, useRef, useMemo } from "react";
import { Loader } from "@googlemaps/js-api-loader";

function Map({ address }) {
  const mapRef = useRef(null);

  useEffect(() => {
    const loader = new Loader({
      apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
      version: "weekly",
    });

    loader
      .load()
      .then(() => {
        const geocoder = new google.maps.Geocoder();

        // Get user's current location
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
            (position) => {
              const userLocation = {
                lat: position.coords.latitude,
                lng: position.coords.longitude,
              };

              const map = new google.maps.Map(mapRef.current, {
                center: userLocation,
                zoom: 8,
                // Disable default UI controls, including the Google logo
                disableDefaultUI: true,
              });

              const marker = new google.maps.Marker({
                map: map,
                position: userLocation,
              });
            },
            (error) => {
              console.error("Error getting user's location:", error);
            }
          );
        } else {
          console.error("Geolocation is not supported by this browser.");
        }
      })
      .catch((error) => {
        console.error("Error loading Google Maps:", error);
      });
  }, []);

  return <div style={{ height: "300px" }} ref={mapRef} />;
}

export default Map;
