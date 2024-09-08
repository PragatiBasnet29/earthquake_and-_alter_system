import React from 'react';
import arduinoImage from "../assets/images/arduino.png"
import gsmImage from "../assets/images/gsm.png"
import adxl from "../assets/images/adxl.jpg"
import esp from "../assets/images/ESP.jpg"
import lcd from "../assets/images/lcd.jpg"

const About = () => {
  return (
    <div className='container py-16 mx-auto'>
      <h2 className="text-3xl text-primary font-bold mb-4">Components Used in Our Project</h2>

      {/* Arduino Uno */}
      <div className="mb-8">
        <h3 className="text-xl text-primary font-semibold mb-2">1. Arduino Nano</h3>
        <p>
        The Arduino Nano is a small, complete, and breadboard-friendly board based on the ATmega328 (Arduino Nano 3.x). It has more or less the same functionality of the Arduino Duemilanove, but in a different package. It lacks only a DC power jack, and works with a Mini-B USB cable instead of a standard one.
        </p>
        <img src={arduinoImage} alt="Arduino Uno" className="w-auto h-96 mt-4 mx-auto" />
        <p className="text-center mt-4 font-medium">Figure 1: Arduino Nano</p>
      </div>

      {/* GSM Module */}
      <div className="mb-8">
        <h3 className="text-xl text-primary font-semibold mb-2">2. GSM Module</h3>
        <p>
          The GSM (Global System for Mobile Communications) module facilitates
          communication via mobile networks, enabling the project to send and receive
          information remotely. The GSM module allows the project to send SMS messages,
          make phone calls, or establish a GPRS (General Packet Radio Service) connection for
          data transfer. This capability enhances the project's remote monitoring and control features.
        </p>
        <img src={gsmImage} alt="GSM Module" className="w-auto h-96 mt-4 mx-auto" />
        <p className="text-center mt-1 font-medium">Figure 2: SIM 800L (GSM Module)</p>
      </div>

      <div className="mb-8">
        <h3 className="text-xl text-primary font-semibold mb-2">3. ADXL335 3-AXIS Accelerometer</h3>
        <p>
        The ADXL335 three-axis analog accelerometer IC is used in this Accelerometer
module, which reads the X, Y, and Z acceleration as analog voltages. The
accelerometer will determine how quickly and in which direction the system is going
by detecting the amount of dynamic acceleration. The accelerometer connects to an
Arduino Microcontroller through three analog input pins, and it can also be used with
other microcontrollers like the PIC or AVR.
        </p>
        <img src={adxl} alt="ADXL" className="w-auto h-96 mt-4 mx-auto" />
        <p className="text-center mt-4 font-medium">Figure 3: ADXL335 3-AXIS Accelerometer</p>
      </div>

      <div className="mb-8">
        <h3 className="text-xl text-primary font-semibold mb-2">4. ESP8266 Wi-Fi Module</h3>
        <p>
        The ESP8266 is a low-cost, Wi-Fi-enabled microcontroller module that replaces the
standard Wi-Fi module. It allows the project to connect to local wireless networks and
facilitates communication with the backend. The ESP8266 enables the project to access
the internet, communicate with cloud services, and send/receive data to/from the
backend server. It plays a key role in establishing a stable and reliable connection for
remote monitoring and control.
        </p>
        <img src={esp} alt="ESP8266" className="w-auto h-96 mt-4 mx-auto" />
        <p className="text-center mt-4 font-medium">Figure 4: ESP8266 Wi-fi Module</p>
      </div>

      <div className="mb-8">
        <h3 className="text-xl text-primary font-semibold mb-2">5. LCD Display</h3>
        <p>
        The LCD (Liquid Crystal Display) provides a visual interface for the project, allowing
users to view real-time data, system status, or any relevant information. The LCD
display presents information in a user-friendly format, enhancing the project's usability.
It can show sensor readings, status messages, or prompts for user interaction.
        </p>
        <img src={lcd} alt="LCD" className="w-auto h-96 mt-4 mx-auto" />
        <p className="text-center mt-4 font-medium">Figure 5: LCD Display</p>
      </div>

      <div className="mb-8">
        <h3 className="text-xl text-primary font-semibold mb-2">6. Buzzer</h3>
        <p>
        Buzzers provide auditory feedback, alerting users to specific events or conditions
within the project. They can be programmed to produce different tones or patterns,
serving as alarms, notifications, or indicators. They enhance the project's user feedback
system, making it more interactive and accessible.
        </p>
      </div>

      <div className="mb-8">
        <h3 className="text-xl text-primary font-semibold mb-2">7. User Interface with React.js</h3>
        <p>
        React.js is used to develop the user interface, providing a dynamic and responsive
frontend for the project. It allows the creation of interactive and visually appealing user
interfaces. Developers can design and implement components that display real-time
data, user controls, and system status. This front-end technology enhances the overall
user experience by providing a modern and intuitive interface for interacting with the
project.
        </p>
      </div>

      <div className="mb-8">
        <h3 className="text-xl text-primary font-semibold mb-2">8. Communication with Backend (Node.js) using ESP8266</h3>
        <p>
        The ESP8266 module facilitates communication between the Arduino Uno and the
Node.js backend. It acts as a bridge, facilitating data transfer between the Arduino and
the backend server over Wi-Fi, allowing real-time exchange and interaction with
external servers and services.
        </p>
      </div>

      <div className="mb-8">
        <h3 className="text-xl text-primary font-semibold mb-2">9. Arduino IDE</h3>
        <p>
        The Arduino IDE is the software platform used to program and upload code to the
Arduino Uno. Developers use the Arduino IDE to write, compile, and upload sketches
(code) to the Arduino Uno, providing a user-friendly environment for programming
and debugging.
        </p>
      </div>

      <div className="mb-8">
        <h3 className="text-xl text-primary font-semibold mb-2">10. Processing IDE</h3>
        <p>
        The Processing IDE (Integrated Development Environment) is a software environment
designed for creative coding and visual arts projects. It includes a built-in editor, a
sketchbook for organizing projects, and a simplified set of libraries for graphics, sound,
and interactivity. The platform is widely used for interactive installations, generative
art, data visualization, and educational purposes due to its ease of use and rapid
prototyping capabilities.
        </p>
      </div>

      

      



    </div>
  );
};

export default About;
