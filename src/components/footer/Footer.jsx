import React from "react";
import "./footer.css";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Footer() {
  const footer_socials = [
    {
      id: 1,
      link: "https://www.facebook.com/share/1DpacwrKtH/?mibextid=LQQJ4d",
      icons: <FaFacebookF />,
    },
    {
      id: 2,
      link: "https://www.instagram.com/bdwbry93?utm_source=qr ",
      icons: <FaInstagram />,
    },
    {
      id: 3,
      link: "https://x.com/AbdoBoeriy",
      icons: <FaXTwitter />,
    },
  ];

  return (
    <footer className="bg-[#4db5ff] dark:bg-gray-900">
      <a href="#" className="footer_logo ">
        AbdoBoeriy
      </a>

      <ul className="permalinks">
        <li>
          <a href="#" className="text-[#4db5ff] dark:text-gray-100">
            Home
          </a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#service">Services</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer_socials">
        {footer_socials.map(({ id, link, icons }) => (
          <a href={link} key={id} target="_blank">
            {icons}
          </a>
        ))}
      </div>

      <div className="footer_copyright">
        <small>
          &copy;{" "}
          <a href="#" target="_blank">
            Eng.AbdoBoeriy
          </a>
          All rights reserved
        </small>
      </div>
    </footer>
  );
}

export default Footer;
