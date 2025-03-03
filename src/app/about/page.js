"use client"; 

import { useState } from "react";

export default function About() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-black-500">
      <div className="mx-auto flex justify-center items-center border-b ">
        {/* Logo */}

        {/* Desktop menu */}
        <div className="hidden md:flex space-x-4">
          <a href="/" className="text-white hover:bg-blue-700 px-3 py-2 rounded-md uppercase">Home</a>
          <a href="/about" className="text-white hover:bg-blue-700 px-3 py-2 rounded-md uppercase">About</a>
          <a href="/services" className="text-white hover:bg-blue-700 px-3 py-2 rounded-md uppercase">Services</a>
          <a href="/contact" className="text-white hover:bg-blue-700 px-3 py-2 rounded-md uppercase">Contact</a>
        </div>

        {/* Mobile Menu Button (Hamburger) */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu (Hidden by default) */}
      <div className={`md:hidden ${isMenuOpen ? "block" : "hidden"} bg-blue-600 space-y-2 mt-2`}>
        <a href="/" className="text-white block px-3 py-2 rounded-md">Home</a>
        <a href="/about" className="text-white block px-3 py-2 rounded-md">About</a>
        <a href="/services" className="text-white block px-3 py-2 rounded-md">Services</a>
        <a href="/contact" className="text-white block px-3 py-2 rounded-md">Contact</a>
      </div>
    </nav>
  );
}
