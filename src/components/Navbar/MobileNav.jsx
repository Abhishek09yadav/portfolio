"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { Home, User, Code, Mail, FolderClosed } from "lucide-react";

const MobileNav = () => {
  const router = useRouter();

  const footerLinks = [
    { name: "Home", path: "/", icon: <Home size={20} /> },
    { name: "About", path: "/about", icon: <User size={20} /> },
    { name: "Projects", path: "/projects", icon: <FolderClosed size={20} /> },
    { name: "Skills", path: "/skills", icon: <Code size={20} /> },
    { name: "Contact", path: "/contact", icon: <Mail size={20} /> },
  ];

  return (
    <footer className=" w-full bg-purple-100/60 backdrop-blur-md border-b border-white/20  shadow-md md:hidden z-12  ">
      <div className="flex justify-around py-3 ">
        {footerLinks.map((value, index) => {
          return (
            <button
              key={index}
              onClick={() => router.push(value.path)}
              className="flex flex-col items-center text-sm text-gray-700 hover:text-blue-500"
            >
              {value.icon}
              {value.name}
            </button>
          );
        })}
      </div>
    </footer>
  );
};

export default MobileNav;
