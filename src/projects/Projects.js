import React, { useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import SwiperCore, { Navigation } from "swiper";
// import ProjectItem from "./ProjectItem";
import "swiper/swiper-bundle.min.css";
// import projects from "../assets/projects";
import "./projects.css";
import ProjectsWeb from "./ProjectsWeb";
import ProjectsRobo from "./ProjectsRobo";
import ProjectsMl from "./ProjectsMl";
const Projects = () => {
  const [project, setProject] = useState("web");
  let projects = <ProjectsWeb />;
  if (project === "web") {
    projects = <ProjectsWeb />;
  } else if (project === "ml") {
    projects = <ProjectsMl />;
  } else if (project === "robo") {
    projects = <ProjectsRobo />;
  }
  return (
    <section id="projects">
      <h5>Check Out My work</h5>
      <h2>Projects</h2>
      <div className="project_nav">
        <nav>
          <ul className="projectnav_list">
            <li
              className={project === "web" ? "active_project_list" : ""}
              onClick={() => {
                setProject("web");
              }}
            >
              WEB
            </li>
            <li
              className={project === "ml" ? "active_project_list" : ""}
              onClick={() => {
                setProject("ml");
              }}
            >
              ML
            </li>
            <li
              className={project === "robo" ? "active_project_list" : ""}
              onClick={() => {
                setProject("robo");
              }}
            >
              Robotics
            </li>
          </ul>
        </nav>
      </div>
      {projects}
    </section>
  );
};

export default Projects;
