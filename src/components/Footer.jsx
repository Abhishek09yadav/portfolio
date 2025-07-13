"use client";

import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full text-xs md:font-medium p-3 bg-white/30 backdrop-blur-md border-t border-white/20 font-raleway text-white">
      <div className="flex flex-col md:flex-row items-center justify-between gap-3 md:gap-0">
 
        <div>Designed and Developed by Abhishek Yadav</div>

    
        <div className="flex items-center gap-2">
          <span className="">Follow me on:</span>
          <Link
            href="https://github.com/Abhishek09yadav"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-gray-300 transition duration-300 text-lg"
          >
            <FaGithub />
          </Link>
          <Link
            href="https://www.linkedin.com/in/abhishek-yadav007"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-blue-500 transition duration-300 text-lg"
          >
            <FaLinkedin />
          </Link>
        </div>

     
        <div>© {year} AY</div>
      </div>
    </footer>
  );
}

export default Footer;
