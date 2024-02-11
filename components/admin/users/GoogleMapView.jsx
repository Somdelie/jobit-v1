"use client";
import { UserLocationContext } from "@/context/UseLocationContext";
import { users } from "@/data/data";
import {
  GoogleMap,
  InfoWindow,
  LoadScript,
  Marker,
  MarkerF,
} from "@react-google-maps/api";
import { useContext, useEffect, useState } from "react";
import Tabs from "./Tabs";

const GoogleMapView = () => {
  const { userLocation, setUserLocation } = useContext(UserLocationContext);
  const [selectedUser, setSelectedUser] = useState(null);
  const [userAddresses, setUserAddresses] = useState({});
  const [mapCenter, setMapCenter] = useState({
    latitude: -26.2041,
    longitude: 28.0473, // Default center (Gauteng)
  });
  const containerStyle = {
    with: "100%",
    height: "80vh",
  };

  useEffect(() => {
    const fetchUserAddresses = async () => {
      const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
      const addresses = {};

      for (const user of users) {
        const { lat, lng } = user;
        const response = await fetch(
          `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${apiKey}`
        );
        const data = await response.json();

        if (data.results && data.results.length > 0) {
          addresses[`${lat},${lng}`] = data.results[0].formatted_address;
        }
      }

      setUserAddresses(addresses);
    };

    fetchUserAddresses();
  }, []);

  // console.log(users);
  return (
    <div>
      <Tabs setMapCenter={setMapCenter} />
      <LoadScript
        googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}
      >
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={{ lat: mapCenter.latitude, lng: mapCenter.longitude }}
          zoom={11}
          options={{
            mapId: "12c487fb04469dfc",
            mapTypeControl: true,
          }}
        >
          <MarkerF
            position={userLocation}
            icon={{
              url: "/3d-map.png",
              scaledSize: {
                width: 50,
                height: 50,
              },
            }}
          />
          {users?.map((user, index) => (
            <Marker
              key={index}
              position={{ lat: user?.lat, lng: user?.lng }}
              onClick={() => setSelectedUser(user)}
              icon={{
                url: "/map-pin.png",
                scaledSize: {
                  width: 50,
                  height: 50,
                },
              }}
            />
          ))}
          {selectedUser && (
            <InfoWindow
              position={{ lat: selectedUser.lat, lng: selectedUser.lng }}
              onCloseClick={() => setSelectedUser(null)}
            >
              <div>
                <h2>{selectedUser.name}</h2>
                <p className="p-1">
                  {userAddresses[`${selectedUser.lat},${selectedUser.lng}`]}
                </p>
              </div>
            </InfoWindow>
          )}
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default GoogleMapView;
