import React from 'react'
import { useLocation,useNavigate } from 'react-router-dom';
import taxiVehicles from '../../data/taxiVehicles';
import { MapPin } from 'lucide-react';
import StartJourney from '../../../components/Taxi/StartJourney';
import Reviews from '../../../components/Reviews';


const SpecificTaxi = () => {

const location=useLocation();
const { vehicle } = location.state || {};
if (!vehicle) {
  return <div>No vehicle found</div>;
}

  return (
    <div className='relative top-24 w-[75%] sm:w-[80%] lg:w-[90.5%] left-1/2 transform -translate-x-1/2'>
        <div className="flex flex-col md:flex-row items-center justify-between  p-4 rounded-lg  w-full">
            {/* Left part - Driver Image and Name */}
            <div className="flex items-center w-full md:w-auto mb-4 md:mb-0">
                <img src={vehicle.driverImage} alt="Driver" className="w-20 h-20 rounded-full mr-4" />
                <div>
                    <h2 className="text-sm md:text-3xl  font-bold text-black text-left">{vehicle.model}<span className='ml-3 text-sm md:text-3xl'>{vehicle.numberPlate}</span></h2>
                    <p className="text-sm text-gray-500 text-left">{vehicle.driverName}</p>
                </div>
            </div>

            {/* Middle part - Rating */}
            <div className="flex items-end ml-auto self-end space-x-1 text-gray-600 text-sm w-full md:w-auto mb-2  p-0 md:p-2 md:mb-0 mr-2">
                <span>{vehicle.rating}</span>
                <span>⭐</span>
                <span>(345 client reviews)</span>
            </div>

            {/* Right part - Price and Button */}
            <div className="flex flex-col items-end w-full md:w-auto">
            <div className="text-black font-bold text-xl md:text-3xl mb-2 md:mb-1 text-left md:text-right w-full md:w-auto md:p-3">${vehicle.feePerKm}/km</div>
            <button className="bg-[#8DD3BB] text-black px-4 py-2 w-full md:w-auto rounded-xl font-semibold hover:bg-[#5ac49f] hover:text-white">
                Hire Now
            </button>
            </div>
        </div>
        <div className='w-full h-52 md:h-[400px]'>
            <img src={vehicle.image} alt='vehicleImage' className=' w-full h-full object-cover rounded-3xl'/>
        </div>
        <div className='pt-8'>
            <h1 className='h-auto text-gray-600 font-semibold text-base md:text-xl text-left'>{vehicle.bio}</h1>
        </div>

        <div className='grid lg:grid-cols-5 pt-24 gap-10 grid-cols-1'>
            {/* Left side */}
            <div className="h-auto lg:h-[500px] w-auto lg:col-span-2 shadow-lg rounded-xl bg-white relative">
                <h1 className='absolute -top-14 text-xl text-gray-600 bg-transparent font-bold text-center md:text-left ml-1'>About the Driver</h1>

                <div className="flex items-center p-4 md:p-8 lg:flex-row flex-col">
                    <img
                        src={vehicle.driverImage}
                        className="h-16 w-16 md:h-20 md:w-20 rounded-full"
                        alt="Driver"
                    />
                    <div className="text-left text-gray-600 font-bold ml-4">
                        <h1 className="text-base md:text-2xl">{vehicle.driverName}</h1>
                        <div className="flex items-center mt-1 flex-col md:flex-row">
                            <MapPin className="w-4 md:w-5 text-gray-500 " />
                            <h1 className="ml-1 text-gray-500 text-sm md:text-base">{vehicle.location}</h1>
                        </div>
                    </div>
                </div>
                <div className="w-[90%] h-[1px] bg-gray-300 mx-auto"></div>
                <div className='md:py-8 py-4 h-auto'>
                    <h1 className='text-left text-gray-500 text-base font-medium mx-6'>I'm {vehicle.driverName}!</h1>
                    <h1 className='text-left font-medium text-base mx-6 text-gray-500 mt-4'>{vehicle.intro}</h1>
                </div>
            </div>

            {/* Right side */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start shrink-0 lg:col-span-3 gap-3 relative sm:justify-start mt-10 md:mt-0 ">
                <h1 className='absolute -top-12 sm:-top-8 md:-top-8 lg:-top-14 text-xl text-gray-600 bg-transparent font-bold text-left ml-1'>Facilities</h1>
                {vehicle.features.map((feature, index) => (
                    <div key={index} className="bg-[#8DD3BB] p-4 rounded-lg border border-gray-200 items-center justify-center h-44 w-44 sm:h-48 sm:w-48 flex">
                        <div>
                            <h3 className="font-bold text-gray-900 text-base sm:text-2xl text-center">{feature.name}</h3>
                            <p className="text-gray-600 text-xs sm:text-sm mt-1">{feature.caption}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        <div>
            <StartJourney vehicle={vehicle}/>
        </div>
        <div className='my-10'>
            <Reviews/>
        </div>

    </div>
  )
}

export default SpecificTaxi

