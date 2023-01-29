import React from "react";
import PageHead from "../PageHead";
import Page from "../Page";
import MarkerCluster from "./MarkerCluster";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";



export default function Map({ users }) {
  console.log(users);
  return (
   <>
      <PageHead
        title="LinkFree Users Around The Wrold"
        description="This map shows all the locations of LinkFree users based on the location provided in their GitHub profiles."
      />
      <Page>
      <h1 className="text-4xl mb-4 font-bold">LinkFree Users Around The World</h1>
    <MapContainer
      style={{ height: "100vh",
       width:"width: 100vw",
        zIndex: 10 }}
      center={[16.843908, -18.09]}
      zoom={2}
      zoomControl={true}
      scrollWheelZoom={true}
      maxBounds={null}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <MarkerCluster>
      {users.filter(user => user.location != null).map((user) => (
        
        <div key={user.username}>
          <Marker
            icon={L.icon({
              className: "rounded-full",
              iconUrl: `https://github.com/${user.username}.png`,
              popupAnchor: [0, -10],
              iconSize: [40, 40],
              iconAnchor: [20, 20],
            })}
            position={[user.location.lat, user.location.lon]}
          >
            <Popup>
              <div className="flex flex-col gap-[5px]">
                <h1 className="font-[600]">{user.username}</h1>
                <span>Location - {user.location.provided}</span>
                <span>Bio - {user.bio}</span>
              </div>
            </Popup>
          </Marker>
          </div>
           ))}
           </MarkerCluster>
    </MapContainer>
    </Page>
</>
  );
}
