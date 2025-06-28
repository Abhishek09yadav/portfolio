import AllSkills from "@/components/skills/AllSkills";
import CodeCalendar from "@/components/skills/CodeCalendar";
import Skills from "@/components/skills/Skills";
import React from "react";

const page = () => {
  return (
    <div className="relative flex-1">
      <AllSkills />
      <CodeCalendar/>
    </div>
  );
};

export default page;
