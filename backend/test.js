const fetchApi = async () => {
  try {
    const getRandomData = () => Math.floor(Math.random() * 2);
    console.log(getRandomData()); // Generates random integer either 0 or 1;
    const data = {
      x: getRandomData(),
      y: getRandomData(),
      z: getRandomData(),
    };
    const response = await fetch("http://192.168.16.28:5000", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();
    console.log(result);
  } catch (err) {
    console.log(err);
  }
};

setInterval(fetchApi, 1000);
