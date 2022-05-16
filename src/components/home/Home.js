import React from "react";
import CTA from "./CTA";
import "./home.css";
import Me from "../../assets/me.png";
import HeaderSocials from "./HeaderSocials";
import Typical from "react-typical";
const Home = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Murtaza Mustafa</h1>
        <h5 className="text-light">
          <Typical
            loop={Infinity}
            steps={[
              "Enthusiastic Dev 🔴",
              2000,
              "Full Stack Developer 💻",
              2000,
              "MERN Sack Dev 😎",
              2000,
              "Cross Platform v 🌐",
              2000,
            ]}
          />
        </h5>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={Me} alt="Murtaza" />
        </div>
      </div>
    </header>
  );
};

export default Home;
