import React from "react";
import { Link } from "react-router-dom";
// import styled from 'styled-components';
import ProjectImg from "../assets/projectImg.png";
import "./projectitem.css";
// const ProjectItemStyles = styled.div`

// `;

export default function ProjectItem({
  img = ProjectImg,
  title = "Project Name",
  desc = "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  to = "#",
}) {
  return (
    <React.Fragment>
      <Link to={to ? to : "#"} className="projectItem__img">
        <img src={img} alt="project img" />
      </Link>
      <div className="projectItem__info">
        <Link to={to ? to : "#"}>
          <h3 className="projectItem__title">{title}</h3>
        </Link>
        <p className="projectItem__desc">{desc}</p>
      </div>
    </React.Fragment>
  );
}
