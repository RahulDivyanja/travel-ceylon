import React from 'react'
import styles from "./Offer_cards.module.css"

const Cards_component = ({icon, title, description}) => {
    return (
        <div className={styles.staysOcard}>
            <img src={icon} alt="offer" className={styles.staysOfferImg} />
            <div className={styles.staysOfferDetails}>
                <h2 className={styles.staysOfferTitle}>{title}</h2>
                <p className={styles.staysOfferDescription}>{description}</p>
            </div>
        </div>
    )
}

const cards_data = [
    {
        icon: "../src/assets/Stays/update.svg",
        title: "Early Check-in Privilege",
        description: "Arriving before standard check-in time? We’ll do our best to get your room ready early so you can relax or freshen up right away.",
    },
    {
        icon: "../src/assets/Stays/bathtub.svg",
        title: "Special In-Room Amenities",
        description: "From bathrobes and spa kits to curated snacks or welcome flowers, enjoy thoughtful touches that elevate your comfort.",
    },
    {
        icon: "../src/assets/Stays/encrypted.svg",
        title: "Secure Booking Guarantee",
        description: "All bookings are protected with advanced encryption and instant confirmations, so you can plan with peace of mind.",
    },
    {
        icon: "../src/assets/Stays/flight_land.svg",
        title: "Complimentary Airport Pickup",
        description: "Enjoy smooth airport-to-hotel transfers arranged by your host. It's free, punctual, and stress-free—no taxis or waiting in lines.",
    }
]

const Offer_cards = () => {
    return (
        <div className={styles.staysOfferContainer}>
            {cards_data.map((card, index) => (
                <Cards_component
                    key={index}
                    icon={card.icon}
                    title={card.title}
                    description={card.description}
                />
            ))}
        </div>
    )
}

export default Offer_cards