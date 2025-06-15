"use client";
import React from "react";
import { Tooltip } from "primereact/tooltip";
import { Tag } from "primereact/tag";

// Example skill categories with icon class (optional)
const techStack = [
  { name: "JavaScript", icon: "pi pi-code" },
  { name: "TypeScript", icon: "pi pi-cog" },
  { name: "React.js", icon: "pi pi-desktop" },
  { name: "Next.js", icon: "pi pi-globe" },
  { name: "Node.js", icon: "pi pi-server" },
  { name: "Express.js", icon: "pi pi-send" },
  { name: "MongoDB", icon: "pi pi-database" },
  { name: "Tailwind CSS", icon: "pi pi-sitemap" },
  { name: "Redux", icon: "pi pi-sliders-h" },
  { name: "Git", icon: "pi pi-github" },
  { name: "Postman", icon: "pi pi-send" },
];

const TechStack = () => {
  return (
    <div className="w-full px-4 md:px-16 py-10 bg-gray-900 text-white">
      <h2 className="text-3xl font-bold mb-8 text-center text-primary">
        Tech Stack
      </h2>

      <div className="overflow-x-auto whitespace-nowrap scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-800 py-4">
        <div className="inline-flex gap-4 px-2">
          {techStack.map((tech, index) => (
            <div
              key={index}
              className="flex items-center gap-2 px-4 py-2 bg-gray-800 rounded-full hover:bg-primary transition-all duration-300 cursor-pointer shadow-md"
              data-pr-tooltip={tech.name}
            >
              <i className={`${tech.icon} text-lg`} />
              <span>{tech.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* PrimeReact Tooltip */}
      <Tooltip target="[data-pr-tooltip]" />
    </div>
  );
};

export default TechStack;
