import { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from './pages/Home'; 
import Stays from './pages/Stays'; 
import Taxi from './pages/Taxi';
import TourGuides from './pages/TourGuides';
import Registration from './pages/Registration/Registration';
import HotelStepOne from './pages/Registration/HotelRegistration/hotel-One';
import HotelStepTwo from './pages/Registration/HotelRegistration/hotel-Two';
import HotelStepThree from './pages/Registration/HotelRegistration/hotel-Three'; 
import HotelStepFour from './pages/Registration/HotelRegistration/hotel-Four';
import HotelStepFive from './pages/Registration/HotelRegistration/hotel-Five';
import HotelStepSix from './pages/Registration/HotelRegistration/hotel-Six';


function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/registration' element={<Registration />} />
        <Route path='/stays' element={<Stays />} />
        <Route path='/taxi' element={<Taxi />} />
        <Route path='/tour-guides' element={<TourGuides />} />
        <Route path='/registration/hotel-step-one' element={<HotelStepOne />} />
        <Route path='/registration/hotel-step-two' element={<HotelStepTwo />} />
        <Route path='/registration/hotel-step-three' element={<HotelStepThree />} />
        <Route path='/registration/hotel-step-four' element={<HotelStepFour />} />
        <Route path='/registration/hotel-step-five' element={<HotelStepFive />} />
        <Route path='/registration/hotel-step-six' element={<HotelStepSix />} />

      </Routes>
    </Router>
  );
}

export default App;
