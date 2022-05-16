import React from "react";
import { Link } from "react-router-dom";
// import styled from 'styled-components';
import ProjectImg from "../assets/projectImg.png";
import "./projectitem.css";
// const ProjectItemStyles = styled.div`

// `;

export default function ProjectItemlink({
  img = ProjectImg,
  title = "Project Name",
  desc = "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  to = "#",
}) {
  return (
    <React.Fragment>
      <a href={to ? to : "#"} target="_blank" className="projectItem__img">
        <img src={img} alt="project img" />
      </a>
      <div className="projectItem__info">
        <a href={to ? to : "#"} target="_blank">
          <h3 className="projectItem__title">{title}</h3>
        </a>
        <p className="projectItem__desc">{desc}</p>
      </div>
    </React.Fragment>
  );
}
