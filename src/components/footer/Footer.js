import React from "react";
import { BsLinkedin, BsGithub, BsInstagram } from "react-icons/bs";
import "./footer.css";
const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        MURTAZA
      </a>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer_socials">
        <a
          href="https://www.linkedin.com/in/murtaza-mustafa-ali-37ba531b0/"
          target="_blank"
          rel="noreferrer"
        >
          {<BsLinkedin />}
        </a>
        <a href="https://github.com/mmali255" target="_blank" rel="noreferrer">
          <BsGithub />
        </a>
        <a
          href="https://www.instagram.com/murtaza_255/?hl=en"
          target="_blank"
          rel="noreferrer"
        >
          <BsInstagram />
        </a>
      </div>
      <div className="footer_copyright">
        <small>&copy; Murtaza, All rights reserved</small>
      </div>
    </footer>
  );
};

export default Footer;
