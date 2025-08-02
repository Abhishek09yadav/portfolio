import React from "react";
import Image from "next/image";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
const ProjectCard = ({ project }) => {
  return (
    <div className="group min-h-[410px] relative max-w-sm w-full rounded-2xl border border-blue-300 bg-gradient-to-br from-slate-900 to-slate-800 overflow-hidden shadow-md hover:shadow-md hover:shadow-customColor transition-all duration-300 space-y-4">
      <Image
        src={project.image || "https://placehold.co/600x400"}
        alt={project.title}
        width={400}
        height={250}
        className="w-full h-52 object-cover group-hover:scale-105 "
      />
      {/* Title Block */}
      <div className="flex justify-center my-2 font-semibold text-xl text-[#e2eff1]">
        {project.title}
      </div>
      {/* status block */}
      <div className="text-sm text-blue-200 m-2 flex justify-center  items-center">
        <div className="flex flex-row  gap-2">
          <div>{project.startDate}</div>
          {project.endDate && ` - ${project.endDate}`}
          {project.status === "in-progress" && (
            <>
              {" "}
              -
              <span className="px-2 py-0.5   text-xs text-yellow-300 bg-yellow-900 rounded-full">
                In Progress
              </span>
            </>
          )}
        </div>
      </div>
      {/* description */}
      <div className="w-full p-3 text-center mb-4 text-gray-300 text-sm">
        {project.description}
      </div>
      {/* link section  */}
      <div className=" flex justify-center  gap-3 items-center mb-4">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-neutral-800 rounded-md hover:bg-neutral-700 hover:scale-105 flex items-center gap-2 text-sm"
          >
            <FaGithub /> GitHub
          </a>
        )}

        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2  bg-blue-700 rounded-md hover:bg-blue-600 hover:scale-105 flex items-center gap-2 text-sm"
          >
            <FaExternalLinkAlt /> Demo
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
