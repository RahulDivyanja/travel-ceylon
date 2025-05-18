import bikeImage from "../assets/bikes.png";
import tukImage from "../assets/tuktuk.png";
import carImage from '../assets/cars.png';
import vanImage from '../assets/vans.png';
import busImage from '../assets/buses.png';


export const vehicles = [
    {
      id: 1,
      name: "Bikes",
      price:3.00,
      image:bikeImage,
      description: "Perfect for city adventures",
      features: ["3-seater", "Fuel efficient", "Easy parking"]
    },
    {
      id: 2,
      name: "TukTuks",
      price:4.00,
      image:tukImage,
      description: "Comfortable for long drives",
      features: ["5-seater", "AC", "Automatic"]
    },
    {
        id:3,
        name:"Cars",
        image:carImage,
        price:5.00
    },
    {
        id:4,
        name:"Vans",
        price:7.00,
        image:vanImage
    },
    {
        id:5,
        name:"Buses",
        price:9.00,
        image:busImage,
    }
    // Add other vehicles...
  ];