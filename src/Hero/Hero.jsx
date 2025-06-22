"use client";

import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { ArrowDown } from "lucide-react";
import { motion } from "motion/react";
const BACKGROUND_IMAGE_URL =
  "https://images.unsplash.com/photo-1504805572947-34fad45aed93?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

const Hero = () => {
  const router = useRouter();
  const phrases = [
    "MERN Stack Developer",
    "I design websites",
    "React & Node.js Enthusiast",
    "Clean UI lover",
    "Pixel-perfect UI builder",
    "I craft scalable web apps",
    "Responsive design advocate",
    "JavaScript addict",
    "Full-stack problem solver",
    "Frontend architect",
  ];
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [charIndex, setCharIndex] = useState(0);
  useEffect(() => {
    const currentPhrase = phrases[index];
    if (charIndex < currentPhrase.length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + currentPhrase[charIndex]);
        setCharIndex((prev) => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setText("");
        setCharIndex(0);
        setIndex((prev) => (prev + 1) % phrases.length);
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [charIndex, index]);
  return (
    <>
      {" "}
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
          <header className="my-6">
            <motion.div className="flex mb-4 items-center justify-center gap-2 ">
              <motion.h1
                className="font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-transparent  bg-clip-text"
                initial={{ backgroundPosition: "0% 50%" }}
                animate={{ backgroundPosition: "50% 100%" }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                }}
                style={{
                  backgroundSize: "200% 200%",
                }}
              >
                Hey There
              </motion.h1>
              <motion.h1
                className="font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl"
                animate={{ rotate: [0, 20, -10, 20, -10, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatDelay: 1.5,
                }}
              >
                👋
              </motion.h1>
            </motion.div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-5xl font-semibold mt-2 drop-shadow-lg">
              Abhishek Here
            </h2>
            <p className="text-base sm:text-lg md:text-2xl text-gray-300 typing-text">
              {text}
              <span className="blinking-cursor">|</span>
            </p>
          </header>

          <main className="max-w-2xl animate-fade-up delay-500">
            <p className="text-sm sm:text-base md:text-xl leading-relaxed text-gray-200">
              I build scalable, high-performance web applications using MongoDB,
              Express.js, React, and Node.js. Let’s bring your ideas to life
              with clean code and intuitive design.
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
    </>
  );
};

export default Hero;
