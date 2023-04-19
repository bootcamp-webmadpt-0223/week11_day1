const mongoose = require("mongoose");
require("dotenv").config();
const dog = require("./dog");
const Dog = require("../models/Dog.model");

mongoose
  .connect(process.env.MONGODB_URI)
  .then(async () => {
    console.log("Connected to DB!");
    await Dog.deleteMany();
    await Dog.insertMany(dog);
  })
  .then(() => {
    mongoose.disconnect();
    console.log("Disconnected from DB!");
  });