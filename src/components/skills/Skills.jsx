"use client";
import React from "react";
import { Tooltip } from "primereact/tooltip"
import { techStack, tools } from "./skillData";


const Section = ({ title, items }) => {
  return (<div className="mb-8">
    <h2 className="text-xl font-semibold text-white mb-4 text-center">
      {title}
    </h2>
    {items.map((value, index) => {
      return (
        <div
          key={index}
          className="flex items-center gap-2 px-3 py-2 rounded-md"
          style={{ backgroundColor: `${value.bg}` }}
        >
          {value.icon}
          <div className="text-white">{value.name}</div>
        </div>
      );
    })}
  </div>);
};
const Skills = () => {
  return (
    <div className="w-full  py-10 text-white">
      <h2 className="text-4xl font-bold mb-8 text-center text-primary">
        Professional <span className="text-purple-600">Skillset</span>
      </h2>
      <Section title={"TechStack"} items={techStack} />
      <Section title={"Tools"} items={tools} />
    </div>
  );
};

export default Skills;
