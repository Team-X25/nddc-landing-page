import React, { useState, useEffect, useRef } from "react";
import {
  MapContainer,
  TileLayer,
  GeoJSON,
  Marker,
  Popup,
  useMap,
} from "react-leaflet";
import { Icon, LatLngBounds, LatLngTuple } from "leaflet";
import { Maximize, Minimize, Compass } from "lucide-react";
import { State, City } from "../../types/map-types";
import { motion } from "framer-motion";

// Niger Delta GeoJSON boundaries would go here in a real app
// This is simplified for the example
const dummyGeoJSON = {
  type: "FeatureCollection",
  features: [
    // Features would contain actual state boundaries
  ],
};

interface MapViewProps {
  states: State[];
  cities: City[];
  activeState: string | null;
  activeCity: string | null;
  onStateClick: (stateId: string) => void;
  onCityClick: (cityId: string, stateId: string) => void;
  openCityModal: (cityId: string) => void;
}

// Component to handle map flying to locations
const FlyToLocation = ({
  center,
  zoom,
}: {
  center: LatLngTuple;
  zoom: number;
}) => {
  const map = useMap();

  useEffect(() => {
    map.flyTo(center, zoom, {
      duration: 1.5,
      easeLinearity: 0.25,
    });
  }, [center, map, zoom]);

  return null;
};

const MapView: React.FC<MapViewProps> = ({
  states,
  cities,
  activeState,
  activeCity,
  onStateClick,
  onCityClick,
  openCityModal,
}) => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const mapRef = useRef<HTMLDivElement>(null);

  const mapCenter: LatLngTuple = [5.3, 6.5]; // Approximate center of Niger Delta
  const defaultZoom = 7;
  const stateZoom = 9;
  const cityZoom = 11;

  // Target coordinates and zoom level based on active selections
  let targetCenter = mapCenter;
  let targetZoom = defaultZoom;

  if (activeCity) {
    const city = cities.find((c) => c.id === activeCity);
    if (city) {
      targetCenter = city.coordinates;
      targetZoom = cityZoom;
    }
  } else if (activeState) {
    const state = states.find((s) => s.id === activeState);
    if (state) {
      targetCenter = state.coordinates;
      targetZoom = stateZoom;
    }
  }

  const toggleFullscreen = () => {
    if (mapRef.current) {
      if (!isFullscreen) {
        if (mapRef.current.requestFullscreen) {
          mapRef.current.requestFullscreen();
        }
      } else {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        }
      }
      setIsFullscreen(!isFullscreen);
    }
  };

  // Custom icon for city markers
  const cityIcon = new Icon({
    iconUrl:
      "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-blue.png",
    shadowUrl:
      "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
  });

  return (
    <motion.div
      ref={mapRef}
      className="relative w-full h-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <MapContainer
        center={mapCenter}
        zoom={defaultZoom}
        className="w-full h-full"
        zoomControl={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          errorTileUrl="https://via.placeholder.com/256?text=Tile+Error"
        />

        {/* Fly to active state or city */}
        <FlyToLocation center={targetCenter} zoom={targetZoom} />

        {/* Render city markers */}
        {cities.map((city) => (
          <Marker
            key={city.id}
            position={city.coordinates}
            icon={cityIcon}
            eventHandlers={{
              click: () => {
                onCityClick(city.id, city.stateId);
                openCityModal(city.id);
              },
            }}
          >
            <Popup>
              <div className="text-center">
                <h3 className="font-medium">{city.name}</h3>
                <p className="text-sm text-gray-600">
                  {city.projectCount} projects
                </p>
                <button
                  onClick={() => openCityModal(city.id)}
                  className="mt-2 px-3 py-1 text-xs bg-secondary-500 text-white rounded hover:bg-secondary-600"
                >
                  View Projects
                </button>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>

      {/* Map controls */}
      <div className="absolute top-4 right-4 flex flex-col space-y-2">
        <button
          onClick={toggleFullscreen}
          className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors"
          aria-label={isFullscreen ? "Exit fullscreen" : "Enter fullscreen"}
        >
          {isFullscreen ? <Minimize size={20} /> : <Maximize size={20} />}
        </button>
        <button
          onClick={() => {
            onStateClick("");
            onCityClick("", "");
          }}
          className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors"
          aria-label="Reset view"
        >
          <Compass size={20} />
        </button>
      </div>
    </motion.div>
  );
};

export default MapView;
