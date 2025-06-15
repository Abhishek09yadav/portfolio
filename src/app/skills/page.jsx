import CodeCalendar from "@/components/skills/CodeCalendar";
import Skills from "@/components/skills/Skills";
import React from "react";

const page = () => {
  return (
    <div className="relative flex-1">
      <Skills />
      <CodeCalendar/>
    </div>
  );
};

export default page;
