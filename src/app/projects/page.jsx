import ProjectCard from "@/components/projects/ProjectCard";
import ProjectHeading from "@/components/projects/ProjectHeading";
import Projects from "@/components/projects/Projects";
import React from "react";

const page = () => {
  return (
    <div className="relative">
      <ProjectHeading />
      <Projects />
    </div>
  );
};

export default page;
