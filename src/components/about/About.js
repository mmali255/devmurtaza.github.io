import React from "react";
import "./about.css";
import ME from "../../assets/about.png";
const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="about me" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__head">A Few Highlights About Me</div>
          <p>
            A passionate individual who always thrive to work on end to end
            products which develop sustainable and scalable social and technical
            systems to create impact. Full stack web and mobile developer with
            background knowledge of MERN stacks with redux, along with a knack
            of building applications with utmost efficiency.
          </p>
          <a href="#contact" className="btn btn-primary">
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
