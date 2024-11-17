const express = require("express"); // reference that folder contains

const app = express();

app.use("/test", (req, res) => {
  res.send("Welcome to j!");
});
app.use("/test1", (req, res) => {
  res.send("Welcome to sesssssssssssssssssssssssssssssrver!sdfasdf");
});
app.listen(3000, () => {
  console.log("Server is successfully listening on port 3000....");
});
