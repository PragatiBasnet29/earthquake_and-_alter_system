// Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";
import logo from "../assets/images/logo-01.png"

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-[#0492c2] p-4">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/">
          <img src={logo} alt="Logo" className="w-14 h-14" />
        </Link>

        {/* Navigation Links (hidden on small screens) */}
        <div className={`hidden md:flex space-x-10 ${isMenuOpen ? 'hidden' : ''}`}>
          <Link to="/home" className="text-slate-200 text-xl font-medium">Home</Link>
          <Link to="/live-data" className="text-slate-200 text-xl font-medium">Live Data</Link>
          <Link to="/safety" className="text-slate-200 text-xl font-medium">Safety Measures</Link>
          <Link to="/about" className="text-slate-200 text-xl font-medium">About</Link>
          <Link to="/contact" className="text-slate-200 text-xl font-medium">Contact Us</Link>
        </div>

        {/* Responsive Navigation (visible on small screens) */}
        <div className="md:hidden">
          <button className="text-slate-200" onClick={toggleMenu}>
            <GiHamburgerMenu />
          </button>
        </div>

        {/* Responsive Menu (visible when isMenuOpen is true) */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 right-4 bg-white p-4 space-y-2 flex flex-col">
            <Link to="/home" className="text-[#0492c2] text-xl font-medium">Home</Link>
            <Link to="/live-data" className="text-[#0492c2] text-xl font-medium">Live Data</Link>
            <Link to="/safety" className="text-[#0492c2] text-xl font-medium">Safety Measures</Link>
            <Link to="/" className="text-[#0492c2] text-xl font-medium">About</Link>
            <Link to="/" className="text-[#0492c2] text-xl font-medium">Contact Us</Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
