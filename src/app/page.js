import AboutHeading from "@/components/about/AboutHeading";
import MyTimeline from "@/components/about/MyTimeline";
import Hero from "@/components/Hero";
import ProjectHeading from "@/components/projects/ProjectHeading";
import Projects from "@/components/projects/Projects";
import CodeCalendar from "@/components/skills/CodeCalendar";
import Skills from "@/components/skills/Skills";
import Image from "next/image";

export default function Page() {
  return (
    <div className="z-10 flex flex-col relative min-h-screen items-center justify-center px-4 md:px-16 text-white mt-16">
      {/* about */}
      <Hero className="" />
      <AboutHeading />
      <MyTimeline />
      {/* skills */}
      <Skills />
      <CodeCalendar />
      {/* projects */}
      <ProjectHeading />
      <Projects />
      {/* contact */}
      
      {/* footer */}

    </div>
  );
}
