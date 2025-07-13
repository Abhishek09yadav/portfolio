import ProjectCard from "@/components/projects/ProjectCard";
import ProjectHeading from "@/components/projects/ProjectHeading";
import AllProjects from '@/components/projects/AllProjects'
import React from "react";
import Footer from "@/components/Footer";

const page = () => {
  return (
    <div className="relative mt-16">
      <ProjectHeading />
      <AllProjects />
      <Footer />
    </div>
  );
};

export default page;
