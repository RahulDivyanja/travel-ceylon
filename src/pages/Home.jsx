import React from "react";
import NavbarHome from "../../components/NavbarHome";
import ENBtn from "../../components/ENBtn";
import Button from "../../components/HomeComponents/Button";

function Home() {
    return (
        <body>

          <section className="home-container">
            <div className="upperSection">
              <div className="logo">
                <img src="src/assets/travelCeylon.svg" alt="traveCeylon" />
              </div>
              <ENBtn />
            </div>
            <div className="middleSection">
              <h1 id="firstRow">
                Dream it. Plan it <br /> We’ll make it happen{" "}
              </h1>
              <span className="secondRow">
                Your travel dreams, our responsibility
              </span>
            </div>
            <NavbarHome />
          </section>

          <section className="secondSection">
            <p className="heading">PLAN YOUR PERFECT TRIP</p>
            <p className="subHeading"> Search Hotels and Places Hire to our most popular destinations in Sri Lanka </p>
            <p className="description"> Where we make your journeys seamless and exciting! Our platform helps you find the best destinations, book hassle-free trips, and discover must-visit places with ease. Whether you're planning your next adventure or need assistance with vehicle rentals, route navigation, or nearby facilities, we've got you covered. Travel smart with us and explore the world without limits! </p>
            <Button text="Explore Sri Lanka" className="exploreBtn" />
            <img src="src/assets/9arch.jpeg" alt="travel" className="ninearch-img" />
            <img src="src/assets/beach.jpeg" alt="travel" className="beach-img" />
            <img src="src/assets/lake.jpeg" alt="travel" className="lake-img" />
          </section>



        </body>
      );
}

export default Home;