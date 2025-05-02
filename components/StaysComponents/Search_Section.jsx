import React from 'react'
import "./Search_Section.css";

const Search_Section = () => {
  return (
    <>
    <div className="CustomSection">
    <div className='SSection-container'>
        <div className='Man-Img'>
            <img src="../src/assets/Stays/Search_Man.png" alt="Image" />
        </div>
        <div className="SSection-content">
            <h1 className='s-title'>Looking for the Best Hotels for Your Dream Vacation?</h1>
            <p className='s-par'>At travelCeylon, we bring you Sri Lanka’s most unforgettable stays from sun-kissed beach villas 
                in Bentota to charming colonial-era boutiques in Colombo. Every property is handpicked for comfort, character, 
                and convenience, so your getaway feels just right from the moment you check in.</p>
            <div>
                <button className='s-btn'>Search Hotel</button>
            </div>
        </div>
    </div>
    </div>

    </>

  )
}

export default Search_Section