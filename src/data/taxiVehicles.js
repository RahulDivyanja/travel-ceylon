import vitz from '../assets/Taxi/aqua.jpg';
import axio from '../assets/Taxi/axio.png';
import sarah from '../assets/Taxi/sarah.png';
import jenny from '../assets/Taxi/jenny.png';
import {
  BaggageClaim, Snowflake, Armchair, Luggage, Leaf,
  Users, Smile, Sun, Car, Bike, ThermometerSnowflake, Zap
} from 'lucide-react';

const taxiVehicles = [
  {
    id: 1,
    driverName: "Kamal Perera",
    vehicleType: "car",
    numberPlate: "CAB-1234",
    feePerKm: 5,
    rating: 4.5,
    fuelType: "petrol",
    advance:180,
    model: "Toyota Vitz",
    carType: "hatchback",
    location: "Tissamaharama",
    image: vitz,
    driverImage: sarah,
    bio: "Ideal for both short trips and long drives, this compact hatchback offers a smooth ride, great fuel efficiency, and comfort for up to four passengers. Whether you're exploring the city or heading out for a scenic countryside tour, the Toyota Vitz delivers reliability and convenience.",
    features: [
      { name: "Small Luggage", caption: "Suitcases/Small luggage", icon: "BaggageClaim" },
      { name: "Air Conditioning", caption: "Fully air conditioned", icon: "Snowflake" },
      { name: "4 Seats Total", caption: "Driving seat + 3 seats", icon: "Armchair" }
    ],
    intro: "Hello, I'm Kamal Perera — your reliable driver based in Tissamaharama. With years of driving experience and a focus on safety and customer comfort, I’m here to make your journey pleasant and worry-free. Whether you're a tourist or a local traveler, I look forward to being part of your trip!"
  },
  
  {
    id: 2,
    driverName: "Nimal Fernando",
    vehicleType: "car",
    numberPlate: "CAR-5678",
    feePerKm: 7,
    rating: 4.2,
    fuelType: "diesel",
    advance:180,
    model: "Honda Accord",
    carType: "sedan",
    location: "Tissamaharama",
    bio: "A stylish sedan with a premium feel...",
    features: [
      { name: "Large Luggage", caption: "Spacious boot space", icon: "Luggage" },
      { name: "Air Conditioning", caption: "Fully air conditioned", icon: "Snowflake" },
      { name: "5 Seats Total", caption: "Driving seat + 4 seats", icon: "Users" }
    ],
    intro: "Hello, I'm Nimal Fernando! ..."
  },
  {
    id: 3,
    driverName: "Sunil Rathnayake",
    vehicleType: "car",
    numberPlate: "KM-9032",
    feePerKm: 3,
    rating: 4.0,
    fuelType: "petrol",
    model: "Honda Accord",
    advance:180,
    carType: "sedan",
    location: "Tissamaharama",
    image: axio,
    driverImage: jenny,
    bio: "This sedan is a comfortable choice...",
    features: [
      { name: "Fuel Efficient", caption: "Low petrol consumption", icon: "Leaf" },
      { name: "Air Conditioning", caption: "Fully air conditioned", icon: "Snowflake" },
      { name: "5 Seats Total", caption: "Driving seat + 4 seats", icon: "Users" }
    ],
    intro: "Hello, I'm Sunil Rathnayake! ..."
  },
  {
    id: 4,
    driverName: "Amal Silva",
    vehicleType: "tuktuk",
    numberPlate: "TU-3456",
    feePerKm: 4,
    rating: 3.8,
    fuelType: "petrol",
    advance:120,
    model: "Bajaj RE",
    carType: null,
    location: "Tissamaharama",
    bio: "A popular choice for short trips...",
    features: [
      { name: "3 Seats Total", caption: "Small trips ideal", icon: "Users" },
      { name: "Open Air Ride", caption: "Breezy experience", icon: "Sun" },
      { name: "Compact Size", caption: "Fits narrow streets", icon: "Car" }
    ],
    intro: "Hello, I'm Amal Silva! ..."
  },
  {
    id: 5,
    driverName: "Rajitha Gamage",
    vehicleType: "car",
    numberPlate: "CA-7890",
    feePerKm: 6.5,
    rating: 4.7,
    fuelType: "hybrid",
    model: "Toyota Prius",
    advance:180,
    carType: "sedan",
    location: "Colombo",
    bio: "A hybrid vehicle offering the best of both worlds...",
    features: [
      { name: "Hybrid Engine", caption: "Eco friendly ride", icon: "Leaf" },
      { name: "5 Seats Total", caption: "Driving seat + 4 seats", icon: "Users" },
      { name: "Air Conditioning", caption: "Fully air conditioned", icon: "Snowflake" }
    ],
    intro: "Hello, I'm Rajitha Gamage! ..."
  },
  {
    id: 6,
    driverName: "Saman Kumara",
    vehicleType: "van",
    numberPlate: "VN-1234",
    feePerKm: 9,
    rating: 4.3,
    fuelType: "diesel",
    advance:240,
    model: "Toyota Hiace",
    carType: "van",
    location: "Kandy",
    bio: "This spacious van comfortably seats up to 12 passengers...",
    features: [
      { name: "12 Seats Total", caption: "Perfect for groups", icon: "Users" },
      { name: "Large Luggage", caption: "Ample luggage space", icon: "Luggage" },
      { name: "Air Conditioning", caption: "Fully air conditioned", icon: "Snowflake" }
    ],
    intro: "Hello, I'm Saman Kumara! ..."
  },
  {
    id: 7,
    driverName: "Priyantha Jayasuriya",
    vehicleType: "bike",
    numberPlate: "BK-5678",
    feePerKm: 2,
    rating: 4.1,
    advance:60,
    fuelType: "petrol",
    model: "Hero Splendor",
    carType: null,
    location: "Matara",
    bio: "This bike offers an affordable and agile transportation...",
    features: [
      { name: "1 Seat Only", caption: "Solo traveler ride", icon: "Bike" },
      { name: "Fast Ride", caption: "Beat the traffic", icon: "Zap" },
      { name: "Economical", caption: "Low fuel use", icon: "Leaf" }
    ],
    intro: "Hello, I'm Priyantha Jayasuriya! ..."
  },
  {
    id: 8,
    driverName: "Lalith Weerasinghe",
    vehicleType: "tuktuk",
    numberPlate: "TU-9012",
    feePerKm: 3.5,
    rating: 3.9,
    advance:120,
    fuelType: "petrol",
    model: "Piaggio Ape",
    carType: null,
    location: "Tissamaharama",
    bio: "Ideal for short city rides...",
    features: [
      { name: "3 Seats Total", caption: "Ideal for 3 persons", icon: "Users" },
      { name: "City Friendly", caption: "Narrow streets ready", icon: "Car" },
      { name: "Open Air Ride", caption: "Enjoy fresh breeze", icon: "Sun" }
    ],
    intro: "Hello, I'm Lalith Weerasinghe! ..."
  },
  {
    id: 9,
    driverName: "Dinesh Chandimal",
    vehicleType: "car",
    numberPlate: "CA-3456",
    feePerKm: 5.5,
    advance:180,
    rating: 4.4,
    fuelType: "petrol",
    model: "Suzuki Swift",
    carType: "hatchback",
    location: "Colombo",
    bio: "Compact and agile, the Suzuki Swift is a great option...",
    features: [
      { name: "Small Luggage", caption: "Compact space", icon: "BaggageClaim" },
      { name: "Air Conditioning", caption: "Cool ride", icon: "Snowflake" },
      { name: "4 Seats Total", caption: "Driving seat + 3 seats", icon: "Armchair" }
    ],
    intro: "Hello, I'm Dinesh Chandimal! ..."
  }
];

export default taxiVehicles;

export const featureIconMap = {
  BaggageClaim,
  Snowflake,
  Armchair,
  Luggage,
  Leaf,
  Users,
  Smile,
  Sun,
  Car,
  Bike,
  ThermometerSnowflake,
  Zap
};
