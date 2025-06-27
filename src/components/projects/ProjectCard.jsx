import React from "react";
import Image from "next/image";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import projectData from "./projectData";
const ProjectCard = ({ project }) => {
  return (
    <div className="text-white rounded-md border-2 md:border-4 border-blue-200 overflow-hidden max-w-sm w-full">
      <Image
        src={project.image || "https://placehold.co/600x400"}
        alt={project.title}
        width={400}
        height={250}
        className="w-full h-52 object-cover"
      />
      <div className="text-lg text-yellow-500 mb-2 gap-4 flex justify-around mt-3">
        <div className="flex flex-row  gap-2">
          <div>{project.startDate}</div>
          {project.endDate && ` - ${project.endDate}`}
          {project.status === "in-progress" && (
            <> -
              <span className="inline-block mb-2 px-2 py-1 text-xs text-yellow-300 bg-yellow-900 rounded">
                On Progress
              </span>
            </>
          )}
        </div>
      </div>
      <div className="flex gap-3 mt-3 items-center justify-center">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="px-3 py-1 bg-neutral-800 rounded hover:bg-neutral-700 flex items-center gap-2 text-sm"
        >
          <FaGithub /> GitHub
        </a>

        <a
          href={project.demo}
          target="_blank"
          rel="noopener noreferrer"
          className="px-3 py-1 bg-blue-700 rounded hover:bg-blue-600 flex items-center gap-2 text-sm"
        >
          <FaExternalLinkAlt /> Demo
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
