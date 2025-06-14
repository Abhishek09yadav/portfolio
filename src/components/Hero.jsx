"use client";

import { useRouter } from "next/navigation";
import React from "react";
import { ArrowDown, Mouse } from "lucide-react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";


const BACKGROUND_IMAGE_URL =
  "https://images.unsplash.com/photo-1504805572947-34fad45aed93?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

const Hero = () => {
 const router = useRouter();
  return (
    <div className="relative  w-full h-screen bg-black overflow-hidden">
      {/* bg */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{ backgroundImage: `url(${BACKGROUND_IMAGE_URL})` }}
      />
      {/* // gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent" />
      {/* content  */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
        <header className="mb-8 animate-fade-down">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight drop-shadow-lg">
            Hey There I'm Abhishek
          </h1>
          <p className="mt-4 text-lg md:text-2xl text-gray-300 font-light animate-fade-up delay-300">
            Mern Stack Developer
          </p>
        </header>
        <main className="max-w-3xl animate-fade-up delay-500">
          <p className="text-base md:text-xl leading-relaxed">
            I build scalable, high-performance web applications using MongoDB,
            Express.js, React, and Node.js. Let’s bring your ideas to life with
            clean code and intuitive design.
          </p>
        </main>

        <footer className="mt-12 animate-fade-up delay-700">
          <a
            href="#portfolio"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-transform duration-300 hover:scale-105 shadow-lg"
          >
            View My Work
            <ArrowDown className="w-5 h-5 ml-2" />
          </a>
        </footer>
      </div>

      {/* Scroll Down Indicator */}
      {/* <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <ArrowDown className="w-8 h-8 text-white/70" />
      </div> */}
    </div>
  );
};

export default Hero;
