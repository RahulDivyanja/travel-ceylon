import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from '../src/pages/Home'; 
import Stays from "../src/pages/Stays"; 
import Taxi from  "../src/pages/Taxi/Taxi";
import TourGuides from "../src/pages/TourGuides";
import NavbarHome from '../components/NavbarHome';
import TaxiBookings from './pages/Taxi/TaxiBookings';
import SpecificTaxi from './pages/Taxi/SpecificTaxi';
import RentTaxi from './pages/Taxi/RentTaxi';
import RentedVehicleDetails from './pages/Taxi/RentedVehicleDetails';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <NavbarHome /> {/* Your navigation bar should be here */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/stays" element={<Stays />} />
          <Route path="/taxi" element={<Taxi />} />
          <Route path="/tour-guides" element={<TourGuides />} />
          <Route path="/taxi-bookings" element={<TaxiBookings />} />
          <Route path='/specific-taxi' element={<SpecificTaxi/>}/>
          <Route path='/rent-taxi' element={<RentTaxi/>}/>
          <Route path='/rented-vehicle-details' element={<RentedVehicleDetails/>}/>

        </Routes>
      </Router>
    </>
  )
}

export default App
