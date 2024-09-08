// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faTachometerAlt } from '@fortawesome/free-solid-svg-icons';
// import Chart from 'react-apexcharts';

// const DataCard = ({ label, value, historicalData }) => {
//   const [prevValue, setPrevValue] = useState(value);

//   useEffect(() => {
//     // Set the previous value whenever the value changes
//     setPrevValue(value);
//   }, [value]);

//   const iconStyle = {
//     fontSize: '3rem',
//     transition: 'transform 0.5s ease',
//     transform: value > prevValue ? 'rotate(0deg)' : 'rotate(180deg)',
//   };

//   return (
//     <div className="w-52 mx-auto mt-4 bg-white border p-4 rounded-md shadow-md transition-transform transform scale-100 hover:scale-105">
//       <div className="flex items-center justify-center mb-4 text-primary">
//         <FontAwesomeIcon icon={faTachometerAlt} style={{ ...iconStyle, color: '#0492c2' }} />
//       </div>
//       <h3 className="text-lg font-semibold">{label} Value:</h3>
//       <div className="flex items-center mt-2">
//         <p className={`text-xl ${value > prevValue ? 'text-green-500' : 'text-red-500'}`}>
//           {value}
//         </p>
//       </div>
//       <div>{/* <p className="text-sm mt-2">Historical Data: {historicalData.join(', ')}</p> */}</div>
//     </div>
//   );
// };

// const LiveData = () => {
//   const [xdata, setXData] = useState(0);
//   const [ydata, setYData] = useState(0);
//   const [zdata, setZData] = useState(0);

//   // Historical data arrays
//   const [historicalXData, setHistoricalXData] = useState([]);
//   const [historicalYData, setHistoricalYData] = useState([]);
//   const [historicalZData, setHistoricalZData] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get('http://localhost:5000/');
//         const len=response.data.length;
//         setXData(response.data[len-1].x);
//         setYData(response.data[len-1].y);
//         setZData(response.data[len-1].z);

//         // Update historical data
//         setHistoricalXData((prevData) => [...prevData, response.data[len-1].x]);
//         setHistoricalYData((prevData) => [...prevData, response.data[len-1].y]);
//         setHistoricalZData((prevData) => [...prevData, response.data[len-1].z]);

//         setState((prevState) => ({
//           ...prevState,
//           series: [
//             { name: "x-axes value", data: historicalXData },
//             { name: "y-axes value", data: historicalYData },
//             { name: "z-axes value", data: historicalZData },
//           ],
//         }));

//         const threshold = 3;
//         if (response.data[len-1].x > threshold || response.data[len-1].x < -threshold ||
//           response.data[len-1].y> threshold || response.data[len-1].y< -threshold ||
//           response.data[len-1].z> threshold || response.data[len-1].z < -threshold) {
//           alert('Earthquake Detected! Stay Safe!');
//         }
        
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchData();

//     // Simulating live data updates every 5 ms
//     const intervalId = setInterval(fetchData, 500);

//     // Cleanup the interval when the component unmounts
//     return () => clearInterval(intervalId);
//   }, [historicalXData, historicalYData, historicalZData]);

//   const [state, setState] = useState({
//     options: {
//       colors: ['#E91E63', '#FF9800', '#000000'],
//       chart: {
//         id: 'basic-bar',
//         toolbar: {
//           show: false, // Hide chart toolbar
//         },
//       },
//       xaxis: {
//         categories: historicalXData,
//       },
//       yaxis: {
//         title: {
//           text: 'Values',
//         },
//       },
//       stroke: {
//         width: 2, // Decrease the stroke width
//         curve: 'smooth', // Use smooth curve
//       },
//       series: {
//         curve: "cardinal", // Use a smooth curve to connect data points
//       },
//     },
//     series: [
//       {
//         name: 'x-axes value',
//         data: historicalXData,
//       },
//       {
//         name: 'y-axes value',
//         data: historicalYData,
//       },
//       {
//         name: 'z-axes value',
//         data: historicalZData,
//       },
//     ],
//   });

//   return (
//     <div className="container mx-auto p-8 flex flex-col items-center md:flex-col md:justify-center">
//       <div>
//         <div className='container flex flex-row'>
//       <div className="max-w-md mx-auto mr-7">
//         <DataCard label="X" value={xdata} historicalData={historicalXData} />
//       </div>
//       <div className="max-w-md mx-auto mr-7">
//         <DataCard label="Y" value={ydata} historicalData={historicalYData} />
//       </div>
//       <div className="max-w-md mx-auto">
//         <DataCard label="Z" value={zdata} historicalData={historicalZData} />
//       </div>
//       </div>
//       </div>
//       <div className="col-4 mt-12">
//         <h2 className='text-primary font-semibold text-3xl'>Seismograph</h2>
//         <Chart options={state.options} series={state.series} type="line" width="600" height="300" />
//       </div>
//     </div>
//   );
// };

// export default LiveData;


import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt } from '@fortawesome/free-solid-svg-icons';
import Chart from 'react-apexcharts';

const DataCard = ({ label, value, historicalData }) => {
  const [prevValue, setPrevValue] = useState(value);

  useEffect(() => {
    // Set the previous value whenever the value changes
    setPrevValue(value);
  }, [value]);

  const iconStyle = {
    fontSize: '3rem',
    transition: 'transform 0.5s ease',
    transform: value > prevValue ? 'rotate(0deg)' : 'rotate(180deg)',
  };

  return (
    <div className="w-52 mx-auto mt-4 bg-white border p-4 rounded-md shadow-md transition-transform transform scale-100 hover:scale-105">
      <div className="flex items-center justify-center mb-4 text-primary">
        <FontAwesomeIcon icon={faTachometerAlt} style={{ ...iconStyle, color: '#0492c2' }} />
      </div>
      <h3 className="text-lg font-semibold">{label} Value:</h3>
      <div className="flex items-center mt-2">
        <p className={`text-xl ${value > prevValue ? 'text-green-500' : 'text-red-500'}`}>
          {value}
        </p>
      </div>
      <div>{/* <p className="text-sm mt-2">Historical Data: {historicalData.join(', ')}</p> */}</div>
    </div>
  );
};

const LiveData = () => {
  const [xdata, setXData] = useState(0);
  const [ydata, setYData] = useState(0);
  const [zdata, setZData] = useState(0);

  // Historical data arrays
  const [historicalXData, setHistoricalXData] = useState([]);
  const [historicalYData, setHistoricalYData] = useState([]);
  const [historicalZData, setHistoricalZData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try{
        // const response = await axios.get("http://192.168.190.132:5000");
        const response = await axios.get("http://192.168.16.28:5000");
        
        console.log(response.data)
        // const len=response.data.length;
        // console.log(response.data[0].x)
        // setXData(response.data[len-1].x);
        // setYData(response.data[len-1].y);
        // setZData(response.data[len-1].z);

        setXData(response.data.x);
        setYData(response.data.y);
        setZData(response.data.z);

        // Update historical data
        // setHistoricalXData((prevData) => [...prevData, response.data[len-1].x]);
        // setHistoricalYData((prevData) => [...prevData, response.data[len-1].y]);
        // setHistoricalZData((prevData) => [...prevData, response.data[len-1].z]);

  setHistoricalXData((prevData) => [...prevData, response.data.x]);
        setHistoricalYData((prevData) => [...prevData, response.data.y]);
        setHistoricalZData((prevData) => [...prevData, response.data.z]);

        setState((prevState) => ({
          ...prevState,
          series: [
            { name: "x-axes value", data: historicalXData },
            { name: "y-axes value", data: historicalYData },
            { name: "z-axes value", data: historicalZData },
          ],
        }));

        const threshold = 3;
      //   if (response.data[len-1].x > threshold || response.data[len-1].x < -threshold ||
      //     response.data[len-1].y> threshold || response.data[len-1].y< -threshold ||
      //     response.data[len-1].z> threshold || response.data[len-1].z < -threshold) {
      //     alert('Earthquake Detected! Stay Safe!');
      //   }
          if (response.data.x > threshold || response.data.x < -threshold ||
          response.data.y> threshold || response.data.y< -threshold ||
          response.data.z> threshold || response.data.z < -threshold) {
          alert('Earthquake Detected! Stay Safe!');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    const fetchDummy= async () => {
      try {
        // const response = await axios.get('http://localhost:5000/scam');
        const response = await axios.get('http://localhost:5000/test');
        console.log('object')
        console.log(response)
        
      
      
      if(response.data){
          alert('Earthquake Detected! Stay Safe!');
      }
    
      
    }
    
   catch (error) {
    console.error('Error fetching data:', error);
  }
};

    fetchData();
    // fetchDummy();

    // Simulating live data updates every 5 ms
    const intervalId = setInterval(fetchData, 500);

    // Cleanup the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, [historicalXData, historicalYData, historicalZData]);

  const [state, setState] = useState({
    options: {
      colors: ['#E91E63', '#FF9800', '#000000'],
      chart: {
        id: 'basic-bar',
        toolbar: {
          show: false, // Hide chart toolbar
        },
      },
      xaxis: {
        categories: historicalXData,
      },
      yaxis: {
        title: {
          text: 'Values',
        },
      },
      stroke: {
        width: 2, // Decrease the stroke width
        curve: 'smooth', // Use smooth curve
      },
      series: {
        curve: "cardinal", // Use a smooth curve to connect data points
      },
    },
    series: [
      {
        name: 'x-axes value',
        data: historicalXData,
      },
      {
        name: 'y-axes value',
        data: historicalYData,
      },
      {
        name: 'z-axes value',
        data: historicalZData,
      },
    ],
  });

  return (
    <div className="container mx-auto p-8 flex flex-col items-center md:flex-col md:justify-center">
      <div>
        <div className='container flex flex-row'>
      <div className="max-w-md mx-auto mr-7">
        <DataCard label="X" value={xdata} historicalData={historicalXData} />
      </div>
      <div className="max-w-md mx-auto mr-7">
        <DataCard label="Y" value={ydata} historicalData={historicalYData} />
      </div>
      <div className="max-w-md mx-auto">
        <DataCard label="Z" value={zdata} historicalData={historicalZData} />
      </div>
      </div>
      </div>
      <div className="col-4 mt-12">
        <h2 className='text-primary font-semibold text-3xl'>Seismograph</h2>
        <Chart options={state.options} series={state.series} type="line" width="600" height="300" />
      </div>
    </div>
  );
};

export default LiveData;
