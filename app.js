const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
app.use(cors());
app.use(express.static(path.join(__dirname, "/frontend/dist")));

app.get("/api/names", (req, res) => {
  res.send("Nguyễn Văn B");
});

app.get("/", (req, res) => {
  res.send("Nguyễn Văn B");
});

app.listen(3000, "0.0.0.0", () => {
  console.log("Server is runnint on port 3000");
});
