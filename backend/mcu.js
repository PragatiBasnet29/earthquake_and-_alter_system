const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

app.post("/", (req, res) => {
  try {
    const scam = req.body;
    console.log(scam);

    // Check if the received data is valid JSON
    if (!isValidJSON(scam)) {
      throw new Error("Invalid JSON data");
    }

    res.send("success");
  } catch (error) {
    console.error("Error parsing JSON:", error.message);
    res.status(400).send("Error: " + error.message);
  }
});

app.get("/", (req, res) => {
  res.send("success");
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
