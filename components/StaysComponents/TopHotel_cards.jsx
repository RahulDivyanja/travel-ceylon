import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import styles from "./TopHotel_cards.module.css";

// HotelCard Component
const HotelCard = ({ name, location, image }) => {
  return (
    <div
      className={styles.hotelCard}
      style={{ backgroundImage: `url(${image || "/api/placeholder/400/320"})` }}
    >
      <div className={styles.hotelInfo}>
        <h3>{name}</h3>
        <p>{location}</p>
      </div>
      <button className={styles.bookNowBtn}>Book Now</button>
    </div>
  );
};

// Main Carousel Component
const TopHotelCards = () => {
  const scrollRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [maxScroll, setMaxScroll] = useState(0);
  const [isScrollable, setIsScrollable] = useState(false);

  // Sample hotel data
  const hotels = [
    {
      id: 1,
      name: "The Grand Serenity",
      location: "Mirissa",
      image: "../src/assets/Stays-Card/StaysCard1.png",
    },
    {
      id: 2,
      name: "Onyx Towers",
      location: "Hikkaduwa",
      image: "../src/assets/Stays-Card/StaysCard2.png",
    },
    {
      id: 3,
      name: "The Celestia",
      location: "Hikkaduwa",
      image: "../src/assets/Stays-Card/StaysCard3.png",
    },
    {
      id: 4,
      name: "AruGamBAY",
      location: "Arugambay",
      image: "../src/assets/Stays-Card/StaysCard4.png",
    },
    {
      id: 5,
      name: "Palm Paradise",
      location: "Kandy",
      image: "../src/assets/Stays-Card/StaysCard5.png",
    },
    {
      id: 6,
      name: "Azure Heights",
      location: "Colombo",
      image: "../src/assets/Stays-Card/StaysCard6.png",
    },
  ];

  // Update scroll metrics when component mounts and when window resizes
  useEffect(() => {
    const updateMetrics = () => {
      if (scrollRef.current) {
        const scrollWidth = scrollRef.current.scrollWidth;
        const clientWidth = scrollRef.current.clientWidth;
        const newMaxScroll = scrollWidth - clientWidth;

        setMaxScroll(newMaxScroll);
        setIsScrollable(newMaxScroll > 0);
      }
    };

    // Initial update
    updateMetrics();

    // Add listener for window resize
    window.addEventListener("resize", updateMetrics);

    // Add a delayed update for images loading
    const timer = setTimeout(updateMetrics, 500);

    return () => {
      window.removeEventListener("resize", updateMetrics);
      clearTimeout(timer);
    };
  }, []);

  // Scroll handlers - using direct DOM manipulation for reliability
  const scroll = (direction) => {
    if (!scrollRef.current || !isScrollable) return;

    const cardWidth = 336; // Card width (320px) + gap (16px)

    if (direction === "left") {
      scrollRef.current.scrollBy({
        left: -cardWidth,
        behavior: "smooth",
      });
    } else {
      scrollRef.current.scrollBy({
        left: cardWidth,
        behavior: "smooth",
      });
    }
  };

  // Handle scroll events
  const handleScroll = () => {
    if (scrollRef.current) {
      const newPosition = scrollRef.current.scrollLeft;
      setScrollPosition(newPosition);
    }
  };

  return (
    <div className={styles.hotelCarouselContainer}>
      <div className={styles.carouselWrapper}>
        <div className={styles.carouselContent}>
          {/* Left scroll button */}
          <button
            onClick={() => scroll("left")}
            disabled={scrollPosition <= 0}
            className={`${styles.staysScrollBtn} ${styles.staysScrollLeft} ${
              scrollPosition <= 0 ? styles.disabled : ""
            }`}
            aria-label="Scroll left"
          >
            <ChevronLeft size={24} color="#000" />
          </button>

          {/* Carousel container */}
          <div
            ref={scrollRef}
            className={styles.carouselTrack}
            onScroll={handleScroll}
          >
            {hotels.map((hotel) => (
              <HotelCard
                key={hotel.id}
                name={hotel.name}
                location={hotel.location}
                image={hotel.image}
              />
            ))}
          </div>

          {/* Right scroll button */}
          <button
            onClick={() => scroll("right")}
            disabled={scrollPosition >= maxScroll}
            className={`${styles.staysScrollBtn} ${styles.staysScrollRight} ${
              scrollPosition >= maxScroll ? styles.disabled : ""
            }`}
            aria-label="Scroll right"
          >
            <ChevronRight size={24} color="#000" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopHotelCards;