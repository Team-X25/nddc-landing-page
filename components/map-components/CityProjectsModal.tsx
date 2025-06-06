import React from "react";
import { X } from "lucide-react";
import { City, Project } from "../../types/map-types";
import { motion, AnimatePresence } from "framer-motion";

interface CityProjectsModalProps {
  isOpen: boolean;
  onClose: () => void;
  city: City | null;
  projects: Project[];
}

const CityProjectsModal: React.FC<CityProjectsModalProps> = ({
  isOpen,
  onClose,
  city,
  projects,
}) => {
  // Filter projects to only show those for the selected city
  const cityProjects = city
    ? projects.filter((project) => project.cityId === city.id)
    : [];

  return (
    <AnimatePresence>
      {isOpen && city && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50 p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
            className="bg-white rounded-lg shadow-2xl w-full max-w-4xl overflow-hidden"
          >
            <div className="relative">
              <div className="bg-primary-800 text-white px-6 py-4 flex justify-between items-center">
                <h2 className="text-xl font-bold text-white">
                  {city.name} Projects
                </h2>
                <button
                  onClick={onClose}
                  className="rounded-full hover:bg-primary-700 p-1 transition-colors"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="p-6 max-h-[70vh] overflow-y-auto">
                {cityProjects.length > 0 ? (
                  <div className="space-y-6">
                    <p className="text-gray-600">
                      Showing {cityProjects.length} projects in {city.name}
                    </p>

                    {cityProjects.map((project) => (
                      <div key={project.id} className="card">
                        <div className="relative h-48 overflow-hidden">
                          <img
                            src={project.images[0]}
                            alt={project.title}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute top-2 right-2 bg-white px-2 py-1 rounded text-xs font-medium">
                            {project.status === "Completed" ? (
                              <span className="text-success-600">
                                {project.status}
                              </span>
                            ) : (
                              <span className="text-secondary-600">
                                {project.status}
                              </span>
                            )}
                          </div>
                        </div>
                        <div className="p-4">
                          <h3 className="text-lg font-bold mb-2">
                            {project.title}
                          </h3>
                          <p className="text-gray-600 mb-4 line-clamp-2">
                            {project.description}
                          </p>
                          <div className="flex justify-between items-center">
                            <span className="text-sm font-medium text-gray-500">
                              Year: {project.year}
                            </span>
                            <a
                              href={`/project/${project.id}`}
                              className="btn btn-primary text-sm"
                            >
                              View Details
                            </a>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <p className="text-gray-500">
                      No projects found for this city.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default CityProjectsModal;
