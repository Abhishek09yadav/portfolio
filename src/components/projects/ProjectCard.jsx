import React from "react";
import Image from "next/image";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
const ProjectCard = ({ project }) => {
  return (
    <div
      className="relative max-w-sm text-white rounded-md border-2 md:border-4 duration-300 hover:bg-gray-900 hover:shadow-xl transition-shadow border-blue-200 hover:border-blue-300 flex flex-col
    hover:shadow-sky-900 overflow-hidden  w-full bg-gradient-to-r from-slate-900 to-slate-700"
    >
      <Image
        src={project.image || "https://placehold.co/600x400"}
        alt={project.title}
        width={400}
        height={250}
        className="w-full  h-52 object-cover"
      />
      <div className="text-lg  text-yellow-500 mb-2 gap-4 flex justify-around mt-3">
        <div className="flex flex-row  gap-2">
          <div>{project.startDate}</div>
          {project.endDate && ` - ${project.endDate}`}
          {project.status === "in-progress" && (
            <>
              {" "}
              -
              <span className="inline-block mb-2 px-2 py-1 text-xs text-yellow-300 bg-yellow-900 rounded">
                On Progress
              </span>
            </>
          )}
        </div>
      </div>
      {/* description */}
      <div className="w-full p-3 text-center mb-4">{project.description}</div>
      {/* link section  */}
      <div className=" flex justify-around  gap-3 items-center">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="px-3 py-1 bg-neutral-800 rounded hover:bg-neutral-700 flex items-center gap-2 text-sm "
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
