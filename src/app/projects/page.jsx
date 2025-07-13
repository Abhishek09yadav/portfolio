import ProjectCard from "@/components/projects/ProjectCard";
import ProjectHeading from "@/components/projects/ProjectHeading";
import AllProjects from '@/components/projects/AllProjects'
import React from "react";

const page = () => {
  return (
    <div className="relative">
      <ProjectHeading />
      <AllProjects />
    </div>
  );
};

export default page;
