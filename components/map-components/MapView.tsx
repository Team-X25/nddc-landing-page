import React, { useState, useEffect, useRef } from "react";
// import { MapPin } from "lucide-react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
} from "react-leaflet";
import { LatLngTuple, divIcon } from "leaflet";
import { Maximize, Minimize, Compass } from "lucide-react";
import { State, City } from "../../types/map-types";
import { motion } from "framer-motion";
import styles from "./MapView.module.css";

// Niger Delta GeoJSON boundaries would go here in a real app
// This is simplified for the example
// const dummyGeoJSON = {
//   type: "FeatureCollection",
//   features: [
//     // Features would contain actual state boundaries
//   ],
// };

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
  const [mapError, setMapError] = useState<string | null>(null);
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

  useEffect(() => {
    // Handle fullscreen changes
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
    };
  }, []);

  const toggleFullscreen = () => {
    if (mapRef.current) {
      try {
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
      } catch (error) {
        setMapError("Failed to toggle fullscreen mode");
        console.error("Fullscreen error:", (error as Error));
      }
    }
  };

  // Create custom icon using MapPin
  const createCustomIcon = (isActive: boolean) => {
    return divIcon({
      className: styles['custom-marker'],
      html: `<div class="relative">
        <svg 
          width="32" 
          height="32" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="${isActive ? '#2563eb' : '#1e40af'}" 
          stroke-width="2" 
          stroke-linecap="round" 
          stroke-linejoin="round"
        >
          <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
          <circle cx="12" cy="10" r="3"/>
        </svg>
      </div>`,
      iconSize: [32, 32],
      iconAnchor: [16, 32],
      popupAnchor: [0, -32]
    });
  };

  if (mapError) {
    return (
      <div className="flex items-center justify-center h-full bg-gray-100">
        <div className="text-center p-4">
          <p className="text-red-500 mb-2">{mapError}</p>
          <button
            onClick={() => setMapError(null)}
            className="px-4 py-2 bg-primary-500 text-white rounded hover:bg-primary-600"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

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
        scrollWheelZoom={true}
        doubleClickZoom={true}
        touchZoom={true}
        dragging={true}
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
            icon={createCustomIcon(city.id === activeCity)}
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
