import React, { useState } from "react";
import "./nav.css";

import { IoHomeOutline } from "react-icons/io5";
import { LuUserRound } from "react-icons/lu";
import { BiBook } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { BiMessageSquareDetail } from "react-icons/bi";
// darkMode
import { MdDarkMode } from "react-icons/md";
import { FaSun } from "react-icons/fa";
function Nav({ mode, changeMode }) {
  const [activeNav, setActiveNav] = useState("#");

  return (
    <nav>
      <a
        href="#"
        className={activeNav === "#" ? "active" : ""}
        onClick={() => setActiveNav("#")}
      >
        <IoHomeOutline />
      </a>{" "}
      <a
        href="#about"
        className={activeNav === "#about" ? "active" : ""}
        onClick={() => setActiveNav("#about")}
      >
        <LuUserRound />
      </a>
      <a
        href="#service"
        className={activeNav === "#service" ? "active" : ""}
        onClick={() => setActiveNav("#service")}
      >
        <BiBook />
      </a>
      <a
        href="#projects"
        className={activeNav === "#projects" ? "active" : ""}
        onClick={() => setActiveNav("#projects")}
      >
        <RiServiceLine />
      </a>
      <a
        href="#contact"
        className={activeNav === "#contact" ? "active" : ""}
        onClick={() => setActiveNav("#contact")}
      >
        <BiMessageSquareDetail />
      </a>
      {mode == "dark" ? (
        <a  onClick={changeMode}>
          <MdDarkMode />
        </a>
      ) : (
        <a  onClick={changeMode}>
          <FaSun />
        </a>
      )}
    </nav>
  );
}

export default Nav;
