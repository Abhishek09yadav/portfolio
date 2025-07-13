import AboutHeading from "@/components/about/AboutHeading";
import MyTimeline from "@/components/about/MyTimeline";
import ProjectHeading from "@/components/projects/ProjectHeading";
import ProjectPreview from "@/components/projects/ProjectPreview";
import CodeCalendar from "@/components/skills/CodeCalendar";
import Skills from "@/components/skills/Skills";
import Image from "next/image";
import Hero from "@/components/Hero/Hero";

export default function Page() {
  return (
    <div className="z-10  flex flex-col relative min-h-screen items-center justify-center px-4 md:px-16 text-white mt-16 mb-10">
      {/* about */}
      <Hero />
      <AboutHeading />
      <MyTimeline />
      {/* skills */}
      <Skills />
      <CodeCalendar />
      {/* projects */}
      <ProjectHeading />
      <ProjectPreview />

      {/* contact */}

      {/* footer */}
    </div>
  );
}
