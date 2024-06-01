import React from "react";
import ProjectBox from "./ProjectBox";
import OneManagementSystem from "../images/OneManagementSystem.png";
import BaristaSchool from "../images/BaristaSchool.png";
import gboxstudio from "../images/gboxstudio.png";
import furnitown from "../images/furnitown.png";
import pangpoker from "../images/pangpoker.png";

const Projects = () => {
  return (
    <div>
      <h1 className="projectHeading">
        My <b>Projects</b>
      </h1>
      <div className="project">
        <ProjectBox
          projectPhoto={BaristaSchool}
          projectName="Barista School"
          code="baristaschool_bo"
        />

        <ProjectBox
          projectPhoto={OneManagementSystem}
          projectName="One Management System"
          code="one"
        />

        <ProjectBox
          projectPhoto={gboxstudio}
          projectName="Gbox Studios"
          code="gboxstudios_bo"
        />

        <ProjectBox
          projectPhoto={furnitown}
          projectName="Furnitown"
          code="furnitown_bo"
        />

        <ProjectBox
          projectPhoto={pangpoker}
          projectName="Pang poker"
          code="pangpoker_bo"
        />
      </div>
    </div>
  );
};

export default Projects;
