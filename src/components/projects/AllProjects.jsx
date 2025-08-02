"use client";
import React from "react";
import ProjectCard from "./ProjectCard";
import { personalProjectData } from "./PersonalProjectData";
import { clientProjectData } from "./clientProjectData";

const Projects = () => {
  return (
    <>
      <h1 className="text-center text-4xl my-4 font-bold ">
        Company <span className="text-customColor">Projects</span> I Worked On
      </h1>
      <p className="text-center">Here are a few Projects I've worked on recently.</p>{" "}
      <div className="p-8 gap-7 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {clientProjectData.map((value, index) => (
          <ProjectCard key={index} project={value} />
        ))}
      </div>
      <h1 className="text-center text-4xl my-4 font-bold ">
        Personal <span className="text-customColor">Projects</span>
      </h1>
      <div className="p-8 gap-7 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {personalProjectData.map((value, index) => (
          <ProjectCard key={index} project={value} />
        ))}
      </div>
    </>
  );
};

export default Projects;
