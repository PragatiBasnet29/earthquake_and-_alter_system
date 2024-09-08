import React from 'react';
import { Link } from 'react-router-dom';
import image1 from "../assets/images/safety1.jpg";
import image2 from "../assets/images/safety2.jpg";
import image3 from "../assets/images/safety3.jpg";

const Safetycard = () => {
  return (
    <div className='py-16 '>
      <h2 className="text-3xl text-primary container mx-auto font-bold mb-4">Safety Measures During Earthquake</h2>
<div className='container mx-auto flex flex-col md:flex-row items-center'>
      {/* Safety Measure Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Card 1 */}
        <div className="bg-white p-4 rounded-md shadow-md">
          <div className="mb-4">
            <img
              src={image1}
              alt="Drop, Cover, and Hold On"
              className="w-full h-full object-cover rounded-md"
            />
          </div>
          <h3 className="text-xl text-primary font-semibold mb-2">1. Drop, Cover, and Hold On</h3>
          <p>
            When you feel the ground shaking, drop down to your hands and knees, cover your head
            and neck with your arms, and hold on to a sturdy piece of furniture or shelter.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white p-4 rounded-md shadow-md">
          <div className="mb-4">
            <img
              src={image2}
              alt="Stay Indoors"
              className="w-full h-full object-cover rounded-md"
            />
          </div>
          <h3 className="text-xl text-primary font-semibold mb-2">2. Stay Indoors</h3>
          <p>
            Stay inside and find a safe spot away from windows, heavy furniture, and objects that
            could fall. Avoid doorways and elevators during the shaking.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white p-4 rounded-md shadow-md">
          <div className="mb-4">
            <img
              src={image3}
              alt="Be Prepared for Aftershocks"
              className="w-full h-full object-cover rounded-md"
            />
          </div>
          <h3 className="text-xl text-primary font-semibold mb-2">3. Be Prepared for Aftershocks</h3>
          <p>
            Earthquakes are often followed by aftershocks. Be prepared for additional shaking and
            take necessary precautions even after the main quake.
          </p>
        </div>
      </div>
      </div>

      {/* Call-to-Action Button */}
     <div className="container mx-auto"> <Link to="/safety" className="bg-primary text-white py-4 px-8 rounded-full mt-8 inline-block font-bold  hover:bg-gray-200 hover:text-primary transition duration-300">
        Learn More
      </Link>
      </div>
    </div>
  );
};

export default Safetycard;
