import React from "react";
import "./skils.css";

import CSS from "../../assets/css3.svg";
// import Expressjs from '../../assets/expressjs.svg';
import html from "../../assets/html.png";
import tw from "../../assets/tailwindcss.svg";
import ts from "../../assets/ts.png";
import Figma from "../../assets/figma.svg";
import Javascript from "../../assets/javascript.svg";
import nextJs from "../../assets/next.png";
import Nodejs from "../../assets/nodejs.svg";
import Reactjs from "../../assets/react.svg";
import Tailwindcss from "../../assets/tailwindcss.svg";

const SkillsData = [
  {
    id: 1,
    image: html,
    title: "html",
    disc: "User Interface",
  },
  {
    id: 1,
    image: CSS,
    title: "css",
    disc: "User Interface",
  },
  {
    id: 1,
    image: tw,
    title: "Tailwdin Css",
    disc: "User Interface",
  },
  {
    id: 2,
    image: Javascript,
    title: "javaScript",
    disc: "Interaction",
  },
  {
    id: 2,
    image: ts,
    title: "TypeScript",
    disc: "Interaction",
  },
  {
    id: 3,
    image: Reactjs,
    title: "React",
    disc: "Framework",
  },
  {
    id: 7,
    image: nextJs,
    title: "NextJs",
    disc: "Next Framework",
  },
  {
    id: 5,
    image: Nodejs,
    title: "NodeJS",
    disc: "Web Server",
  },

  {
    id: 6,
    image: Figma,
    title: "Figma",
    disc: "Design tool",
  },
  // {
  //   id: 8,
  //   // image: Mongodb,
  //   title: "MongoDB",
  //   disc: "Database",
  // },
];

function Skils() {
  return (
    <section className="skills " id="skills">
      <div className="top_section">
        <h5>What Skills i Have</h5>
        <h2>My Expreience</h2>
      </div>

      <div className="container container_Skills">
        {SkillsData.map(({ id, image, title, disc }) => (
          <article key={id} className="card_skills">
            <div className="icon">
              <img src={image} alt="" />
            </div>

            <div className="content">
              <h4>{title}</h4>
              <p className="text-light">{disc}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Skils;
