import "./intro.css";
import React from "react";
import img from '../../assets/Me.png'

const Intro = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={img} alt="Arpita Gutte" />
          </div>
        </div>

        <div className="about__content">
          <p>
            Hi! I'm Arpita, a computer science student with a passion for technology and a drive to excel in software development.
            <br />
            My academic journey exposed me to diverse computer science topics, from algorithms to software engineering. I thrive on solving complex problems and embrace technology's boundless potential.
            <br />
            I've honed my coding skills in c++, JavaScript, with hands-on experience on projects like ecommerce-application.
            <br />
            I'm eager to kick-start my career as a software developer, applying my knowledge to innovative solutions.
          </p>
          <div className="about__cards">
            <article className="about__card">
             
              <h5>Education</h5>
              <p>
                <small>Computer Science Engineering 
                  <br/> SGGS Nanded-2024
                  <br/>8.4 cgpa </small>
                </p>
              
            </article>
            <article className="about__card">
  <h5>Profiles</h5>
  <p>
  <a href="https://auth.geeksforgeeks.org/user/rpitajmlf/?utm_source=geeksforgeeks&utm_medium=my_profile&utm_campaign=auth_user" target="_blank" rel="noopener noreferrer">
    <small>GeeksforGeeks</small><br/>
  </a>
  <a href="https://leetcode.com/rpta/" target="_blank" rel="noopener noreferrer">
    <small>LeetCode</small><br/>
  </a>
  </p>
</article>

          
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;



