import React from "react";
import ProjectBox from "./ProjectBox";

const Projects = () => {
  return (
    <div>
      <h1 className="projectHeading">
        My <b>Projects</b>
      </h1>
      <div className="project">
        <ProjectBox
          projectPhoto={'images/BaristaSchool.png'}
          projectName="Barista School"
          code="baristaschool_bo"
        />

        <ProjectBox
          projectPhoto={'images/OneManagementSystem.png'}
          projectName="One Management System"
          code="one"
        />

        <ProjectBox
          projectPhoto={'images/gboxstudio.png'}
          projectName="Gbox Studios"
          code="gboxstudios_bo"
        />

        <ProjectBox
          projectPhoto={'images/furnitown.png'}
          projectName="Furnitown"
          code="furnitown_bo"
        />

        <ProjectBox
          projectPhoto={'images/pangpoker.png'}
          projectName="Pang poker"
          code="pangpoker_bo"
        />
      </div>
    </div>
  );
};

export default Projects;
