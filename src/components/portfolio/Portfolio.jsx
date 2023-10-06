import "./portfolio.css";

import IMG1 from "../../assets/img1.jpg";
import IMG2 from "../../assets/img2.jpg";
import IMG3 from "../../assets/img3.jpg";
import IMG4 from "../../assets/img4.jpg";


import React from "react";

//Portfolio function
const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: "Shopping site",
      img: IMG1,
      description:
        "E-commerce web app using MongoDB, Express, React, Node.js: Responsive UI, Express API, MongoDB storage",
      technologies: " React Js| Nodejs | Mongodb | Express",
      
      github: "https://github.com/arpita2525/ecommerce-application",
    },
    {
      id: 2,
      title: "Blood-bank-management-system",
      img: IMG4,
      description:
        "A Blood Bank System is a web application that allows users to donate and request blood. System admins manage campaigns and user access to a MySQL database",
      technologies: "HTML | CSS |JS | SQL| PHP",
     
      github: "https://github.com/arpita2525/Blood-bank-management-system",
    },
    {
      id: 3,
      title: "Employee Tracker",
      img: IMG2,
      description: "MySQL command line application that is designed to display company database with employee information. ",
      technologies: "MYSQL",
      
      github: "https://github.com/arpita2525/Employee-Tracker",
    },
    {
      id: 4,
      title: "Portfolio",
      img: IMG3,
      description:
        "Portfolio created using react.js",
      technologies: "REACT.JS",
      link: "",
      github: "",
    },
    
  ];

  return (
    <section id="portfolio">
      
      <h2>My Recent projects</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              <a
                href={pro.github}
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                GitHub
              </a>
             
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
