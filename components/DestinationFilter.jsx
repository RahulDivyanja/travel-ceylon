import React, { useState, useRef, useEffect } from "react";
import "./DestinationFilter.css";
import bedIcon from "../src/assets/bed-icon.svg";
import calendarIcon from "../src/assets/calendar_month.svg";
import containerIcon from "../src/assets/container.svg";
import chevronDown from "../src/assets/chevron_down.svg";

const destinations = [
  "Tissamaharama",
  "Nuwaraeliya",
  "Mirissa",
  "Ella",
  "Kandy",
  "Galle",
  "Trincomalee",
  "Anuradhapura",
  "Sigiriya",
  "Polonnaruwa",
];

export default function DestinationFilter() {
  const [destination, setDestination] = useState("Tissamaharama");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [rooms, setRooms] = useState(1);
  const [guests, setGuests] = useState(2);
  const [roomsGuestsOpen, setRoomsGuestsOpen] = useState(false);
  const roomsGuestsRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        roomsGuestsRef.current &&
        !roomsGuestsRef.current.contains(event.target)
      ) {
        setRoomsGuestsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (checkIn && checkOut && new Date(checkOut) < new Date(checkIn)) {
      setCheckOut("");
    }
  }, [checkIn, checkOut]);

  const changeRooms = (amount) =>
    setRooms((r) => Math.max(1, r + amount));
  const changeGuests = (amount) =>
    setGuests((g) => Math.max(1, g + amount));

  const buildSearchUrl = () => {
    const params = new URLSearchParams({
      destination,
      ...(checkIn && { checkIn }),
      ...(checkOut && { checkOut }),
      rooms,
      guests,
    });
    return `/stays/stays-filter?${params.toString()}`;
  };

  return (
    <div className="containerDF">
      <form action={buildSearchUrl()} method="GET" className="filter-form">
        <h2 className="form-title">Find your Perfect Destination</h2>

        {/* Destination Select */}
        <label className="form-group destination-group">
          <span className="form-label">Destination</span>
          <div className="input-wrapper">
            <img src={bedIcon} alt="Bed Icon" className="left-icon" />
            <select
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              className="input-select"
              aria-label="Destination select"
            >
              {destinations.map((dest) => (
                <option key={dest} value={dest}>{dest}</option>
              ))}
            </select>
          </div>
        </label>

        {/* Check-in Date */}
        <label className="form-group date-group">
          <span className="form-label">Check In</span>
          <div className="input-wrapper">
            {/* <img src={calendarIcon} alt="Calendar Icon" className="left-icon" /> */}
            <input
              type="date"
              className="input-date"
              value={checkIn}
              onChange={e => setCheckIn(e.target.value)}
              min={new Date().toISOString().split("T")[0]}
              placeholder="Select Check In Date"
            />
          </div>
        </label>

        {/* Check-out Date */}
        <label className="form-group date-group">
          <span className="form-label">Check Out</span>
          <div className="input-wrapper">
            {/* <img src={calendarIcon} alt="Calendar Icon" className="left-icon" /> */}
            <input
              type="date"
              className="input-date"
              value={checkOut}
              onChange={e => setCheckOut(e.target.value)}
              min={checkIn || new Date().toISOString().split("T")[0]}
              placeholder="Select Check Out Date"
            />
          </div>
        </label>

        {/* Rooms & Guests Dropdown */}
        <div className="form-group rooms-guests-group" ref={roomsGuestsRef}>
          <span className="form-label">Rooms & Guests</span>
          <button
            type="button"
            onClick={() => setRoomsGuestsOpen((v) => !v)}
            className="dropdown-toggle"
            aria-haspopup="true"
            aria-expanded={roomsGuestsOpen}
            aria-label="Rooms and guests selection dropdown"
            style={{ display: "flex", alignItems: "center", width: "100%" }}
          >
            <img
              src={containerIcon}
              alt="Rooms and Guests Icon"
              className="guestsIcon"
              style={{ marginRight: 8 }}
            />
            <span style={{ flex: 1 }}>
              {rooms} room{rooms > 1 ? "s" : ""}, {guests} guest{guests > 1 ? "s" : ""}
            </span>
            <img
              src={chevronDown}
              alt="Toggle Dropdown"
              style={{ marginLeft: 8 }}
            />
          </button>

          {roomsGuestsOpen && (
            <div className="dropdown-menu">
              <div className="dropdown-item">
                <span className="dropdown-label">Rooms</span>
                <div className="counter">
                  <button
                    type="button"
                    onClick={() => changeRooms(-1)}
                    className="counter-btn"
                    aria-label="Decrease rooms"
                  >
                    -
                  </button>
                  <span className="counter-value">{rooms}</span>
                  <button
                    type="button"
                    onClick={() => changeRooms(1)}
                    className="counter-btn"
                    aria-label="Increase rooms"
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="dropdown-item">
                <span className="dropdown-label">Guests</span>
                <div className="counter">
                  <button
                    type="button"
                    onClick={() => changeGuests(-1)}
                    className="counter-btn"
                    aria-label="Decrease guests"
                  >
                    -
                  </button>
                  <span className="counter-value">{guests}</span>
                  <button
                    type="button"
                    onClick={() => changeGuests(1)}
                    className="counter-btn"
                    aria-label="Increase guests"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Search Button */}
        <div className="search-btn-container">
          <button type="submit" className="search-btn" aria-label="Search button">
            Search
          </button>
        </div>
      </form>
    </div>
  );
}
