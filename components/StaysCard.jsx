import React from 'react'

const StaysCard = () => {
    const hotel = {
        name: "Cinnamon wild yala",
        location: "Tissamaharama",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        price: 25,
        priceUnit: "night",
        imageUrl: "images/cinnamon-wild-yala.png" // Replace with actual image path
      };
  return (
    <div className="hotel-card">
    <img src={hotel.imageUrl} alt={hotel.name} id="hotel-image" />
    <h2 id="hotel-name">{hotel.name}</h2>
    <h4 id="hotel-location">{hotel.location}</h4>
    <p id="hotel-description">{hotel.description}</p>
    <p id="hotel-price">Starting from <strong>${hotel.price}/{hotel.priceUnit}</strong></p>
    <button>View Hotel</button>
  </div>
  )
}

export default StaysCard