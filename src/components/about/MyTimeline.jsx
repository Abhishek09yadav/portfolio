"use client";
import React from "react";
import { Timeline } from "primereact/timeline";

export default function MyTimeline() {
  const events = [
    {
      status: "Ramaiah Institute of Technology",
      date: "Aug 2018 – June 2022",
      icon: "pi pi-graduation-cap",
      color: "#42A5F5",
      details:
        "Bachelor of Engineering(B.E) in Computer Science and Engineering - Bengaluru, KA",
    },
    {
      status: "Intern at SkillVertex",
      date: "Sept 2021 – Nov 2021",
      icon: "pi pi-briefcase",
      color: "#66BB6A",
      details:
        "Built user interfaces and improved client engagement through reward interfaces.",
    },
    {
      status: "Full Stack Developer at Istakapaza",
      date: "Apr 2023 – Feb 2024",
      icon: "pi pi-briefcase",
      color: "#FFA726",
      details: "Led front-end development using React.js.",
    },
    {
      status: "Full Stack Developer at Mphasis",
      date: "Feb 2024 – May 2024",
      icon: "pi pi-briefcase",
      color: "#AB47BC",
      details:
        "Developed REST APIs, backend services and participated in agile ceremonies.",
    },
    {
      status: "Full Stack Developer at JeeVijay",
      date: "Nov 2024 – Aug 2025",
      icon: "pi pi-briefcase",
      color: "#EC407A",
      details:
        "Built scalable MERN stack apps, integrated Razorpay, deployed on Render/Vercel.",
    },
  ];
  const customizedContent = (item) => {
    return (
      <div className="text-left py-4 ">
        <h4 className="font-semibold">{item.status}</h4>
        <p className="text-sm text-yellow-500">{item.date}</p>
        <p className="mt-1">{item.details}</p>
      </div>
    );
  };
  const customizedMarker = (item) => {
    return (
      <span
        className="flex p-2 items-center justify-center rounded-full "
        style={{ backgroundColor: item.color }}
      >
        <i className={item.icon}></i>
      </span>
    );
  };
  return (
    <div className="card mx-auto mt-6 ">
      <h2 className="text-4xl py-4 font-bold mb-6">
        Education and Work Timeline
      </h2>
      <Timeline
        value={events}
        align="alternate"
        content={customizedContent}
        marker={customizedMarker}
        className="w-full"
      />
    </div>
  );
}
