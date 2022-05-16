import React from "react";
import { BsLinkedin, BsGithub, BsInstagram } from "react-icons/bs";
// import { ImLinkedin } from "react-icons/im";
const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/murtaza-mustafa-ali-37ba531b0/"
        target="_blank"
        rel="noreferrer"
      >
        {<BsLinkedin size={30} />}
      </a>
      <a href="https://github.com/mmali255" target="_blank" rel="noreferrer">
        <BsGithub size={30} />
      </a>
      <a
        href="https://www.instagram.com/murtaza_255/?hl=en"
        target="_blank"
        rel="noreferrer"
      >
        <BsInstagram size={30} />
      </a>
    </div>
  );
};

export default HeaderSocials;
