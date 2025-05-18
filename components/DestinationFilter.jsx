import React, { useState, useRef, useEffect } from "react";
import styles from "./DestinationFilter.module.css";
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
    <div className={styles.containerDF}>
      <form action={buildSearchUrl()} method="GET" className={styles.filterForm}>
        <h2 className={styles.formTitle}>Find your Perfect Destination</h2>

        {/* Destination Select */}
        <label className={`${styles.formGroup} ${styles.destinationGroup}`}>
          <span className={styles.formLabel}>Destination</span>
          <div className={styles.inputWrapper}>
            <img src={bedIcon} alt="Bed Icon" className={styles.leftIcon} />
            <select
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              className={styles.inputSelect}
              aria-label="Destination select"
            >
              {destinations.map((dest) => (
                <option key={dest} value={dest}>{dest}</option>
              ))}
            </select>
          </div>
        </label>

        {/* Check-in Date */}
        <label className={`${styles.formGroup} ${styles.dateGroup}`}>
          <span className={styles.formLabel}>Check In</span>
          <div className={styles.inputWrapper}>
            <input
              type="date"
              className={styles.inputDate}
              value={checkIn}
              onChange={e => setCheckIn(e.target.value)}
              min={new Date().toISOString().split("T")[0]}
              placeholder="Select Check In Date"
            />
          </div>
        </label>

        {/* Check-out Date */}
        <label className={`${styles.formGroup} ${styles.dateGroup}`}>
          <span className={styles.formLabel}>Check Out</span>
          <div className={styles.inputWrapper}>
            <input
              type="date"
              className={styles.inputDate}
              value={checkOut}
              onChange={e => setCheckOut(e.target.value)}
              min={checkIn || new Date().toISOString().split("T")[0]}
              placeholder="Select Check Out Date"
            />
          </div>
        </label>

        {/* Rooms & Guests Dropdown */}
        <div className={styles.roomsGuestsGroup} ref={roomsGuestsRef}>
          <span className={styles.guestLabel}>Rooms & Guests</span>
          <button
            type="button"
            onClick={() => setRoomsGuestsOpen((v) => !v)}
            className={styles.dropdownToggle}
            aria-haspopup="true"
            aria-expanded={roomsGuestsOpen}
            aria-label="Rooms and guests selection dropdown"
          >
            <img
              src={containerIcon}
              alt="Rooms and Guests Icon"
              className={styles.guestsIcon}
            />
            <span>
              {rooms} room{rooms > 1 ? "s" : ""}, {guests} guest{guests > 1 ? "s" : ""}
            </span>
            <img
              src={chevronDown}
              alt="Toggle Dropdown"
              className={styles.chevronDown}
            />
          </button>

          {roomsGuestsOpen && (
            <div className={styles.dropdownMenu}>
              <div className={styles.dropdownItem}>
                <span className={styles.dropdownLabel}>Rooms</span>
                <div className={styles.counter}>
                  <button
                    type="button"
                    onClick={() => changeRooms(-1)}
                    className={styles.counterBtn}
                    aria-label="Decrease rooms"
                  >
                    -
                  </button>
                  <span className={styles.counterValue}>{rooms}</span>
                  <button
                    type="button"
                    onClick={() => changeRooms(1)}
                    className={styles.counterBtn}
                    aria-label="Increase rooms"
                  >
                    +
                  </button>
                </div>
              </div>

              <div className={styles.dropdownItem}>
                <span className={styles.dropdownLabel}>Guest</span>
                <div className={styles.counter}>
                  <button
                    type="button"
                    onClick={() => changeGuests(-1)}
                    className={styles.counterBtn}
                    aria-label="Decrease guests"
                  >
                    -
                  </button>
                  <span className={styles.counterValue}>{guests}</span>
                  <button
                    type="button"
                    onClick={() => changeGuests(1)}
                    className={styles.counterBtn}
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
        <div className={styles.searchBtnContainer}>
          <button type="submit" className={styles.searchBtn} aria-label="Search button">
            Search
          </button>
        </div>
      </form>
    </div>
  );
}