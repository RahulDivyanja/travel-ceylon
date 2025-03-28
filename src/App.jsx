import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from '../components/Navbar'
import Stays from "../src/pages/Stays"; // Create a Stays page
import Taxi from  "../src/pages/Taxi";
import TourGuides from "../src/pages/TourGuides";


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/stays" element={<Stays />} />
        <Route path="/taxi" element={<Taxi />} />
        <Route path="/tour-guides" element={<TourGuides />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
