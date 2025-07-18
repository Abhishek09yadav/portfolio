"use client";
import React from "react";
import "./Skills.css";
import { Tooltip } from "primereact/tooltip";
import { techStack, tools } from "./skillData";



const Section = ({ title, items }) => {
  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold text-white mb-4 text-center">
        {title}
      </h2>
        <div
          className={ "flex flex-row flex-wrap gap-3 mx-auto items-center justify-center"}
        >
          {items.map((value, index) => (
            <div
              key={index}
              className="flex items-center justify-center gap-2 w-[150px] h-[120px] rounded-md border border-gray-100"
              style={{ backgroundColor: value.bg }}
            >
              <div className="flex flex-col items-center justify-center gap-1">
                <div className="text-2xl">{value.icon}</div>
                <div className="text-white">{value.name}</div>
              </div>
            </div>
          ))}
        </div>
 
    </div>
  );
};

const AllSkills = () => {
  return (
    <div className="w-full py-10 text-white space-y-12">
      <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-12">
        Professional{" "}
        <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">
          Skillset
        </span>
      </h2>
      <Section title={"TechStack"} items={techStack} />
      <Section title={"Tools"} items={tools} reverse />
      
  
    </div>
  );
};

export default AllSkills;
