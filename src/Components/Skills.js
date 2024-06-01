import React from "react";
import {
  FaReact,
  FaGitAlt,
  FaGithub,
  FaNpm,
  FaFigma,
  FaAws,
  FaVuejs,
} from "react-icons/fa";
import { DiNodejs, DiJavascript1, DiNginx } from "react-icons/di";
import {
  SiAmazonec2,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiNestjs,
  SiPostgresql,
  SiTypescript,
  SiVercel,
  SiNextdotjs
} from "react-icons/si";
import Tooltip from "./Tooltip";

const Skills = ({ skill }) => {
  const icon = {
    AWS: <FaAws />,
    Vue: <FaVuejs />,
    React: <FaReact />,
    Next: <SiNextdotjs />,
    Nest: <SiNestjs />,
    Javascript: <DiJavascript1 />,
    Node: <DiNodejs />,
    Express: <SiExpress />,
    MongoDb: <SiMongodb />,
    Git: <FaGitAlt />,
    Github: <FaGithub />,
    Npm: <FaNpm />,
    Figma: <FaFigma />,
    Vercel: <SiVercel />,
    MySQL: <SiMysql />,
    Postgres: <SiPostgresql />,
    Typescript: <SiTypescript />,
    EC2: <SiAmazonec2 />,
  };

  return (
    <div title={skill} className="SkillBox">
      <Tooltip content={skill}>{icon[skill]}</Tooltip>
    </div>
  );
};

export default Skills;
