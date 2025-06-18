"use client";

import { useRouter } from "next/navigation";
import React from "react";
import { ArrowDown } from "lucide-react";

const BACKGROUND_IMAGE_URL =
  "https://images.unsplash.com/photo-1504805572947-34fad45aed93?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

const Hero = () => {
  const router = useRouter();

  return (
    <div className="relative w-full h-screen bg-black overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-80"
        style={{ backgroundImage: `url(${BACKGROUND_IMAGE_URL})` }}
      />

      {/* Dark Overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/30" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4 text-center">
        <header className="mb-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold drop-shadow-lg animate-fade-down">
            Hey There 👋,
          </h1>
          <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-8xl font-bold mt-2 drop-shadow-lg">
            I'm Abhishek
          </h2>
          <p className="mt-4 text-base sm:text-lg md:text-2xl text-gray-300 animate-fade-up delay-300">
            MERN Stack Developer
          </p>
        </header>

        <main className="max-w-2xl animate-fade-up delay-500">
          <p className="text-sm sm:text-base md:text-xl leading-relaxed text-gray-200">
            I build scalable, high-performance web applications using MongoDB,
            Express.js, React, and Node.js. Let’s bring your ideas to life with
            clean code and intuitive design.
          </p>
        </main>

        <footer className="mt-10 animate-fade-up delay-700">
          <a
            href="#portfolio"
            className="inline-flex items-center justify-center px-6 py-3 text-base md:text-lg font-medium text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-transform duration-300 hover:scale-105 shadow-md"
          >
            View My Work
            <ArrowDown className="w-5 h-5 ml-2" />
          </a>
        </footer>
      </div>
    </div>
  );
};

export default Hero;
