import React from "react";
import "./home.css";
import Me from "../../assets/me.png";
import CV from "../../assets/CV_ABDO.pdf";
import HomeSocials from "./HomeSocials";
import Abdo from "../../assets/8384790a-0d9b-443e-852c-ac60e11803ce.jpg";

function Home() {
  return (
    <>
      <div className="home">
        <div className="container home_container">
          <h4>Hello i'm</h4>
          <h1>Abdelrahman Boeriy</h1>

          <h4 className="text-light">Frontend Developer</h4>

          <div className="btns">
            <a href="" download={CV} className="btn">
              {" "}
              Download CV{" "}
            </a>
            <a href={CV} target="_blank" className="btn btn-primary">
              Open CV
            </a>
          </div>

          <div className="me">
            {/* <img className="AbdoMe" src={Abdo} alt="" /> */}
            {/* Eng.AbdoBoeriy */}
          </div>

          <a href="#about" className="scroll_down">
            Scroll Dwon
          </a>

          <HomeSocials />
        </div>
      </div>
    </>
  );
}

export default Home;
