import React from "react";
import "./projects.css";
// import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.jpg";
import c5 from "../../assets/c5.jpg";
import hero from "../../assets/hero_img.png";
import hero2 from "../../assets/hero.png";
import menu from "../../assets/menu_1.png";
import thumbnail from "../../assets/thumbnail.jpg";
import weather from "../../assets/Screenshot 2025-07-16 020744.png";
import vr from "../../assets/vr-DiJsEw8r.png";
import login from "../../assets/login.jpg";
const portfolioData = [
  {
    id: 1,
    image: c5,
    title: "E-commerce-Karma",
    skiles: "Html | Css | BootStrap | JavaScript",
    github: "https://github.com/Abdo-Boeriy-developer/e-commerce-karma.git",
    demo: "https://abdo-boeriy-developer.github.io/e-commerce-karma/",
  },
  {
    id: 2,
    image: hero,
    title: "forEver",
    skiles:
      " React | Tailwind Css | React Router | React Icons | React Hoot Toast | React Swiper | Axios ",
    github: "https://github.com/Abdo-Boeriy-developer/forever.git",
    demo: "https://eng-abdo-forever.netlify.app",
  },
  {
    id: 3,
    image: menu,
    title: "Food Delivery",
    skiles:
      " React | Tailwind Css | React Router | React Icons | React Hoot Toast | React Swiper | Fetch ",
    github: "https://github.com/Abdo-Boeriy-developer/-Ecommerce-Website.git",
    demo: "https://eng-abdo-food-delivery.netlify.app/",
  },
  {
    id: 4,
    image: hero2,
    title: "E-learning Education",
    skiles: "React | React Icons | Tailwind Css | React Router",
    github: "https://github.com/Abdo-Boeriy-developer/E-learning-Education.git",
    demo: "https://eng-abdo-e-learning-education.netlify.app",
  },
  {
    id: 5,
    image: thumbnail,
    title: "Games OOP",
    skiles: "Html | Css | JavaScript",
    github: "https://abdo-boeriy-developer.github.io/",
    demo: "https://abdo-boeriy-developer.github.io/GameOOP/",
  },
  {
    id: 6,
    image: weather,
    title: "Weather",
    skiles: "Html | Css | JavaScript",
    github: "https://github.com/Abdo-Boeriy-developer/Weather.git",
    demo: "https://engabdoweather.netlify.app",
  },
  {
    id: 7,
    image: vr,
    title: "Eshop",
    skiles: "React | React Router | React Icons | Tailwind Css",
    github: "https://github.com/porject6",
    demo: "https://abdo-eshop.netlify.app",
  },
  {
    id: 8,
    image: login,
    title: "Login",
    skiles: "Html | Css | JavaScript | LocalStorage",
    github: "https://github.com/porject6",
    demo: "https://demo6.com",
  },
];

function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="top_section">
        <h5>My Recent Work</h5>
        <h2>Portfolio</h2>
      </div>

      <div className="container projects_containre">
        {portfolioData.map(({ id, image, title, github, demo, skiles }) => (
          <article key={id} className="portfolio_item">
            <div className="portfolio_item_img">
              <img src={image} alt="" />
            </div>
            <h3>{title}</h3>
            <p className="skiles">
              Technologies
              <marquee scrollamount="4" direction="left">
                {skiles}
              </marquee>
            </p>
            <div className="potfolio_item_btns">
              <a href={github} target="_blank" className="btn">
                Github
              </a>
              <a href={demo} target="_blank" className="btn btn-primary">
                Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
