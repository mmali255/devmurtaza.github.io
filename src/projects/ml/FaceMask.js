import React from "react";
import "./facemask.css";
import ReactPlayer from "react-player";
import FaceMaskk from "../../assets/videos/facemask.mp4";
import PeopleCounter from "../../assets/videos/peoplecounter.mp4";
import peoplefm from "../../assets/peoplefm.jpg";
const FaceMask = () => {
  return (
    <div>
      <h2 className="heading-fm">
        Face Mask Detection and Crowd Counting System
      </h2>
      <h3 className="subheading-fm">Face Mask Detection(Demo)</h3>
      <div className="container-fm ">
        <ReactPlayer controls url={FaceMaskk} />
      </div>
      <h3 className="subheading-fm">People Counter(Demo)</h3>
      <div className="container-fmimg">
        <img src={peoplefm} />
      </div>
      <div className="container-fm">
        <ReactPlayer controls url={PeopleCounter} />
      </div>
    </div>
  );
};

export default FaceMask;
