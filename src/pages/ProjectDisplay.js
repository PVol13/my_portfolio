/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";
import GitHubIcon from "@mui/icons-material/GitHub";
import "../styles/ProjectDisplay.css";

function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id];
  return (
    <div className="project">
      <h1> {project.name}</h1>
      <img src={project.image}/>
      <p>
        <b>Tech Stack:</b> {project.skills}
      </p>
      <a href ="https://github.com/PVol13?tab=repositories" style={{textDecoration:'none'}}><GitHubIcon /></a>
    </div>
  );
}

export default ProjectDisplay;