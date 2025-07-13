"use client";
import React from "react";
import ProjectCard from "./ProjectCard";
import { projectData } from "./projectData";
import { useRouter } from "next/navigation";
const ProjectPreview = () => {
  const router = useRouter();
  return (
    <div>
      {" "}
      <div className="p-8 gap-7 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {projectData.slice(0, 4).map((value, index) => (
          <ProjectCard key={index} project={value} />
        ))}
      </div>
      <div className="flex justify-center items-center mt-6">
        <button
          onClick={() => router.push("/projects")}
          className="px-6 py-2 rounded-md bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold hover:opacity-90 transition duration-300 cursor-pointer"
        >
          View All Projects
        </button>
      </div>
    </div>
  );
};

export default ProjectPreview;
