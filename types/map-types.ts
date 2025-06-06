export interface Location {
  id: string;
  name: string;
  coordinates: [number, number]; // [latitude, longitude]
}

export interface State extends Location {
  cities: City[];
}

export interface City extends Location {
  stateId: string;
  projectCount: number;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  cityId: string;
  stateId: string;
  status: "Completed" | "Ongoing";
  year: number;
  budget?: string;
  partners?: string[];
  images: string[];
  videos?: string[];
  impacts?: string[];
}

export interface Comment {
  id: string;
  projectId: string;
  name: string;
  content: string;
  date: string;
}
