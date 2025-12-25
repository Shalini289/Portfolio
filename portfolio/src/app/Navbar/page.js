"use client";

import Image from "next/image";

export default function Navbar() {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="navbar fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <div
          className="flex items-center space-x-1 cursor-pointer"
          onClick={() => scrollToSection("home")}
        >
         
          <Image
            src="/logo.png"
            alt="Logo"
            width={36}
            height={36}
            className="object-contain"
            priority
          />
          <span className="text-xl font-bold text-white">
            Shalini Bhadouriya
          </span>
        </div>

        {/* Menu */}
        <ul className="hidden md:flex space-x-8 text-gray-300 font-medium">
          <li onClick={() => scrollToSection("home")} className="hover:text-white cursor-pointer">Home</li>
          <li onClick={() => scrollToSection("about")} className="hover:text-white cursor-pointer">About</li>
          <li onClick={() => scrollToSection("skills")} className="hover:text-white cursor-pointer">Skills</li>
          <li onClick={() => scrollToSection("projects")} className="hover:text-white cursor-pointer">Projects</li>
          <li onClick={() => scrollToSection("contact")} className="hover:text-white cursor-pointer">Contact</li>
        </ul>
      </div>
    </nav>
  );
}
