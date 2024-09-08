// SafetyMeasures.js
import React from 'react';
import image1 from "../assets/images/safety1.jpg";
import image2 from "../assets/images/safety2.jpg";
import image3 from "../assets/images/safety3.jpg";

const SafetyMeasures = () => {
  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-3xl text-primary font-bold mb-4">Safety Measures During Earthquake</h2>

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

        {/* Add more cards as needed */}
      </div>

      {/* Additional Safety Tips */}
      <div className="mt-8">
        <h2 className="text-2xl text-primary font-bold mb-4">Additional Safety Tips</h2>
        <ul className="list-disc pl-4">
          <li>Have an emergency kit with essential supplies.</li>
          <li>Know your evacuation routes and safe locations.</li>
          <li>Practice earthquake drills with your family or colleagues.</li>
          <li>Stay informed about earthquake preparedness.</li>
        </ul>
      </div>

      {/* Additional Safety Sentences */}
      <div className="mt-8">
        <h2 className="text-2xl text-primary font-bold mb-4">
          BEFORE, DURING, AND AFTER AN EARTHQUAKE
        </h2>
        <p>
          There are many things you can do to help yourself in the event of an earthquake. Generally, an earthquake is divided into three stages: before, during, and after. Know what to do in each stage.
        </p>
        <br/>
        <h3 className="text-xl text-primary font-semibold mb-2">Before</h3>
        <ul className="list-disc pl-4">
          <li>Develop a family earthquake plan. Prepare yourself and your home by completing the activities on this checklist.</li>
          <li>Decide how and where your family will reunite if separated.</li>
          <li>Choose an out-of-area friend or relative who separated family members can call after the quake to report their whereabouts and condition.</li>
          <li>Know the safe spots in each room: under sturdy tables, desks, or against inside walls.</li>
          <li>Know the danger spots: windows, mirrors, hanging objects, fireplaces and tall, unsecured furniture.</li>
          <li>Conduct practice drills. Physically place yourself in safe locations.</li>
          <li>Learn first aid and CPR (cardiopulmonary resuscitation) from your local American Red Cross chapter or other community organization.
</li>
          <li>Keep a list of emergency phone numbers.</li>
          <li>Learn how to shut off gas, water and electricity in case the lines are damaged. (Safety note: Do not attempt to relight a gas pilot).</li>
          <li>Secure water heaters and appliances that could move enough to rupture lines.</li>
          <li>Secure heavy furniture, hanging plants, heavy pictures or mirrors.</li>
          <li>Keep flammable or hazardous liquids in cabinets or on lower shelves.</li>
          <li>Maintain emergency food, water and other supplies, including a flashlight, a portable battery-operated radio, extra batteries, medicines, first aid kit and clothing.</li>
        
        </ul>
        <br/>
        <h3 className="text-xl text-primary font-semibold mb-2">During</h3>
        <ul className="list-disc pl-4">
 <li>If indoors, stay there and take cover under a table, desk, or other sturdy furniture.</li>
  <li>Face away from windows and glass doors.</li>
  <li>A doorway without a door is an acceptable location in which to stand.</li>
  <li>Lie, kneel or sit near a structurally sound interior wall or corner away from windows, brick fireplaces, glass walls, etc.</li>
  <li>Protect your head and body from falling or flying objects.</li>
  <li>Remain where you are until shaking stops. Think out your plan of action first, then move.</li>
  <li>Know exit routes if in a commercial building. Take cover and don't move until the shaking stops.</li>
  <li>If outside, get into an open area away from trees, buildings, walls and power lines.</li>
  <li>Lie down or crouch low to maintain balance.</li>
  <li>Get to the best available shelter if there is no open area available.</li>
  <li>If driving, stop safely as soon as possible. Stay inside your vehicle until the shaking stops.</li>
  <li>Do not stop your vehicle under overpasses or bridges.</li>
  <li>Stay below window level in your vehicle.</li>
  <li>Turn off the engine and turn on the radio. Follow emergency instructions.</li>
  <li>Stay in the vehicle if downed power lines have fallen across it. Do not touch metal. Wait for help. You might be able to back away from lines.</li>
  <li>If you have to leave your vehicle, move to an open area quickly.</li>
 </ul>
<br/>
 <h3 className="text-xl text-primary font-semibold mb-2">After</h3>
        <ul className="list-disc pl-4 mb-8">

        <li>Check for injuries. Render first aid. Do not move seriously injured victims unless they are in immediate danger.</li>
  <li>Do not use the telephone immediately unless there is a serious injury, fire, or other emergency.</li>
  <li>Hunt for hazards.</li>
  <li>Check for other hazards and control them (fire, chemical spills, toxic fumes, and possible collapse).</li>
  <li>Check utilities (water, gas, electric). If there is damage, turn the utility off at the source.</li>
  <li>Check for other hazards and control them (fire, chemical spills, toxic fumes, and possible collapse).</li>
  <li>Check the building for cracks and damage, including roof, chimneys, and foundation.</li>
  <li>Check food and water supplies.</li>
  <li>Emergency water can be obtained from water heaters, melted ice cubes, canned vegetables, and toilet tanks.</li>
  <li>Never use matches, lighters, or candles inside.</li>
  <li>Turn on the radio and listen for emergency broadcasts/announcements, news reports, and instructions. Cooperate with public safety officials.</li>
  <li>Do not use your vehicle unless there is an emergency. Keep the streets clear for emergency vehicles.</li>
  <li>If buildings are suspect, set up your shelter area away from damage.</li>
  <li>Work with your neighbors for a quicker recovery. Stay calm and lend a hand to others.</li>
  <li>Be prepared for aftershocks.</li>
  <li>Plan for evacuation in case events make this necessary. Leave written messages for other family members or searchers.</li>
  <li>Use gloves, wear heavy shoes, and have adequate and appropriate clothing available.</li>
</ul>

        
      </div>
    </div>
  );
};

export default SafetyMeasures;
