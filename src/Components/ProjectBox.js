import React from "react";
import { FaGithub } from "react-icons/fa";
import { CgFileDocument } from "react-icons/cg";

const ProjectBox = ({ projectPhoto, projectName, code }) => {
  const desc = {
    oneDesc:
      "A WMS (Warehouse management system), OMS (Orders Management system) that manage your product, and your orders sync with multiple marketplace supported",
    oneGithub: "",
    oneWebsite: "https://fulfil.ztoasia.com",

    baristaschool_boDesc:
      "An application website used to sell coffee products and train students to brew and sell to employers if there is a need for baristas.",
    baristaschool_boGithub: "",
    baristaschool_boWebsite: "https://baristaschool.vn/",

    gboxstudios_boDesc: "Website application template used to hire filming services",
    gboxstudios_boGithub: "",
    gboxstudios_boWebsite: "https://minhtoan1210.github.io/gbox.github.io/",

    furnitown_boDesc: "Website template introducing interior products",
    furnitown_boGithub: "",
    furnitown_boWebsite: "https://minhtoan1210.github.io/furnitown/",

    pangpoker_boDesc: "The website introduces current and upcoming entertainment games",
    pangpoker_boGithub: "",
    pangpoker_boWebsite: "https://user4.vincent-gb.com/",

  };

  let show = "";
  if (desc[code + "Github"] === "") {
    show = "none";
  }

  return (
    <div className="projectBox">
      <img className="projectPhoto" src={projectPhoto} alt="Project display" />
      <div>
        <br />
        <h3>{projectName}</h3>
        <br />
        {desc[code + "Desc"]}
        <br />

        <a
          style={{ display: show }}
          href={desc[code + "Github"]}
          target="_blank"
          rel="noreferrer"
        >
          <button className="projectbtn">
            <FaGithub /> Github
          </button>
        </a>

        <a href={desc[code + "Website"]} target="_blank" rel="noreferrer">
          <button className="projectbtn">
            <CgFileDocument /> Demo
          </button>
        </a>
      </div>
    </div>
  );
};

export default ProjectBox;
