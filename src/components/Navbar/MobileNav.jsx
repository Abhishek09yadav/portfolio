"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { Home, User, Code, Mail } from "lucide-react";

const MobileNav = () => {
  const router = useRouter();

  const footerLinks = [
    { name: "Home", path: "/", icon: <Home size={20} /> },
    { name: "About", path: "/about", icon: <User size={20} /> },
    { name: "Projects", path: "/projects", icon: <Code size={20} /> },
    { name: "Contact", path: "/contact", icon: <Mail size={20} /> },
  ];

  return (
    <footer className="fixed bottom-0 left-0 w-full bg-white shadow-md md:hidden z-10  bg-[linear-gradient(90deg,#e3ffe7_0%,#d9e7ff_100%)]">
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
