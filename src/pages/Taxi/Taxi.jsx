import TaxiSearch from "../../../components/Taxi/TaxiSearch";
import { vehicles } from "../../data/vehicles";
import React, { useState } from 'react';
import {Car, ShieldCheck, Clock, Wallet, Baby } from "lucide-react";
import taxiHomePage from '../../assets/taxi_homepage.png';
import carMan from '../../assets/Taxi/carman.png';
import manSmile from '../../assets/Taxi/mansmiling.png';
import Reviews from '../../../components/Reviews';
import { useNavigate } from "react-router-dom";

  
  const handleFormSubmit = (formData) => {
    console.log('Form submitted to parent:', formData);
    alert('Booking request submitted!');
  };

  const features = [
    {
      icon: <Car className="w-8 h-8 text-black" />,
      title: "Vehicle Choice",
      description: "5 types of vehicles"
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-black" />,
      title: "Safety & Support",
      description: "Verified drivers with ratings"
    },
    {
      icon: <Clock className="w-8 h-8 text-black" />,
      title: "Easy booking",
      description: "24/7 availability"
    },
    {
      icon: <Wallet className="w-8 h-8 text-black" />,
      title: "Flexible payment",
      description: "Cash/Card/Digital wallets"
    },
    {
      icon: <Baby className="w-8 h-8 text-black" />,
      title: "Special Needs",
      description: "Child seats available"
    }
  ];


export default function Taxi() {   

  const navigate=useNavigate();
  const rentVehicle = (vehicle) => {
    // Create proper formData with the correct medium value based on vehicle type
    const initialFormData = {
      pickup: 'Tissamaharama', // Default location
      medium: vehicle.name.slice(0, -1).toLowerCase(), // Convert "Cars" to "car", etc.
      pickupDate: '',
      returnDate: ''
    };
    
    navigate('/rent-taxi', {
      state: {
        vehicle: vehicle,
        state: initialFormData // Pass the properly initialized formData
      }
    });
  };
    return(
        <>
            <main className="taxi-main">
            {/*Hero Section */}
            <div className="relative h-screen w-full">
                <img
                    src={taxiHomePage}
                    alt="Taxi service"
                    className="absolute  inset-0 -z-10 object-cover w-full h-[60%] md:h-[95%]"
                />
                <div className="heroFlex absolute text-left sm:text-center md:text-left  md:text-left-32 left-1/3 sm:left-[%] top-24 lg:top-40 md:top-32 md:left-24 lg:left-20 text-white">
                    <h1 className="text-[clamp(1rem,_4vw,_3rem)]  text-white font-bold leading-tight mb-1 sm:mb-3">
                    Plan your ride,<br />
                    we'll take you<br />
                    there!
                    </h1>
                    <p className="text-xs sm:text-sm md:text-lg font-medium">
                    Special offers to suit your plan
                    </p>
                </div>
                <div className="relative top-[250px] sm:top-[300px] md:top-[500px] left w-[60%] sm:w-[80%] lg:w-[90.5%] left-1/2 transform -translate-x-1/2">
                    <TaxiSearch/>
                </div>
            </div>

            {/*Drive your own */}
            <div className="bg-[#8DD3BB] bg-opacity-55 rounded-3xl shadow-3xl sm:mt-2 md:mt-36 mx-auto w-[60%] sm:w-[80%] lg:w-[90.5%] p-3 sm:p-6 mt-7">
                <h2 className="text-3xl font-bold mb-2 text-center md:text-left">Drive your own</h2>
                <p className="text-gray-600 mb-4 text-left hidden md:block text-base">
                    Explore Sri Lanka on your terms! Whether you're a local resident or an international visitor with a valid driver's license, rent the perfect vehicle for your journey. Choose from our range of trusted options—zippy tuktuks for city adventures, comfortable cars for long drives, spacious vans for group trips, or reliable buses for family outings. All rentals include insurance and 24/7 roadside assistance, so you can hit the road with confidence.
                </p>
                <p className="text-gray-600 block md:hidden text-center md:text-left">Explore Sri Lanka on your terms!</p>

                <div className="mt-7">
                    <div className="flex lg:hidden gap-5 overflow-x-auto scroll-smooth scroll-pl-6 px-2 -mx-2 snap-x snap-mandatory">
                    {vehicles.map(vehicle => (
                        <div key={vehicle.id} className='relative min-w-[200px] snap-start'>
                        <div className='relative rounded-xl overflow-hidden shadow-xl'>
                            <img className='w-full h-[300px] object-cover' src={vehicle.image} alt={vehicle.name} />
                            <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                            <div className='absolute text-left top-[70%] left-2 text-white'>
                              <h3 className="font-semibold">{vehicle.name}</h3>
                              <p className="-mt-1 text-sm font-extralight">starting from</p>
                            </div>
                            <div className='absolute top-[70%] right-2 text-white'>
                              <p className="font-bold text-xl">${vehicle.price.toFixed(2)}</p>
                            </div>
                            <div className='absolute bottom-2 left-1/2 transform -translate-x-1/2'>
                              <button onClick={()=>rentVehicle(vehicle)} className='bg-[#8DD3BB] text-black hover:text-white text-sm p-2 font-semibold rounded-xl'>
                                  Book Now
                            </button>
                            </div>
                        </div>
                        </div>
                    ))}
                    </div>

                    {/* Grid view for md and above */}
                    <div className="hidden lg:flex flex-wrap gap-14 justify-start lg:justify-center mt-7">
                    {vehicles.map(vehicle => (
                        <div key={vehicle.id} className='relative w-[200px]'>
                        <div className='relative rounded-xl overflow-hidden shadow-xl'>
                            <img className='w-full h-[300px] object-cover' src={vehicle.image} alt={vehicle.name} />
                            <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                            <div className='absolute text-left top-[70%] left-2 text-white'>
                            <h3 className="font-semibold">{vehicle.name}</h3>
                            <p className="-mt-1 text-sm font-extralight">starting from</p>
                            </div>
                            <div className='absolute top-[70%] right-2 text-white'>
                            <p className="font-bold text-xl">${vehicle.price.toFixed(2)}</p>
                            </div>
                            <div className='absolute bottom-2 left-1/2 transform -translate-x-1/2'>
                            <button onClick={()=>rentVehicle(vehicle)} className='bg-[#8DD3BB] text-black hover:text-white text-sm font-semibold px-2 py-1 rounded-xl'>
                                Book Now
                            </button>
                            </div>
                        </div>
                        </div>
                    ))}
                    </div>
                </div>
            </div>
            <div className=''>
        <div className='bg-white py-10  text-black mt-10 rounded-3xl w-[60%] sm:w-[80%] lg:w-[90.5%] mx-auto'>
          <div className="max-w-6xl mx-auto px-4">
            <h1 className="text-2xl md:text-3xl text-left font-semibold mb-2">What we offer</h1>
            <p className="mb-6 text-sm text-left md:text-center md:text-base font-normal text-gray-600 ">
              Enjoy seamless travel across Sri Lanka with our safe, reliable rides. Choose from tuktuks, cars, or vans—all with verified drivers, transparent pricing, and 24/7 support. Book instantly and pay your way!
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="bg-white  p-5 rounded-xl shadow-md hover:bg-[#8DD3BB] hover:text-white hover:shadow-lg transition-shadow">
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-4 p-3 bg-gray-100 rounded-full">
                      {feature.icon}
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                    <p className="text-base">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>   
     {/* Where every journey */}
      <div className="bg-white py-10 sm:py-16 text-black mt-10 rounded-3xl w-[60%] sm:w-[80%] lg:w-[90.5%] mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 items-center">
          {/* Text Content */}
          <div className="px-6 lg:px-0 lg:w-1/2">
            <h1 className="text-3xl sm:text-4xl pl-10 font-semibold mb-3 text-center lg:text-center">
              Where Every Journey
            </h1>
            <h2 className="text-3xl sm:text-4xl pl-10 font-semibold mb-6 text-center lg:text-center">
              Feels Like First Class
            </h2>
            
            <p className="text-black mb-6 font-[600] text-lg text-center lg:pl-24 lg:text-left hidden sm:block">
              At travelCeylon, we connect you to Sri Lanka's most reliable rides—from buzzing tuktuks in Colombo to luxury SUVs for scenic hill country routes. Every driver is verified and every fare is transparent, so you can explore with confidence.
            </p>

            <div className="space-y-2 text-sm sm:text-base text-gray-600">
              <div className="flex flex-wrap justify-center lg:justify-center gap-x-4 gap-y-2 lg:pl-24 ">
                <span>Tuktuks for quick hops</span>
                <span className='hidden sm:block'>•</span>
                <span>AC cars for long trips</span>
                <span className='hidden sm:block'>•</span>
                <span>Family-sized vans</span>
              </div>
              
              {/* Repeat for other bullet groups */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-x-4 gap-y-2 lg:pl-24">
                <span>Instant bookings</span>
                <span className='hidden sm:block'>•</span>
                <span>24/7 availability</span>
                <span className='hidden sm:block'>•</span>
                <span>Flight tracking</span>
              </div>
              
              <div className="flex flex-wrap justify-center lg:justify-start gap-x-4 gap-y-2 lg:pl-24">
                <span>Upfront fares</span>
                <span className='hidden sm:block'>•</span>
                <span>No surge pricing</span>
                <span className='hidden sm:block'>•</span>
                <span>Multiple payment options</span>
              </div>
              
              <div className="flex flex-wrap justify-center lg:justify-start gap-x-4 gap-y-2 lg:pl-24">
                <span>GPS-tracked rides</span>
                <span className=' hidden sm:block'>•</span>
                <span>Verified drivers</span>
                <span className='hidden sm:block'>•</span>
                <span>Emergency support</span>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="lg:w-1/2 px-4">
            <img 
              src={carMan} 
              alt="Travel Ceylon vehicle" 
              className="w-full h-auto object-cover rounded-lgs"
            />
          </div>
        </div>
      </div>
      {/* Reviews Section */}
      <div className="bg-white py-16 px-4 mt-10 rounded-3xl w-[60%] sm:w-[80%] lg:w-[90.5%] mx-auto">
          <Reviews/>
      </div>
      <div className="bg-[#8DD3BB] bg-opacity-45  py-2 md:py-10 px-4 mt-10 rounded-3xl w-[60%] sm:w-[80%] lg:w-[90.5%] mx-auto sm:overflow-y-hidden">
        <div className="py-1 px-10">
          <div className="relative max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8 ">
            {/* Image Section */}
            <div className=" w-full md:w-1/2 mb-0 flex flex-col items-baselinenp justify-end h-full">
              <img 
                src={manSmile} 
                alt="Driver partner" 
                className="sm:absolute  lg:top-3 lg:left-20 md:top-8 md:left-2 sm:top-3 sm-left-1 w-300 h-400 rounded-lg hidden md:block "
              />
            </div>

            {/* Text Content */}
            <div className="w-full md:w-1/2 space-y-4">
              <h1 className=" leading-tight text-center text-base md:text-2xl font-bold text-gray-800">
                Partner with Sri Lanka's<br />
                <span className="leading-tight  text-base md:text-2xl font-bold text-gray-800">Favorite Ride Platform</span>
              </h1>
              
              <p className="text-xs sm:text-base font-semiold text-gray-600">
                Are you a taxi, tuktuk, or private vehicle driver? Partner with travelCeylon and connect with thousands of travelers exploring Sri Lanka! From city rides to scenic tours, we match you with riders who value safety, fair pricing, and reliable service.
              </p>

              <div className=" pt-1 text-center">
                <p className="text-center text-xs sm:text-base md:text-lg  text-gray-900 mb-8">
                  List your property to reach thousands of travelers
                </p>
                
                <button className="bg-[#8DD3BB] hover:bg-teal-400 border-0 text-black font-medium py-3 text-xs sm:text-base px-3 md:px-8 rounded-full transition">
                  List Your Vehicle
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>



         </main>
        </>
    );
}