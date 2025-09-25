// Mock data for the drone platform

export interface Drone {
  id: string;
  name: string;
  model: string;
  batteryLevel: number;
  status: "idle" | "flying" | "charging" | "maintenance";
  flightTime: number; // in minutes
  lastMission?: string;
  location?: { lat: number; lng: number };
}

export interface ChargingStation {
  id: string;
  name: string;
  location: { lat: number; lng: number };
  pricePerKwh: number;
  availability: "available" | "occupied" | "maintenance";
  totalSlots: number;
  availableSlots: number;
  owner: string;
  rating: number;
}

export interface Mission {
  id: string;
  droneId: string;
  startLocation: { lat: number; lng: number };
  endLocation: { lat: number; lng: number };
  status: "planned" | "active" | "completed" | "cancelled";
  startTime: string;
  endTime?: string;
  distance: number; // in km
  batteryUsed: number; // percentage
  cost?: number;
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: "pilot" | "station_owner" | "admin";
  walletBalance: number;
  joinDate: string;
  status: "active" | "pending" | "suspended";
}

// Mock data
export const mockDrones: Drone[] = [
  {
    id: "drone-1",
    name: "Sky Ranger",
    model: "DJI Mavic 3",
    batteryLevel: 85,
    status: "idle",
    flightTime: 0,
    location: { lat: 40.7831, lng: -73.9712 }
  },
  {
    id: "drone-2", 
    name: "Storm Chaser",
    model: "DJI Air 2S",
    batteryLevel: 23,
    status: "flying",
    flightTime: 45,
    lastMission: "Central Park Survey",
    location: { lat: 40.7689, lng: -73.9441 }
  },
  {
    id: "drone-3",
    name: "Night Hawk",
    model: "DJI Mini 3",
    batteryLevel: 100,
    status: "charging",
    flightTime: 0,
    location: { lat: 40.7505, lng: -73.9934 }
  }
];

export const mockChargingStations: ChargingStation[] = [
  {
    id: "station-1",
    name: "Central Park Station",
    location: { lat: 40.7812, lng: -73.9665 },
    pricePerKwh: 0.15,
    availability: "available",
    totalSlots: 4,
    availableSlots: 2,
    owner: "NYC Drone Network",
    rating: 4.8
  },
  {
    id: "station-2",
    name: "Brooklyn Bridge Hub",
    location: { lat: 40.7061, lng: -73.9969 },
    pricePerKwh: 0.12,
    availability: "occupied",
    totalSlots: 6,
    availableSlots: 0,
    owner: "Brooklyn Charging Co",
    rating: 4.6
  },
  {
    id: "station-3",
    name: "Times Square Express",
    location: { lat: 40.7580, lng: -73.9855 },
    pricePerKwh: 0.18,
    availability: "available",
    totalSlots: 8,
    availableSlots: 5,
    owner: "Manhattan Power Grid",
    rating: 4.9
  }
];

export const mockMissions: Mission[] = [
  {
    id: "mission-1",
    droneId: "drone-2",
    startLocation: { lat: 40.7831, lng: -73.9712 },
    endLocation: { lat: 40.7505, lng: -73.9934 },
    status: "active",
    startTime: "2024-01-15T10:30:00Z",
    distance: 3.2,
    batteryUsed: 35
  },
  {
    id: "mission-2",
    droneId: "drone-1",
    startLocation: { lat: 40.7505, lng: -73.9934 },
    endLocation: { lat: 40.7812, lng: -73.9665 },
    status: "completed",
    startTime: "2024-01-15T08:15:00Z",
    endTime: "2024-01-15T09:45:00Z", 
    distance: 4.1,
    batteryUsed: 42,
    cost: 12.50
  }
];

export const mockUsers: User[] = [
  {
    id: "user-1",
    name: "Alex Chen",
    email: "alex@dronetech.com",
    role: "pilot",
    walletBalance: 156.75,
    joinDate: "2024-01-10",
    status: "active"
  },
  {
    id: "user-2",
    name: "Sarah Johnson",
    email: "sarah@powerstation.com", 
    role: "station_owner",
    walletBalance: 2840.30,
    joinDate: "2024-01-05",
    status: "active"
  },
  {
    id: "user-3",
    name: "Mike Rodriguez",
    email: "mike@dronepilot.net",
    role: "pilot",
    walletBalance: 89.20,
    joinDate: "2024-01-12",
    status: "pending"
  }
];

// FAQ Data
export const faqData = [
  {
    question: "How does drone battery charging work?",
    answer: "Our network of charging stations uses standardized connectors compatible with most commercial drones. Simply land at any station, connect your drone, and charging begins automatically. Payment is processed through your DroneNet wallet."
  },
  {
    question: "What are the charging costs?",
    answer: "Costs vary by station location and demand, typically ranging from $0.10-$0.20 per kWh. Premium locations like Manhattan may cost more during peak hours. All prices are displayed in real-time on our map."
  },
  {
    question: "How do I become a station owner?",
    answer: "Apply through our platform with your proposed location, expected traffic, and power infrastructure details. Our team reviews applications within 5-7 business days. Approved stations receive installation support and revenue sharing."
  },
  {
    question: "What safety measures are in place?",
    answer: "All stations feature automated fire suppression, weather monitoring, and emergency shutoffs. Drones are secured during charging, and all electrical systems meet aviation safety standards."
  },
  {
    question: "How do refunds work?",
    answer: "Unused charging sessions are automatically refunded to your wallet. For technical issues or overcharges, submit a dispute through your dashboard. Most claims are resolved within 24 hours."
  }
];