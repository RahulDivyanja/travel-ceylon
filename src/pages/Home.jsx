import React from "react";
import NavbarHome from "../../components/NavbarHome";
import ENBtn from "../../components/ENBtn";
import Button from "../../components/HomeComponents/Button";
import VisitCard from "../../components/HomeComponents/VisitCard";
import IconBox from "../../components/HomeComponents/IconBox";
import ProvinceGrid from "../../components/HomeComponents/ProvinceGrid";

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

          <section className="thirdSection">
            <div className="getStart">
                <p className="subHeading getStart-heading">Get Start Now!</p>
                <p>Hurry up make your booking</p>
                <div className="card-section">
                    <VisitCard
                        img="src/assets/king_bed.svg"
                        title="Stays"
                        text="1000+ Hotels and stays for you"
                    />
                    <VisitCard
                        img="src/assets/local_taxi.svg"
                        title="rides"
                        text="Comfortable and safe rides"
                    />
                    <VisitCard
                        img="src/assets/follow_the_signs.svg"
                        title="Guides"
                        text="Discover places with experts"
                    />
                </div>
            </div>
            <img src="src/assets/reader.jpeg" className="reader-img"></img>
          </section>

          <section className="fourthSection">
            <div class="topic-part">
              <img src="src/assets/girl.png" className="girl-img"></img>
              <p className="topic">"Why wait? If you own a hotel, rent vehicles, or offer tour guide, list with us today!"</p>
            </div>
            <div className="register-part">
              <div className="icon-box-container">
                <IconBox imgage="src/assets/r1.svg" text="Register now in travelCeylon" />
                <img src="src/assets/r5.svg" className="icon"></img>
                <IconBox imgage="src/assets/r2.svg" text="List on your properties" />
                <img src="src/assets/r5.svg" className="icon"></img>
                <IconBox imgage="src/assets/r3.svg" text="Join with 10000+ tourists" />
                <img src="src/assets/r5.svg" className="icon"></img>
                <IconBox imgage="src/assets/r4.svg" text="get your dollar income" />
              </div>
              <Button text="Register Now! It’s FREE"/>
            </div>
          </section>

          <section className="fifthSection">
            <p className="heading">We Cover All</p>
            <p className="subHeading">We cover all the Provinces in Sri Lanka</p>
            <ProvinceGrid />
          </section>
      
        </body>
      );
}

export default Home;