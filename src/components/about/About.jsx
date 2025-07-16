import React from "react";
import "./about.css";
// import ImageMe from "../../assets/me-about.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
import abdo from "../../assets/Abdo.jpg";
function About() {
  return (
    <>
      <section className="about" id="about">
        <div className="top_section">
          <h5>Get To Know</h5>
          <h2>About Me</h2>
        </div>

        <div className="container about_container">
          <div className="about_me">
            <div className="about_me_image">
              <img src={abdo} alt="" />
            </div>
          </div>

          <div className="about_content">
            <div className="about_cards">
              <div className="about_card">
                <FaAward className="about_icon" />
                <h5>Experience</h5>
                <small>1+ years working</small>
              </div>

              <div className="about_card">
                <FiUsers className="about_icon" />
                <h5>Clients</h5>
                <small>100+ worldwide</small>
              </div>

              <div className="about_card">
                <VscFolderLibrary />
                <h5>Projects</h5>
                <small>50+ Completed</small>
              </div>
            </div>

            <p>
              Abdo-Boeriy Developer, As a software engineer, I have a strong
              interest in web development, with a specific focus on front-end
              development. My expertise lies in designing and developing
              user-friendly web applications using React and various frontend
              technologies.
            </p>

            <a
              href="https://github.com/Abdo-Boeriy-developer"
              target="_blank"
              className="btn btn-primary"
            >
              Git Hub
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
