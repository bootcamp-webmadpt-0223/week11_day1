const mongoose = require("mongoose");
require("dotenv").config();
const consolas = require("./consolas");
const drones = require("./drones");
const Drone = require("../models/Drone.model");
const Consola = require("../models/Consola.model");

mongoose
  .connect(process.env.MONGODB_URI)
  .then(async () => {
    console.log("Connected to DB!");
    await Drone.deleteMany();
    await Drone.insertMany(drones);
    await Consola.deleteMany();
    await Consola.insertMany(consolas);
  })
  .then(() => {
    mongoose.disconnect();
    console.log("Disconnected from DB!");
  });
