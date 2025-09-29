import React from "react";
import Image from "next/image";

const AboutHeading = () => {
  return (
    <section className="flex flex-col md:flex-row items-center md:items-start gap-12 max-w-6xl mx-auto px-6 py-16">
      {/* Text Section */}
      <div className="md:w-1/2 text-center md:text-left space-y-6">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white">
          About Me
        </h2>
        <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
          I'm{" "}
          <span className="text-blue-400 font-semibold">Abhishek Yadav</span>, a
          passionate full stack developer with experience in building responsive
          web applications using technologies like
          <span className="text-blue-300"> React.js</span>,{" "}
          <span className="text-blue-300">Next.js</span>, and{" "}
          <span className="text-blue-300">Node.js</span>. I love solving
          real-world problems through code and constantly learning new tools to
          improve my work.
        </p>
      </div>

      {/* Image Section */}
      <div className="md:w-1/2 flex justify-center">
        <Image
          src="/img/about.png"
          width={500}
          height={500}
          alt="About Abhishek"
          className="rounded-2xl shadow-lg"
        />
      </div>
    </section>
  );
};

export default AboutHeading;
