const mongoose = require("mongoose");
require("dotenv").config();
const drones = require("./drones");
const Drone = require("../models/Drone.model");
const Review = require("../models/Review.model");

mongoose
  .connect(process.env.MONGODB_URI)
  .then(async () => {
    console.log("Connected to DB!");
    await Drone.deleteMany();
    await Drone.insertMany(drones);
    await Review.insertMany([
      {
        text: "Excellent!",
        rate: 10
      },
      {
        text: "Brilliant",
        rate: 8
      },
      {
        text: "It sucks!",
        rate: 1
      },
      {
        text: "Excellent!",
        rate: 9.5
      }
    ])
  })
  .then(() => {
    mongoose.disconnect();
    console.log("Disconnected from DB!");
  });