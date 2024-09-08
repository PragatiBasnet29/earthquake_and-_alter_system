// Footer.js
import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import logo from "../assets/images/logo-01.png"


const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Column 1: Logo and Project Name */}
        <div className="text-center md:text-left">
          <Link to="/" className="text-xl font-bold text-white">
          <img src={logo} alt="Logo" className="w-14 h-14" />
          </Link>
          <p className="text-sm mt-2">Earthquake Detection and Alert System</p>
        </div>

        {/* Column 2: Navigation */}
        <div className="text-center md:text-left">
          <h3 className="text-lg font-bold mb-2">Navigation</h3>
          <ul className="text-sm">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/live-data">Live Data</Link></li>
            <li><Link to="/safety">Safety Measures</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>

        {/* Column 3: Social Links */}
        <div className="text-center md:text-left">
          <h3 className="text-lg font-bold mb-2">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="text-2xl" />
            </a>
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="text-2xl" />
            </a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-2xl" />
            </a>
          </div>
        </div>

        {/* Column 4: Send Email */}
        <div className="text-center md:text-left">
          <h3 className="text-lg font-bold mb-2">Contact Us</h3>
          <a href="mailto:kharelansa@gmail.com" className="text-sm flex items-center space-x-2">
            <FaEnvelope />
            <span>Email Us</span>
          </a>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-6 text-center text-sm">
        <p>&copy; 2024 Earthquake Detection & Alert System. All rights reserved.</p>
        <p>Designed and developed by QuadraCrafters.</p>
      </div>
    </footer>
  );
};

export default Footer;
