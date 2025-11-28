import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const sampleGeoJson = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {
        "name": "Accessible Toilet",
        "wheelchair": "yes"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [13.405, 52.52] // lng, lat
      }
    }
  ]
};

export default function SimpleGeoJsonMap() {
  return (
    <MapContainer
      center={[52.52, 13.405]}     // Berlin center
      zoom={13}
      style={{ height: "100vh", width: "100%" }}
    >
      {/* Base Map */}
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; OpenStreetMap contributors"
      />

      {/* GeoJSON Layer */}
      <GeoJSON
        data={sampleGeoJson}
        onEachFeature={(feature, layer) => {
          if (feature.properties && feature.properties.name) {
            layer.bindPopup(
              `<b>${feature.properties.name}</b><br/>Wheelchair: ${feature.properties.wheelchair}`
            );
          }
        }}
      />
    </MapContainer>
  );
}