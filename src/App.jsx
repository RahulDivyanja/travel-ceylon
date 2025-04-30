import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from '../src/pages/Home'; 
import Stays from "../src/pages/Stays"; 
import Taxi from  "../src/pages/Taxi";
import TourGuides from "../src/pages/TourGuides";
import StaysFilter from "../src/pages/StaysFilter";

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/stays" element={<Stays />} />
        <Route path="/taxi" element={<Taxi />} />
        <Route path="/tour-guides" element={<TourGuides />} />
        <Route path="/stays/stays-filter" element={<StaysFilter />} />
      </Routes>
    </Router>
  )
}

export default App
