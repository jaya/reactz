import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
import "leaflet-defaulticon-compatibility";

interface MapProps {
  center: [number, number];
  zoom?: number;
  scrollWheelZoom?: boolean;
  height?: number | string;
  width?: number | string;
  marginTop?: number | string;
  markers?: {
    id: string;
    position: [number, number];
    children: React.ReactNode;
  }[]
}

const Map = ({  
  center, 
  zoom = 13, 
  scrollWheelZoom = true, 
  width = '100%', 
  height = 300,
  marginTop = 0,
  markers = [],
}: MapProps) => {
  return (
    <MapContainer center={center} zoom={zoom} scrollWheelZoom={scrollWheelZoom} style={{height, width, marginTop }}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      
      {markers?.map((marker => (
        <Marker key={marker.id} position={marker.position}>
          <Popup>
            {marker.children}
          </Popup>
        </Marker>
      )))}
    </MapContainer>
  )
}

export default Map