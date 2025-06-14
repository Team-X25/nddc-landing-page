import React, { useState, useEffect } from "react";
import "leaflet/dist/leaflet.css";
import Sidebar from "../components/map-components/Sidebar";
import MapView from "../components/map-components/MapView";
import CityProjectsModal from "../components/map-components/CityProjectsModal";
import { states, cities, projects } from "../data/nigerDeltaData";
import { City } from "../types/map-types";

const MapPage = () => {
  const [sidebarOpen] = useState(true);
  const [activeState, setActiveState] = useState<string | null>(null);
  const [activeCity, setActiveCity] = useState<string | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCity, setSelectedCity] = useState<City | null>(null);
  const [isMapReady, setIsMapReady] = useState(false);

  useEffect(() => {
    // Ensure Leaflet is loaded in the browser
    if (typeof window !== "undefined") {
      setIsMapReady(true);
    }
  }, []);

  const handleStateClick = (stateId: string) => {
    setActiveState(stateId || null);
    if (!stateId) {
      setActiveCity(null);
    }
  };

  const handleCityClick = (cityId: string, stateId: string) => {
    setActiveCity(cityId || null);
    setActiveState(stateId || activeState);
  };

  const openCityModal = (cityId: string) => {
    const city = cities.find((c) => c.id === cityId);
    if (city) {
      setSelectedCity(city);
      setModalOpen(true);
    }
  };

  const closeCityModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="flex h-screen relative">
      <Sidebar
        states={states}
        isOpen={sidebarOpen}
        onStateClick={handleStateClick}
        onCityClick={handleCityClick}
        activeState={activeState}
        activeCity={activeCity}
      />

      <div className="flex-1 relative overflow-hidden">
        <div className="absolute inset-0 h-[100vh] w-full">
          {isMapReady && (
            <MapView
              states={states}
              cities={cities}
              activeState={activeState}
              activeCity={activeCity}
              onStateClick={handleStateClick}
              onCityClick={handleCityClick}
              openCityModal={openCityModal}
            />
          )}
        </div>
      </div>

      <CityProjectsModal
        isOpen={modalOpen}
        onClose={closeCityModal}
        city={selectedCity}
        projects={projects}
      />
    </div>
  );
};

export default MapPage;
