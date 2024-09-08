// const express = require("express");
// const app = express();
// const cors = require("cors");

// app.use(cors());

// app.use(express.json());

// app.use("/", require("./router"));

// let scamData = false;

// app.post("/test", (req, res) => {
//   const scam = req.body;
//   console.log(scam);
//   scamData = scam;
//   res.send("success");
// });

// app.get("/test", (req, res) => {
//   res.send(scamData);
//   scamData = false;
// });

// app.listen(5000, () => {
//   console.log("Server running");
// });
const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

// app.use("/", require("./router"));
let data;
app.post("/", (req, res) => {
  try {
    data = req.body;
    console.log(data);

    // Check if the received data is valid JSON
    if (!isValidJSON(data)) {
      throw new Error("Invalid JSON data");
    }

    res.json(data);
  } catch (error) {
    console.error("Error parsing JSON:", error.message);
    res.status(400).send("Error: " + error.message);
  }
});

app.get("/", (req, res) => {
  res.json(data);
});

app.listen(5000, "192.168.16.28", () => {
  console.log("Server running");
});

function isValidJSON(data) {
  try {
    JSON.parse(JSON.stringify(data));
    return true;
  } catch (error) {
    return false;
  }
}
