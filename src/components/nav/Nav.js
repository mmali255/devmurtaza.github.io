import React from "react";
import { AiOutlineHome, AiOutlineUser, AiOutlineProject } from "react-icons/ai";
import { BiBook, BiMessageSquareDetail } from "react-icons/bi";
import { useState } from "react";
import "./nav.css";
const Nav = () => {
  // const url = window.location.href;
  // let position;
  // if (url.search("#home") > 0) {
  //   position = "#home";
  // } else if (url.search("#about") > 0) {
  //   position = "#about";
  // } else if (url.search("#portfolio") > 0) {
  //   position = "#portfolio";
  // } else if (url.search("#contact") > 0) {
  //   position = "#contact";
  // }
  const [activeNav, setActiveNav] = useState("#");
  return (
    <nav className="title_nav">
      <ul>
        <li className="list">
          <a
            href="#"
            onClick={() => setActiveNav("#")}
            className={activeNav === "#" ? "active" : ""}
          >
            <AiOutlineHome size={20} />
          </a>
        </li>
      </ul>
      <ul>
        <li className="list">
          <a
            href="#about"
            onClick={() => setActiveNav("about")}
            className={activeNav === "about" ? "active" : ""}
          >
            <AiOutlineUser size={20} />
          </a>
        </li>
      </ul>
      <ul>
        <li className="list">
          <a
            href="#portfolio"
            onClick={() => setActiveNav("portfolio")}
            className={activeNav === "portfolio" ? "active" : ""}
          >
            <BiBook size={20} />
          </a>
        </li>
      </ul>
      <ul>
        <li className="list">
          <a
            href="#projects"
            onClick={() => setActiveNav("projects")}
            className={activeNav === "projects" ? "active" : ""}
          >
            <AiOutlineProject size={20} />
          </a>
        </li>
      </ul>
      <ul>
        <li className="list">
          <a
            href="#contact"
            onClick={() => setActiveNav("contact")}
            className={activeNav === "contact" ? "active" : ""}
          >
            <BiMessageSquareDetail size={20} />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
