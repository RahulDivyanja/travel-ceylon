import bikeImage from "../assets/Taxi/bikes.png";
import tukImage from "../assets/Taxi/tuktuk.png";
import carImage from '../assets/Taxi/cars.png';
import vanImage from '../assets/Taxi/vans.png';


export const vehicles = [
    {
      id: 1,
      name: "Bikes",
      price:3.00,
      image:bikeImage,
      description: "Max 2 persons",
      features: ["3-seater", "Fuel efficient", "Easy parking"]
    },
    {
      id: 2,
      name: "TukTuks",
      price:4.00,
      image:tukImage,
      description: "Max 3 persons",
      features: ["5-seater", "AC", "Automatic"]
    },
    {
        id:3,
        name:"Cars",
        image:carImage,
        description: "Max 4 persons",
        price:5.00
    },
    {
        id:4,
        name:"Vans",
        price:7.00,
        image:vanImage,
        description: "Max 4-6 persons",


    }
    // Add other vehicles...
  ];