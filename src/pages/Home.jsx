import React from "react";
import NavbarHome from "../../components/NavbarHome";
import ENBtn from "../../components/ENBtn";

function Home() {
    return (
        <body>
          <div className="home-container">
          
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
          </div>
        </body>
      );
}

export default Home;