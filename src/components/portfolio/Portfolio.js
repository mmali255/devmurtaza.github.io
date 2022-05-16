import React, { useState } from "react";
// import ScrollService from "../utilities/ScrollService";
// import Animations from "../utilities/Animations";
import { FaUserGraduate, FaHistory, FaLaptopCode } from "react-icons/fa";
import { AiFillProject } from "react-icons/ai";
import { BiCameraMovie } from "react-icons/bi";
import "./portfolio.css";
const Portfolio = () => {
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({});

  // let fadeInScreenHandler = (screen) => {
  //   if (screen.fadeInScreen !== "Resume") return;

  //   Animations.animations.fadeInScreen("Resume");
  // };
  // const fadeInSubscription =
  //   ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  /* REUSABLE MINOR COMPONENTS */
  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>
          <span>{props.heading ? props.heading : ""}</span>
          {props.fromDate && props.toDate ? (
            <div className="heading-date">
              {props.fromDate + "-" + props.toDate}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="resume-sub-heading">
          <span>{props.subHeading ? props.subHeading : ""}</span>
        </div>
        <div className="resume-heading-description">
          <span>{props.description ? props.description : ""}</span>
        </div>
      </div>
    );
  };
  /* STATIC RESUME DATA FOR THE LABELS*/
  const resumeBullets = [
    { label: "Education", logoSrc: <FaUserGraduate className="bullet-logo" /> },
    { label: "Work History", logoSrc: <FaHistory className="bullet-logo" /> },
    {
      label: "Programming Skills",
      logoSrc: <FaLaptopCode className="bullet-logo" />,
    },
    { label: "Projects", logoSrc: <AiFillProject className="bullet-logo" /> },
    { label: "Interests", logoSrc: <BiCameraMovie className="bullet-logo" /> },
  ];

  //here we have
  const programmingSkillsDetails = [
    { skill: "JavaScript", ratingPercentage: 85 },
    { skill: "C++", ratingPercentage: 85 },
    { skill: "React JS", ratingPercentage: 85 },
    { skill: "Express JS", ratingPercentage: 89 },
    { skill: "Node JS", ratingPercentage: 89 },
    { skill: "Mongo Db", ratingPercentage: 70 },
    { skill: "Core Java", ratingPercentage: 80 },
    { skill: "HTML", ratingPercentage: 80 },
    { skill: "CSS", ratingPercentage: 80 },
  ];

  const projectsDetails = [
    {
      title: "Personal Portfolio Website",
      duration: { fromDate: "2020", toDate: "2021" },
      description:
        "A Personal Portfolio website to showcase all my details and projects at one place.",
      subHeading: "Technologies Used: React JS, Bootsrap",
    },
    {
      title: "Mobile E-shop ",
      duration: { fromDate: "2020", toDate: "2021" },
      description:
        "An ecommerce application designed to sell products online wth payment system integration",
      subHeading:
        "Technologies Used:  React Native, Mongo DB, Express Js, Node Js, Redux.",
    },
    {
      title: "Ecommerce Website ",
      duration: { fromDate: "2020", toDate: "2021" },
      description:
        "Online ecommerce website for showcasing and selling products onlne with payment system integration, both Paypal and Stripe",
      subHeading:
        "Technologies Used: Mongo DB, Epress Js, React Js, Node JS, Redux, Bootstrap.",
    },
  ];

  const resumeDetails = [
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={"Shri Ramdeobaba College Of Engineering and Management"}
        subHeading={"BACHELOR OF Engineering"}
        fromDate={"2018"}
        toDate={"2022"}
      />

      <ResumeHeading
        heading={"Taywade Junior College,Koradi"}
        subHeading={"Maharashtra State Board"}
        fromDate={"2016"}
        toDate={"2018"}
      />
      <ResumeHeading
        heading={"M.S.B Educational Institute"}
        subHeading={"ICSE Board"}
        fromDate={"2004"}
        toDate={"2016"}
      />
    </div>,

    /* WORK EXPERIENCE */
    <div className="resume-screen-container" key="work-experience">
      <div className="experience-container">
        <ResumeHeading
          heading={"Tata Consultancy Services"}
          subHeading={"FULL STACK DEVELOPER INTERN"}
          fromDate={"2022 Jan"}
          toDate={"2022 June"}
        />
        <div className="experience-description">
          <span className="resume-description-text">
            -Worked as MERN stack web developer .
          </span>
        </div>
        <div className="experience-description">
          {/* <span className="resume-description-text">
            - Developed an ecommerce website for client with the dashboard for
            managing the products, managing reviews, users, payment etc. .
          </span>
          <br />
          <span className="resume-description-text">
            - Integrated the web app with backend services to create new user
            onboarding application with dynamic form content.{" "}
          </span>
          <br /> */}
          <span className="resume-description-text">
            - I stretch my mental capacity to develope web apps as per the given
            designs.
          </span>
          <br />
        </div>
      </div>
    </div>,

    /* PROGRAMMING SKILLS */
    <div
      className="resume-screen-container programming-skills-container"
      key="programming-skills"
    >
      {programmingSkillsDetails.map((skill, index) => (
        <div className="skill-parent" key={index}>
          <div className="heading-bullet"></div>
          <span>{skill.skill}</span>
          <div className="skill-percentage">
            <div
              style={{ width: skill.ratingPercentage + "%" }}
              className="active-percentage-bar"
            ></div>
          </div>
        </div>
      ))}
    </div>,

    /* PROJECTS */
    <div className="resume-screen-container" key="projects">
      {/* {projectsDetails.map((projectsDetails, index) => (
        <ResumeHeading
          key={index}
          heading={projectsDetails.title}
          subHeading={projectsDetails.subHeading}
          description={projectsDetails.description}
          fromDate={projectsDetails.duration.fromDate}
          toDate={projectsDetails.duration.toDate}
        />
      ))} */}
      <div className="portfolio-project-screen-btn">
        <a href="#projects" className="btn btn-primary">
          Go To Projects
        </a>
      </div>
    </div>,

    /* Interests */
    <div className="resume-screen-container" key="interests">
      <ResumeHeading
        heading="Chess"
        description="Apart from being a tech enthusiast and a code writer, i also love to play chess since it stimulates my brain to think complex moves ."
      />
      <a href="https://www.chess.com/member/mmali255" target="_blank">
        click here
      </a>
      <ResumeHeading
        heading="Movies"
        description="Watching Movies is a hobby and  at times the best stress reliever that i can get my hands on."
      />
      <ResumeHeading
        heading="Competitive Gaming"
        description="I like to challenge my reflexes a lot while competing in FPS games, pushing the rank and having interactive gaming sessions excites me the most."
      />
      <a
        href="https://steamcommunity.com/id/murtazamustafa255/"
        target="_blank"
      >
        click here
      </a>
    </div>,
  ];

  const handleCarousal = (index) => {
    let offsetHeight = 360;

    let newCarousalOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    };

    setCarousalOffsetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}
      >
        <div>{bullet.logoSrc}</div>
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };

  const getResumeScreens = () => {
    return (
      <div
        style={carousalOffsetStyle.style}
        className="resume-details-carousal"
      >
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    );
  };

  return (
    <section id="portfolio">
      <h5>Projects and Skills</h5>
      <h2>Portfolio</h2>
      <div className="resume-card">
        <div className="resume-bullets">
          <div className="bullet-container">
            <div className="bullet-icons"></div>
            <div className="bullets">{getBullets()}</div>
          </div>
        </div>

        <div className="resume-bullet-details">{getResumeScreens()}</div>
      </div>
    </section>
  );
};

export default Portfolio;
