import { v4 as uuidv4 } from "uuid";

import LineFollower from "./linefollower.jpg";
import TempSense from "./tempsensing.jpg";
import Gripper from "./gripper.jpg";
import RoboArena from "./roboarena.jpg";
const roboprojects = [
  {
    id: uuidv4(),
    name: "Maze Solver",
    desc: "Participated in VNIT Axis and Techfest Line follower robotics competitions ",
    img: LineFollower,
  },
  {
    id: uuidv4(),
    name: "Gripper Robot",
    desc: "A pick and Place four wheel bluetooth controlled robot",
    img: Gripper,
  },
  {
    id: uuidv4(),
    name: "Body Tempertaure Sensing",
    desc: "To monitor temperature of a person using Raspberry PI and alerts using SMTP Protocol.",
    img: TempSense,
  },
  {
    id: uuidv4(),
    name: "Robo Arena ",
    desc: "Winner of Robo Arena robotics competition at RCOEM.",
    img: RoboArena,
  },
];

export default roboprojects;
