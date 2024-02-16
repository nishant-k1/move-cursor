import express from "express";
import robot from "robotjs";

const app = express();
const port = 9999;

app.get("/", (req, res) => {
  // Get the screen size
  const screenSize = robot.getScreenSize();

  // Define the movement range
  const xRange = screenSize.width;
  const yRange = screenSize.height;

  // Move the mouse cursor randomly every 5 seconds
  setInterval(() => {
    const randomX = Math.floor(Math.random() * xRange);
    const randomY = Math.floor(Math.random() * yRange);
    robot.moveMouse(randomX, randomY);
  }, 500000);

  res.send("Break Protocol Initiated!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
