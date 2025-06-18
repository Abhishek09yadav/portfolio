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
    <nav className="bg-wite shadow-md top-0 z-50  sticky  bg-[linear-gradient(90deg,#e3ffe7_0%,#d9e7ff_100%)]">
      <div className="max-w-7xl mx-auto px-4 py-2  md:justify-between items-center flex flex-row">
        <Image
          className="text-2xl p-2 border-1 border-green-500 rounded-md  font-bold text-green-500 cursor-pointer items-center w-20"
          onClick={() => router.push("/")}
          width={100}
          height={100}
          src="/logo/logo.svg"
          alt="Logo"
        />
        <div className="hidden md:flex space-x-6">
          {navLinks.map((value, index) => {
            return (
              <button
                key={index}
                className="text-gray-800 hover:text-green-500 transition-colors duration-300 cursor-pointer flex flex-row gap-1"
                onClick={() => handleClick(value.path)}
              >
                {/* <value.icon /> */}
                {value.name}
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
