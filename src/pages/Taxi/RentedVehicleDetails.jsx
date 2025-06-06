import React from 'react';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import { featureIconMap } from '../../data/taxiVehicles';
import { Calendar, MapPin } from 'lucide-react';

import {
  BaggageClaim, Snowflake, Armchair, Luggage, Leaf,
  Users, Smile, Sun, Car, Bike, ThermometerSnowflake, Zap
} from 'lucide-react';

const RentedVehicleDetails = () => {
  const location = useLocation();
  const { vehicle } = location.state || {};

  const [pickupDate, setPickupDate] = useState('2025-02-04');
  const [returnDate, setReturnDate] = useState('2025-02-09');
  const [area, setArea] = useState('Tissamaharama');
  

  return (
    <div className='mt-24 mx-auto w-[75%] sm:w-[80%] lg:w-[90.5%]'>
      <div className="flex flex-col md:flex-row items-center justify-between p-4 w-full backdrop-blur-md rounded-xl shadow-lg">
        {/* Left part - Driver Image and Name */}
        <div className="flex items-center flex-col sm:flex-row w-full md:w-auto mb-4 md:mb-0">
          <img src={vehicle?.driverImage} alt="Driver" className="w-20 h-20 sm:w-20 sm:h-20 ml-5 sm:ml-0 rounded-full mr-4" />
          <div>
            <h2 className="text-xs sm:text-sm md:text-3xl font-bold text-black text-center sm:text-left hidden sm:block">
              {vehicle?.model}<span className='ml-3 text-xs sm:text-sm md:text-3xl'>{vehicle?.numberPlate}</span>
            </h2>
            <h2 className="text-xs sm:text-sm md:text-3xl text-center font-bold text-black sm:text-left sm:hidden block">
              {vehicle?.model}
            </h2>
            <h2 className='ml-3 text-xs font-semibold text-center sm:text-left sm:text-sm md:text-3xl sm:hidden block'>
              {vehicle?.numberPlate}
            </h2>
            <p className="text-xs sm:text-sm text-gray-500 text-left">{vehicle?.driverName}</p>
          </div>
        </div>
        
        {/* Right part - Price and Button */}
        <div className="flex flex-col items-end w-full md:w-auto">
          <div className="text-black font-bold -mt-2 sm:-mt-0 text-xl md:text-3xl mb-2 md:mb-1 sm:text-left md:text-right w-full md:w-auto md:p-3 text-center">
            ${vehicle?.feePerKm}/km
          </div>
          <button className="bg-[#8DD3BB] text-black px-4 py-2 w-full md:w-auto rounded-xl font-semibold hover:bg-[#5ac49f] hover:text-white">
            Rent Now
          </button>
        </div>
      </div>
      
      <div className='w-full h-52 mt-16 md:h-[400px]'>
        <img src={vehicle?.image} alt='vehicleImage' className='w-full h-full object-cover rounded-xl' />
      </div>
      
      <div className='mt-16 px-2'>
        <h1 className='h-auto text-gray-600 font-semibold text-xs md:text-xl text-left'>
          {vehicle?.bio}
        </h1>
      </div>
      
      {/* Facilities/Features Section */}
      <h2 className="text-base md:text-2xl font-bold mt-8 mb-6 text-left text-gray-600">Facilities</h2>
      
      <div className="flex flex-wrap justify-start gap-8">
        {vehicle?.features?.map((feature, id) => {
          let IconComponent;
          switch(feature.icon) {
            case 'BaggageClaim': IconComponent = BaggageClaim; break;
            case 'Snowflake': IconComponent = Snowflake; break;
            case 'Armchair': IconComponent = Armchair; break;
            case 'Luggage': IconComponent = Luggage; break;
            case 'Leaf': IconComponent = Leaf; break;
            case 'Users': IconComponent = Users; break;
            case 'Smile': IconComponent = Smile; break;
            case 'Sun': IconComponent = Sun; break;
            case 'Car': IconComponent = Car; break;
            case 'Bike': IconComponent = Bike; break;
            case 'ThermometerSnowflake': IconComponent = ThermometerSnowflake; break;
            case 'Zap': IconComponent = Zap; break;
            default: IconComponent = null;
          }

          return (
            <div
              key={id}
              className="bg-[#8DD3BB] p-4 rounded-2xl shadow-md backdrop-blur-md flex flex-col items-center justify-center text-center w-full max-w-[160px] sm:max-w-[180px] md:max-w-[200px] h-40 sm:h-44 md:h-48 gap-2 transition-transform hover:scale-105 duration-200"
            >
              {IconComponent && <IconComponent className="w-8 h-8 text-black" />}
              <h3 className="font-semibold text-base sm:text-xl">{feature.name}</h3>
              <p className="text-xs text-gray-700 px-2 -mt-2">{feature.caption}</p>
            </div>
          );
        })}
      </div>

      <div className=''>
        <h2 className="text-base md:text-2xl font-bold mt-8 mb-6 text-left text-gray-600">Rental Policy</h2>
        <p className='text-gray-600 font-semibold text-xs md:text-lg text-left mb-4'>
          To book a {vehicle?.vehicleType}, a {vehicle?.advance} payment is required at the time of reservation. Before turning the bike, We will check the distance traveled using the meter and calculate the total rental cost based on the owner's set rate.
        </p>
        <h2 className='text-gray-600 font-semibold text-xs md:text-lg text-left ml-0 sm:ml-5'>{'\u2022'} If the total cost is less than ${vehicle?.advance}, we will refund the difference.</h2>
        <h2 className='text-gray-600np font-semibold text-xs md:text-lg text-left sm:ml-5'>{'\u2022'} If the total cost exceeds ${vehicle?.advance}, you will be required to pay the remaining balance.</h2>
      </div>

      <div>
        <h2 className="text-base md:text-2xl font-bold mt-8 mb-6 text-left text-gray-600">Start the Journey</h2>
      </div>

      <div className="w-full bg-white rounded-xl shadow-lg overflow-hidden mb-10 p-5  px-5">
        <div className="flex flex-col md:flex-row">
          {/* Vehicle Image */}
          <div className="w-full md:w-1/4 md:p-4">
            <img 
              src={vehicle?.image} 
              alt="Vehicle" 
              className="w-full h-full md:mt-4 md:p-4  md:object-cover rounded-xl md:rounded-3xl"
            />
          </div>

          {/* Form Section */}
          <div className="w-full md:w-3/4 flex flex-col p-2 md:p-4">
            <div className="flex justify-end md:mb-6 mt-5">
              <div className="text-lg md:text-3xl font-bold text-black">
                ${vehicle?.feePerKm || "1.3"}/km
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Pickup Date Field */}
              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-700 mb-1 text-left">Pickup</label>
                <div className="relative">
                  <input
                    type="date"
                    value={pickupDate}
                    onChange={(e) => setPickupDate(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg pl-4 pr-10 focus:outline-none focus:ring-2 focus:ring-[#8DD3BB] focus:border-transparent"
                  />
                  <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                </div>
              </div>

              {/* Return Date Field */}
              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-700 mb-1 text-left">Return</label>
                <div className="relative">
                  <input
                    type="date"
                    value={returnDate}
                    onChange={(e) => setReturnDate(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg pl-4 pr-10 focus:outline-none focus:ring-2 focus:ring-[#8DD3BB] focus:border-transparent"
                  />
                  <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                </div>
              </div>

              {/* Area Dropdown */}
              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-700 mb-1 text-left">Area</label>
                <div className="relative">
                  <select
                    value={area}
                    onChange={(e) => setArea(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg pl-10 pr-10 appearance-none focus:outline-none focus:ring-2 focus:ring-[#8DD3BB] focus:border-transparent"
                  >
                    <option value="Tissamaharama">Tissamaharama</option>
                    <option value="Colombo">Colombo</option>
                    <option value="Kandy">Kandy</option>
                    <option value="Matara">Matara</option>
                  </select>
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                    <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Pay Now Button */}
              <div className="flex items-end">
                <button className="mb-[2px] w-full bg-[#8DD3BB] hover:bg-[#7BC4AC] hover:text-white text-black font-semibold py-2 md:py-[14px] px-6 rounded-lg transition duration-200">
                  Pay Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default RentedVehicleDetails;