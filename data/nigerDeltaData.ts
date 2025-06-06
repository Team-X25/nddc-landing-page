import { State, City, Project } from "../types/map-types";

// Sample data for demonstration purposes
export const states: State[] = [
  {
    id: "akwa-ibom",
    name: "Akwa Ibom",
    coordinates: [5.0077, 7.9465],
    cities: [],
  },
  {
    id: "bayelsa",
    name: "Bayelsa",
    coordinates: [4.8936, 6.2675],
    cities: [],
  },
  {
    id: "delta",
    name: "Delta",
    coordinates: [5.704, 5.9339],
    cities: [],
  },
  {
    id: "rivers",
    name: "Rivers",
    coordinates: [4.8581, 6.9209],
    cities: [],
  },
  {
    id: "edo",
    name: "Edo",
    coordinates: [6.6781, 5.9309],
    cities: [],
  },
];

export const cities: City[] = [
  {
    id: "uyo",
    name: "Uyo",
    stateId: "akwa-ibom",
    coordinates: [5.0577, 7.9106],
    projectCount: 3,
  },
  {
    id: "eket",
    name: "Eket",
    stateId: "akwa-ibom",
    coordinates: [4.6423, 7.9205],
    projectCount: 2,
  },
  {
    id: "yenagoa",
    name: "Yenagoa",
    stateId: "bayelsa",
    coordinates: [4.9267, 6.2676],
    projectCount: 4,
  },
  {
    id: "brass",
    name: "Brass",
    stateId: "bayelsa",
    coordinates: [4.3122, 6.2417],
    projectCount: 1,
  },
  {
    id: "warri",
    name: "Warri",
    stateId: "delta",
    coordinates: [5.7584, 5.8987],
    projectCount: 5,
  },
  {
    id: "sapele",
    name: "Sapele",
    stateId: "delta",
    coordinates: [5.8941, 5.6767],
    projectCount: 2,
  },
  {
    id: "port-harcourt",
    name: "Port Harcourt",
    stateId: "rivers",
    coordinates: [4.8156, 7.0498],
    projectCount: 7,
  },
  {
    id: "bonny",
    name: "Bonny",
    stateId: "rivers",
    coordinates: [4.4508, 7.1734],
    projectCount: 3,
  },
  {
    id: "benin-city",
    name: "Benin City",
    stateId: "edo",
    coordinates: [6.335, 5.6037],
    projectCount: 4,
  },
];

// Add cities to their respective states
states.forEach((state) => {
  state.cities = cities.filter((city) => city.stateId === state.id);
});

export const projects: Project[] = [
  {
    id: "project-1",
    title: "Uyo City Road Network Expansion",
    description:
      "Comprehensive road network expansion project covering 15km of urban roads with drainage systems, street lighting, and pedestrian walkways to improve transportation within the city.",
    cityId: "uyo",
    stateId: "akwa-ibom",
    status: "Completed",
    year: 2022,
    budget: "$24 million",
    partners: ["Akwa Ibom State Government", "Federal Ministry of Works"],
    images: [
      "https://images.pexels.com/photos/5589303/pexels-photo-5589303.jpeg",
      "https://images.pexels.com/photos/5845741/pexels-photo-5845741.jpeg",
    ],
    videos: ["https://youtu.be/example1"],
    impacts: [
      "Reduced travel time by 40% within the city",
      "Improved access to markets for local businesses",
      "Created over 500 jobs during construction",
    ],
  },
  {
    id: "project-2",
    title: "Yenagoa Flood Control System",
    description:
      "Installation of advanced flood control infrastructure including drainage channels, water pumps, and retention basins to mitigate seasonal flooding in Yenagoa.",
    cityId: "yenagoa",
    stateId: "bayelsa",
    status: "Completed",
    year: 2023,
    budget: "$18 million",
    partners: [
      "Bayelsa State Government",
      "Niger Delta Development Commission",
    ],
    images: [
      "https://images.pexels.com/photos/5650905/pexels-photo-5650905.jpeg",
      "https://images.pexels.com/photos/5650911/pexels-photo-5650911.jpeg",
    ],
    impacts: [
      "Reduced flooding incidents by 65% during rainy season",
      "Protected over 15,000 homes from water damage",
      "Improved public health by reducing standing water",
    ],
  },
  {
    id: "project-3",
    title: "Warri Industrial Zone Development",
    description:
      "Creation of a dedicated industrial zone with power supply, water treatment facilities, and access roads to attract manufacturing businesses to Warri.",
    cityId: "warri",
    stateId: "delta",
    status: "Ongoing",
    year: 2023,
    budget: "$35 million",
    partners: ["Delta State Government", "Private Sector Investors"],
    images: [
      "https://images.pexels.com/photos/2760241/pexels-photo-2760241.jpeg",
      "https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg",
    ],
    videos: ["https://youtu.be/example3"],
    impacts: [
      "Expected to create 2,500 direct jobs",
      "Will house 20+ manufacturing facilities",
      "Estimated to contribute 5% to state GDP",
    ],
  },
  {
    id: "project-4",
    title: "Port Harcourt Urban Renewal Project",
    description:
      "Comprehensive urban renewal initiative including rehabilitation of public spaces, improved waste management systems, and modernization of key infrastructure.",
    cityId: "port-harcourt",
    stateId: "rivers",
    status: "Completed",
    year: 2021,
    budget: "$42 million",
    partners: ["Rivers State Government", "UN-Habitat", "World Bank"],
    images: [
      "https://images.pexels.com/photos/3075458/pexels-photo-3075458.jpeg",
      "https://images.pexels.com/photos/2901209/pexels-photo-2901209.jpeg",
    ],
    impacts: [
      "Transformed 12 public spaces into community centers",
      "Reduced urban waste by implementing sorting and recycling",
      "Improved air quality through green space development",
    ],
  },
  {
    id: "project-5",
    title: "Benin City Healthcare Expansion",
    description:
      "Construction and equipment of three specialized healthcare centers across Benin City to improve access to quality healthcare services.",
    cityId: "benin-city",
    stateId: "edo",
    status: "Completed",
    year: 2022,
    budget: "$15 million",
    partners: [
      "Edo State Government",
      "Niger Delta Development Commission",
      "WHO",
    ],
    images: [
      "https://images.pexels.com/photos/3938022/pexels-photo-3938022.jpeg",
      "https://images.pexels.com/photos/4226140/pexels-photo-4226140.jpeg",
    ],
    videos: ["https://youtu.be/example5"],
    impacts: [
      "Increased healthcare access for over 250,000 residents",
      "Specialized maternal care reduced complications by 45%",
      "Created 120 permanent healthcare jobs",
    ],
  },
];
