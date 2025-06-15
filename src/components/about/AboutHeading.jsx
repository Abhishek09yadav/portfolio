import React from 'react'

import Image from "next/image";
const AboutHeading = () => {
  return (
    <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
      {/* text section */}
      <div className="md:w-1/2 text-center md:text-left">
        <h2 className="text-4xl text-center font-bold mb-6">About Me</h2>
        <p className="text-2xl ">
          I'm <span className="text-blue-400 font-bold">Abhishek Yadav</span>, a
          passionate full stack developer with experience in building responsive
          web applications using technologies like React.js, Next.js, Node.js. I
          love solving real-world problems through code and constantly learning
          new tools to improve my work.
        </p>
      </div>
      {/* image */}
      <div className="md:w-1/2 flex justify-center">
        <Image src="/img/about.png" width={550} height={550} alt="about" />
      </div>
    </div>
  );
};

export default AboutHeading;
