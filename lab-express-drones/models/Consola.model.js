const { model, Schema } = require("mongoose");
const ConsolaModel = new Schema({
  name: String,
  memory: Number,
  marca: String,
});

const Consola = model("Consola", ConsolaModel);
module.exports = Consola;
