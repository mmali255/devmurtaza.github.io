import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import ProjectItem from "./ProjectItem";
import "swiper/swiper-bundle.min.css";
import roboprojects from "../assets/roboprojects";
import "./projects.css";
const ProjectsRobo = () => {
  SwiperCore.use([Navigation]);
  return (
    <React.Fragment>
      <div className="project_container">
        <div className="projects__allItems">
          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            navigation
            breakpoints={{
              // when window width is >= 640px
              640: {
                slidesPerView: 1,
              },
              // when window width is >= 768px
              768: {
                slidesPerView: 2,
              },
              // when window width is >= 1200px
              1200: {
                slidesPerView: 3,
              },
            }}
          >
            {roboprojects.map((project, index) => {
              //   if (index >= 5) {
              //     return null;
              //   }
              return (
                <SwiperSlide key={project.id}>
                  <ProjectItem
                    title={project.name}
                    img={project.img}
                    desc={project.desc}
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ProjectsRobo;
