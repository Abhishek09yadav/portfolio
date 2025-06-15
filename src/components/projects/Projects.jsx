"use client"
import React from 'react'
import ProjectCard from "./ProjectCard";
import { projectData } from "./projectData";
const Projects = () => {
  return (
    <div className="p-8 flex flex-row gap-7">
      {projectData.map((value) => (
        <ProjectCard project={value} />

      ))}
    </div>
  );
}

export default Projects
