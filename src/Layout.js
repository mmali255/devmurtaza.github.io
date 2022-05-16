import React from "react";
import Home from "./components/home/Home";
import Contact from "./components/contact/Contact";
import About from "./components/about/About";
import Portfolio from "./components/portfolio/Portfolio";
import Nav from "./components/nav/Nav";
import Projects from "./projects/Projects";
import Footer from "./components/footer/Footer";
const Layout = () => {
  return (
    <React.Fragment>
      <Home />
      <Nav />
      <About />
      <Portfolio />
      <Projects />
      <Contact />
      <Footer />
    </React.Fragment>
  );
};

export default Layout;
