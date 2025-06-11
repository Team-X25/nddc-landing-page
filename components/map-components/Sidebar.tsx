import React, { useState } from "react";
import { Search, ChevronDown, ChevronUp } from "lucide-react";
import { State} from "../../types/map-types";
import { motion, AnimatePresence } from "framer-motion";

interface SidebarProps {
  states: State[];
  isOpen: boolean;
  onStateClick: (stateId: string) => void;
  onCityClick: (cityId: string, stateId: string) => void;
  activeState: string | null;
  activeCity: string | null;
}

const Sidebar: React.FC<SidebarProps> = ({
  states,
  isOpen,
  onStateClick,
  onCityClick,
  activeState,
  activeCity,
}) => {
  const [expandedStates, setExpandedStates] = useState<Record<string, boolean>>(
    {},
  );
  const [searchQuery, setSearchQuery] = useState("");

  const toggleStateExpanded = (stateId: string) => {
    setExpandedStates((prev) => ({
      ...prev,
      [stateId]: !prev[stateId],
    }));
    onStateClick(stateId);
  };

  const handleCityClick = (cityId: string, stateId: string) => {
    onCityClick(cityId, stateId);
  };

  // Filter states and cities based on search query
  const filteredStates = states.filter(
    (state) =>
      state.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      state.cities.some((city) =>
        city.name.toLowerCase().includes(searchQuery.toLowerCase()),
      ),
  );

  return (
    <aside
      className={`fixed top-[60px] left-0 h-[calc(100vh-60px)] bg-white shadow-lg transition-all duration-300 z-10 
        ${isOpen ? "translate-x-0" : "-translate-x-full"} 
        lg:translate-x-0 lg:static lg:h-[calc(100vh-60px)] lg:min-w-[280px] hidden lg:block`}
    >
      <div className="h-full flex flex-col">
        <div className="p-4 border-b">
          <div className="relative">
            <input
              type="text"
              placeholder="Search states or cities..."
              className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Search
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={18}
            />
          </div>
        </div>

        <div className="flex-1 overflow-y-auto">
          <h2 className="p-4 font-medium text-lg text-primary-900">
            Niger Delta States
          </h2>
          <ul>
            {filteredStates.map((state) => (
              <li key={state.id} className="border-b">
                <div
                  className={`sidebar-item flex justify-between items-center ${
                    activeState === state.id ? "sidebar-item-active" : ""
                  }`}
                  onClick={() => toggleStateExpanded(state.id)}
                >
                  <span>{state.name}</span>
                  <span className="flex items-center">
                    <span className="text-xs text-gray-500 mr-2">
                      {state.cities.length} cities
                    </span>
                    {expandedStates[state.id] ? (
                      <ChevronUp size={18} className="text-gray-500" />
                    ) : (
                      <ChevronDown size={18} className="text-gray-500" />
                    )}
                  </span>
                </div>

                <AnimatePresence>
                  {expandedStates[state.id] && (
                    <motion.ul
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="bg-gray-50 overflow-hidden"
                    >
                      {state.cities
                        .filter((city) =>
                          city.name
                            .toLowerCase()
                            .includes(searchQuery.toLowerCase()),
                        )
                        .map((city) => (
                          <li key={city.id}>
                            <div
                              className={`pl-8 py-2 hover:bg-gray-100 cursor-pointer flex justify-between items-center ${
                                activeCity === city.id
                                  ? "bg-primary-50 text-primary-700 font-medium"
                                  : ""
                              }`}
                              onClick={() => handleCityClick(city.id, state.id)}
                            >
                              <span>{city.name}</span>
                              <span className="text-xs text-gray-500 mr-4">
                                {city.projectCount} projects
                              </span>
                            </div>
                          </li>
                        ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </li>
            ))}
          </ul>
        </div>

        <div className="p-4 border-t bg-gray-50">
          <p className="text-sm text-gray-600">
            Click on states and cities to explore projects in the Niger Delta
            region.
          </p>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
