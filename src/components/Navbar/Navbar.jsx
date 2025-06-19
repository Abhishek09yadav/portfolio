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
      <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center">
        <Image
          className="cursor-pointer bg-white rounded-md w-20"
          onClick={() => router.push("/")}
          width={100}
          height={100}
          src="/logo/logo.svg"
          alt="Logo"
        />
        <div className="hidden md:flex space-x-6">
          {navLinks.map((value, index) => (
            <button
              key={index}
              className="text-white hover:text-purple-500  cursor-pointer transition duration-300 flex items-center gap-1"
              onClick={() => handleClick(value.path)}
            >
              {value.name}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
