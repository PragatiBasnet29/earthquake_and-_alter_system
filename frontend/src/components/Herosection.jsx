// HeroSection.js
import React from 'react';
import IllustrationImage from '../assets/svgs/earthquake.svg'; // Replace with the actual path
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <div className=" text-primary py-16">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        {/* Illustration (on the right for larger screens) */}
    
        {/* <IllustrationImage/> */}

        {/* Text content (on the left) */}
        <div className="md:w-1/2 lg:w-1/3 xl:w-1/2 mx-4 md:mx-8 lg:mx-12">
          {/* Heading */}
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-10">Navigating Earthquakes: A Guide to Safety and Preparedness</h1>
          
          {/* Subheading */}
          <p className="text-lg md:text-xl lg:text-2xl mb-10 ">
          Stay Informed, Stay Safe: The Ultimate Preparedness Companion
          </p>
          
        
          {/* CTA Button */}
          <Link to="/" className="bg-primary text-slate-200 py-4 px-8 rounded-full font-bold text-lg hover:bg-gray-200 hover:text-primary transition duration-300">
            See More
          </Link>
        
        </div>

        <img
          src={IllustrationImage}
          alt="Illustration"
          className="w-full md:w-1/2 lg:w-2/3 xl:w-1/2 mb-8 md:mb-0"
        />
      </div>
    </div>
  );
};

export default HeroSection;
