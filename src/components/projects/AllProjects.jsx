"use client"
import React from 'react'
import ProjectCard from "./ProjectCard";
import { projectData } from "./projectData";
const Projects = () => {
  return (
    <div className="p-8 gap-7 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {projectData.map((value, index) => (
        <ProjectCard key={index} project={value} />
      ))}
    </div>
  );
};

export default Projects;
