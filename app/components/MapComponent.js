"use client";

import { MapContainer, TileLayer, Marker, Tooltip } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Custom Red Icon (to match Bhagat branding)
const redIcon = new L.Icon({
  iconUrl: "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png",
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

const locations = [
  { name: "Bihar", coords: [25.0961, 85.3131], desc: "Infrastructure, Patna" },
  { name: "Maharashtra", coords: [19.7515, 75.7139], desc: "Mumbai Projects, Pune" },
  { name: "Gujarat", coords: [22.2587, 71.1924], desc: "DDUGJY, Ahmedabad" },
  { name: "Telangana", coords: [18.1124, 79.0193], desc: "Hyderabad Hub" },
  { name: "West Bengal", coords: [22.9868, 87.8550], desc: "Kolkata Dev" },
];

export default function MapComponent() {
  return (
    <div className="w-full h-full min-h-[300px] sm:min-h-[400px] rounded-xl overflow-hidden relative z-0 border border-gray-200">
      <MapContainer
        center={[22.5, 79.0]} // Center of India
        zoom={4.5}
        scrollWheelZoom={false}
        className="w-full h-full min-h-[300px] sm:min-h-[400px] z-0"
        style={{ zIndex: 0 }}
      >
        <TileLayer
          attribution='&copy; <a href="https://carto.com/">Carto</a>'
          url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
        />
        {locations.map((loc, i) => (
          <Marker key={i} position={loc.coords} icon={redIcon}>
            <Tooltip direction="top" offset={[0, -40]} opacity={1} permanent={false}>
              <div className="text-center p-1">
                <p className="font-bold text-[#E61B23] text-sm m-0 leading-tight">{loc.name}</p>
                <p className="text-xs text-gray-600 m-0 mt-0.5">{loc.desc}</p>
              </div>
            </Tooltip>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
