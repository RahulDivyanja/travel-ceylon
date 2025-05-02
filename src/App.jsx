import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from '../src/pages/Home'; 
import Stays from "../src/pages/Stays"; 
import Taxi from  "../src/pages/Taxi";
import TourGuides from "../src/pages/TourGuides";
import StaysFilter from "../src/pages/StaysFilter";
import Registration from './pages/Registration/Registration';
import HotelStepOne from './pages/Registration/HotelRegistration/hotel-One';
import HotelStepTwo from './pages/Registration/HotelRegistration/hotel-Two';
import HotelStepThree from './pages/Registration/HotelRegistration/hotel-Three';
import HotelStepFour from './pages/Registration/HotelRegistration/hotel-Four';
import HotelStepFive from './pages/Registration/HotelRegistration/hotel-Five';
import HotelStepSix from './pages/Registration/HotelRegistration/hotel-Six';
import TaxiStepOne from'./pages/Registration/TaxiRegistration/taxi-One';
import TaxiStepTwo from'./pages/Registration/TaxiRegistration/taxi-Two';
import TaxiStepThree from'./pages/Registration/TaxiRegistration/taxi-Three';
import TaxiStepFour from'./pages/Registration/TaxiRegistration/taxi-Four';
import TaxiStepFive from'./pages/Registration/TaxiRegistration/taxi-Five';
import TaxiStepSix from'./pages/Registration/TaxiRegistration/taxi-Six';
import GuideStepOne from "./pages/Registration/TourGuideRegistration/guide-One";
import GuideStepTwo from "./pages/Registration/TourGuideRegistration/guide-Two";
import GuideStepThree from "./pages/Registration/TourGuideRegistration/guide-Three";
import GuideStepFour from "./pages/Registration/TourGuideRegistration/guide-Four";




function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/stays" element={<Stays />} />
        <Route path="/stays/stays-filter?" element={<StaysFilter />} />
        <Route path="/taxi" element={<Taxi />} />
        <Route path="/tour-guides" element={<TourGuides />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/registration/hotel-step-one" element={<HotelStepOne />}/>
        <Route path="/registration/hotel-step-two" element={<HotelStepTwo/>}/>
        <Route path="/registration/hotel-step-three" element={<HotelStepThree/>}/>
        <Route path="/registration/hotel-step-four" element={<HotelStepFour/>}/>
        <Route path="/registration/hotel-step-five" element={<HotelStepFive/>}/>
        <Route path="/registration/hotel-step-six" element={<HotelStepSix/>}/>
        <Route path="/registration/taxi-step-one" element={<TaxiStepOne/>}/>
        <Route path="/registration/taxi-step-two" element={<TaxiStepTwo/>}/>
        <Route path="/registration/taxi-step-three" element={<TaxiStepThree/>}/>
        <Route path="/registration/taxi-step-four" element={<TaxiStepFour/>}/>
        <Route path="/registration/taxi-step-five" element={<TaxiStepFive/>}/>
        <Route path="/registration/taxi-step-six" element={<TaxiStepSix/>}/>
        <Route path="/registration/guide-step-one" element={<GuideStepOne/>}/>
        <Route path="/registration/guide-step-two" element={<GuideStepTwo/>}/>
        <Route path="/registration/guide-step-three" element={<GuideStepThree/>}/>
        <Route path="/registration/guide-step-four" element={<GuideStepFour/>}/>

      </Routes>
    </Router>
  );
}

export default App;
