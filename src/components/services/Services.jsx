import React from "react";
import "./services.css";

import { MdDesignServices } from "react-icons/md";
import { IoIosRocket } from "react-icons/io";
import { FaCode } from "react-icons/fa";
function Services() {
  return (
    <section id="service">
      <div className="top_section">
        <h5>What I Offer</h5>
        <h2>Services</h2>

        <div className="container container_services">
          <article className="card bg-[#2c2c6c] dark:bg-gray-900">
            <MdDesignServices className="icon" />
            <h3>Web Design</h3>
            <p className="text-light">
              i create clean, modern , and responsive web designs that focus on
              user experience and usability.
            </p>
          </article>

          <article className="card bg-[#2c2c6c] dark:bg-gray-900">
            <IoIosRocket className="icon" />

            <h3>Fast Perfromance</h3>
            <p className="text-light">
              i design clean modern and responsive websites with a strong foucs
              on user experience , usability and fast performance
            </p>
          </article>

          <article className="card bg-[#2c2c6c] dark:bg-gray-900">
            <FaCode className="icon" />

            <h3>Clean Code</h3>
            <p classNam e="text-light">
              Developmen i design and build clean modern and responsive websites
              with a focus on user experience
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}

export default Services;
