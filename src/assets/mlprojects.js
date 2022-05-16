import { v4 as uuidv4 } from "uuid";

import FaceMaskImg from "./facemask.jpg";

const mlprojects = [
  {
    id: uuidv4(),
    name: "Covid 19 Rules Checker",
    desc: "An application to detect facemask which triggers an automatic gate,also keeping the count of people moving in and out of an area to keep social distancing ",
    img: FaceMaskImg,
    to: "/projects/ml/0",
  },
];

export default mlprojects;
