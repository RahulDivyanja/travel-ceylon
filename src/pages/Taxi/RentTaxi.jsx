import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import RentTaxiSearch from '../../../components/Taxi/RentTaxiSearch';
import { vehicles } from '../../data/vehicles';
import { Bike, Tractor, Car, Truck } from 'lucide-react';
import Filter from '../../../components/Taxi/Filter';
import taxiVehicles from '../../data/taxiVehicles';
import dummy_car from '../../assets/Taxi/dummy_car.svg'
import profile_pic from '../../assets/Taxi/profile_pic.svg'


const RentTaxi = () => {
  const location = useLocation();
  const navigate = useNavigate(); // Add navigate import and declaration
  
  // Safely extract vehicle and formData from location state from( taxi.jsx and RentTaxiSearch.jsx)
  const { vehicle, state: formData } = location.state || {};


//assigning the luicide icons based on the names that taken from vehicles.js and matching them with Luicide-React icon names.
  const vehicleIcons = {
    Bikes: Bike,
    Cars: Car,
    TukTuks: Tractor,
    Vans: Truck
  };

  const sendVehicleData = (selectedVehicle) => {
    // Update the current filters based on the selected vehicle type
    navigate('/rent-taxi', { 
      state: { 
        vehicle: selectedVehicle,
        state: {
          ...formData,
          medium: selectedVehicle.name.slice(0, -1).toLowerCase() // Remove 's' and lowercase
        }
      } 
    });
  };

  const [filteredVehicles, setFilteredVehicles] = useState([]);
  const [initialVehicles, setInitialVehicles] = useState([]);
  const [showFilter, setShowFilter] = useState(false);
  const [visibleCount,setVisibleCount]=useState(5);
  
  // Initial filter based on pickup and medium
  useEffect(() => {
    if (formData?.pickup && formData?.medium) {
      console.log("Filtering by:", formData.pickup, formData.medium);
      const initialResults = taxiVehicles.filter(
        (v) => v.location === formData.pickup && 
               v.vehicleType === formData.medium
      );
      setInitialVehicles(initialResults);
      setFilteredVehicles(initialResults);
    } else {
      // Only set defaults if absolutely necessary
      console.log("No filter criteria available");
    }
  }, [formData]);


  // Handle filter changes
  const handleFilterChange = (newFilters) => {
    const filtered = initialVehicles.filter(vehicle => {
      return (
        vehicle.feePerKm >= newFilters.priceRange.min &&
        vehicle.feePerKm <= newFilters.priceRange.max &&
        (newFilters.selectedModels.length === 0 || 
         newFilters.selectedModels.includes(vehicle.model)) &&
        (newFilters.selectedFuelTypes.length === 0 || 
         newFilters.selectedFuelTypes.includes(vehicle.fuelType)) &&
        (newFilters.selectedCarTypes.length === 0 || 
         (vehicle.carType && newFilters.selectedCarTypes.includes(vehicle.carType))) &&
        vehicle.rating >= newFilters.ratingRange.min &&
        vehicle.rating <= newFilters.ratingRange.max
      );
    });
    setFilteredVehicles(filtered);
  };

  const viewRentVehicle = (vehicle) => {
    navigate('/rented-vehicle-details', { state: { vehicle } });
  };

  // Toggle filter visibility on mobile
  const toggleFilter = () => {
    setShowFilter(!showFilter);
  };

  // Safely determine the current selected vehicle name
  const selectedVehicleName = vehicle?.name || '';

  return (
    <>
      <div className="mt-10 sm:mt-24 md:mt-12 w-[90.5%] max-w-screen-xl mx-auto">
        <RentTaxiSearch vehicleName={selectedVehicleName} />
      </div>

      <div className='mt-10 sm:mt-12 md:mt-16 w-[90.5%] max-w-screen-xl mx-auto flex flex-wrap justify-center items-center gap-0 sm:gap-5'>
        {vehicles.map((v) => {
          const IconComponent = vehicleIcons[v.name] || Bike;
          return (
            <div
              key={v.id}
              className={`${v.name === selectedVehicleName ? 'bg-[#8DD3BB]' : 'bg-white'} hover:bg-[#8DD3BB] m-2 w-20 sm:w-36 md:w-48 h-20 sm:h-36 md:h-48 flex-col flex justify-center items-center rounded-xl shadow-md transition-all duration-300`}
            >
              <IconComponent className='-mb-3 sm:mb-3 ' size={20} md:size={36} />
              <button 
                onClick={() => sendVehicleData(v)} 
                className='text-sm sm:text-lg md:text-xl font-semibold text-black text-center hover:text-white'
              >
                {v.name}
              </button>
              <h1 className='text-xs sm:text-sm md:text-sm font-normal text-black text-center px-2 hidden sm:block'>
                {v.description}
              </h1>
            </div>
          );
        })}
      </div>

      <div className="w-11/12 mx-auto mb-20">
        {/* Filter Toggle Button (Mobile Only) */}
        <div className="md:hidden mb-4">
          <button 
            onClick={toggleFilter}
            className="w-full py-2 bg-[#8DD3BB] text-black font-semibold rounded-md flex items-center justify-center"
          >
            {showFilter ? 'Hide Filters' : 'Show Filters'} 
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 0V4m0 20v-2m6 2a2 2 0 100-4m0 4a2 2 0 110-4m0 0v-2m6 2a2 2 0 100-4m0 4a2 2 0 110-4m0 0v-2" />
            </svg>
          </button>
        </div>

        {/* Content Grid */}
        <div className="flex flex-col md:flex-row gap-4">
          {/* Left side filter section */}
          <div className={`${showFilter ? 'block' : 'hidden'} md:block md:w-1/4 lg:w-1/5 pt-4 rounded-md self-start sticky top-24`}>
            <Filter vehicles={initialVehicles} onFilterChange={handleFilterChange} />
          </div>

          {/* Right side results section */}
          <div className="w-full md:w-3/4 lg:w-4/5">
            <div className="flex flex-wrap items-center p-4 mb-4">
              <h2 className="text-xl md:text-2xl font-semibold text-black mr-2">{formData?.pickup || 'Location'}</h2>
              <div className="hidden sm:block h-10 border-l border-gray-400 mx-3"></div>
              <span className="text-gray-800 text-lg md:text-xl font-medium">{filteredVehicles.length} Vehicles found</span>
            </div>

            {/* Results List */}
            <div className="">
              {filteredVehicles.length > 0 ? (
                <div className="w-full">
                  {filteredVehicles.slice(0,visibleCount).map((vehicle) => (
                    <div key={vehicle.id} className="flex flex-col sm:flex-row shadow-lg rounded-lg mb-4 overflow-hidden bg-white">
                      {/* Taxi Image */}
                      <div className="w-full sm:w-auto sm:flex-shrink-0">
                        <img 
                          className="w-full sm:w-56 md:w-64 h-48 sm:h-56 object-cover rounded-t-lg sm:rounded-t-none sm:rounded-l-lg" 
                          src={vehicle.image || dummy_car} 
                          alt={vehicle.model}
                        />
                      </div>

                      {/* Driver image and details */}
                      <div className="flex flex-col sm:flex-row w-full p-3 sm:p-0">
                        {/* Driver image */}
                        <div className="flex justify-start sm:justify-center items-start sm:p-3">
                          <img 
                            className="w-10 h-10 rounded-full mr-3 sm:mr-0" 
                            src={vehicle.driverImage || profile_pic} 
                            alt={vehicle.driverName}
                          />
                        </div>

                        {/* Details area */}
                        <div className="flex flex-col w-full p-1 sm:p-3">
                          <div className="flex justify-between items-start mb-2">
                            <div>
                              <h1 className="text-lg font-semibold text-left">{vehicle.driverName}</h1>
                              <h2 className="text-xs font-medium text-gray-600 text-left">{vehicle.location}</h2>
                              <div className="font-semibold text-xs text-left">
                                {vehicle.rating} ⭐
                              </div>
                            </div>
                            
                            <div className="text-right">
                              <h3 className="text-gray-600 font-semibold text-sm">Starting from</h3>
                              <p className="font-semibold text-[#8DD3BB] text-xl">${vehicle.feePerKm}/km</p>
                            </div>
                          </div>

                          <div className="text-gray-600 text-base sm:text-xl lg:text-2xl font-bold  text-left md:mt-5 lg:mt-5">
                            {vehicle.model} {vehicle.numberPlate}
                          </div>

                          {/* View Vehicle Button */}
                          <div className="mt-2 mb-0 sm:mt-auto">
                            <button
                              onClick={() => viewRentVehicle(vehicle)}
                              className="w-full bg-[#8DD3BB] text-black py-2 hover:text-white rounded-xl font-bold hover:bg-opacity-80 transition mb-3"
                            >
                              View Vehicle
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                  ))}
                  {filteredVehicles.length > visibleCount && (
                    <button
                      onClick={() => setVisibleCount(prev => prev + 5)}
                      className="bg-[#90d1c8] w-full py-2 rounded-xl text-black hover:text-white font-bold mt-4 text-center"
                    >
                      Show more
                    </button>
                  )}

                </div>
              ) : (
                <div className="bg-white p-8 rounded-md text-center shadow-sm">
                  <p className="text-lg text-gray-700">Sorry, no vehicles found matching your criteria.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RentTaxi;