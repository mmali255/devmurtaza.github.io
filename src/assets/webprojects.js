import { v4 as uuidv4 } from "uuid";

import FaceMaskImg from "./facemask.jpg";
import CoinTrackerImg from "./cointracker.jpg";
import Nasa from "./nasa.jpg";
import Quizo from "./quizo.jpg";
import Medium from "./medium.jpg";

const mlprojects = [
  {
    id: uuidv4(),
    name: "NASA Project",
    desc: "A Web App that finds out habitable planets using Keplers data also one can schedule and keep record of launches(dummy) .Application is built using MERN Stack",
    img: Nasa,
    to: "https://github.com/mmali255/Nasa-Project",
  },
  {
    id: uuidv4(),
    name: "Quizo",
    desc: "Online quiz application where teacher can create quizes and student can appear for it.Application is built using JDBC,JSP",
    img: Quizo,
    to: "https://github.com/mmali255/Quizo",
  },
  {
    id: uuidv4(),
    name: "Coin Tracker",
    desc: "Using this app you can track  e coin.Application Built using MERN Stack",
    img: CoinTrackerImg,
    to: "https://github.com/mmali255/Coin-Tracker",
  },
  {
    id: uuidv4(),
    name: "Medium Blog Scraper",
    desc: "Application to scrape popular blogs from medium.com using specific keywords.Technologies used-Django,Beautiful Soup ",
    img: Medium,
    to: "https://github.com/mmali255/mediumBlogScraper",
  },
];

export default mlprojects;
