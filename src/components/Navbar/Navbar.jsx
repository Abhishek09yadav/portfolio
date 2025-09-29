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
    <nav className="sticky top-0 z-50 bg-black/60 backdrop-blur-lg border-b border-white/10 shadow-lg">
      <div className="md:mx-8 px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Image
          className="cursor-pointer p-1 rounded-xl bg-white/10 hover:bg-white/20 transition duration-300 w-20"
          onClick={() => router.push("/")}
          width={100}
          height={100}
          src="/logo/logo.png"
          alt="Logo"
        />

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((value, index) => (
            <button
              key={index}
              className="text-white text-lg hover:text-customColorLight hover-underline-animation cursor-pointer transition-all duration-300 tracking-wide"
              onClick={() => handleClick(value.path)}
            >
              {value.name}
            </button>
          ))}
        </div>

        {/* Hamburger Menu */}
        <div className="md:hidden">
          <button
            className="text-white hover:scale-110 transition-transform"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? "" : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Overlay for mobile menu */}
      {isOpen && (
        <div
          className="fixed inset-0 h-screen backdrop-blur-sm bg-black/50 z-30"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 left-0 h-screen w-64 bg-gradient-to-b from-black via-gray-900 to-black shadow-xl z-40 transform transition-transform duration-300 ease-in-out rounded-r-2xl 
          ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-gray-700">
          <Image
            className="cursor-pointer p-1 rounded-md w-20"
            width={60}
            height={60}
            src="/logo/logo.png"
            alt="Logo"
            onClick={() => router.push("/")}
          />
          <X
            className="text-white cursor-pointer hover:text-customColorLight transition"
            onClick={() => setIsOpen(false)}
            size={28}
          />
        </div>

        {/* Sidebar Links */}
        <div className="flex flex-col gap-4 p-5">
          {navLinks.map((value, index) => (
            <button
              className="flex items-center gap-4 text-white text-lg hover:text-customColorLight transition-all duration-300 hover:translate-x-2"
              key={index}
              onClick={() => handleClick(value.path)}
            >
              <value.icon size={20} />
              {value.name}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
