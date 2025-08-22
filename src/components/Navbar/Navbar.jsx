"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Home, User, Code, Mail, FolderClosed } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const navLinks = [
    { name: "Home", path: "/", icon: Home },
    { name: "About", path: "/about", icon: User },
    { name: "Projects", path: "/projects", icon: FolderClosed },
    { name: "Skills", path: "/skills", icon: Code },
    { name: "Contact", path: "/contact", icon: Mail },
  ];

  const handleClick = (path) => {
    setIsOpen(false);
    router.push(path);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/30 backdrop-blur-md border-b border-white/20 ">
      <div className=" md:mx-8 px-4 py-2 flex justify-between items-center">
        <Image
          className="cursor-pointer bg-gray-100 p-1 rounded-md w-20"
          onClick={() => router.push("/")}
          width={100}
          height={100}
          src="/logo/logo.png"
          alt="Logo"
        />
        <div className="hidden md:flex space-x-6">
          {navLinks.map((value, index) => (
            <button
              key={index}
              className="text-white hover:text-gray-200 hover-underline-animation cursor-pointer transition duration-300 flex items-center gap-1"
              onClick={() => handleClick(value.path)}
            >
              {value.name}
            </button>
          ))}
        </div>
        {/* hamburger menu for mobile screen  */}
        <div className="md:hidden">
          <button
            className="text-white cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? "": <Menu size={28} />}
          </button>
        </div>
      </div>
      {/* mobile menu */}
      {isOpen && (
        <div
          className="fixed inset-0 h-screen backdrop-blur-md bg-black/60 z-30"
          onClick={() => setIsOpen(false)}
        />
      )}
      <div
        className={`fixed top-0 md:hidden left-0 h-screen w-64 bg-gray-900 z-40 transform transition-transform duration-300 ease-in-out 
    ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between px-4 py-2 border-b border-gray-700">
          <Image
            className="cursor-pointer p-1 rounded-md w-20"
            width={60}
            height={60}
            src="/logo/logo.png"
            alt="Logo"
            onClick={() => router.push("/")}
          />
          <X className="" onClick={() => setIsOpen(false)} size={28} />
        </div>

        {/* Sidebar Links */}
        <div className="flex flex-col gap-3 p-4 items-start">
          {navLinks.map((value, index) => (
            <button
              className="text-white hover:text-customColor flex items-center gap-3 text-left w-full"
              key={index}
              onClick={() => handleClick(value.path)}
            >
              <value.icon size={18} />
              {value.name}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
