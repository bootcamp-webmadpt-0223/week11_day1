const { model, Schema } = require('mongoose');

const droneSchema = new Schema({
  name: String,
  age: Number,
  breed: String,
}, {
  timestamps: true
})

const Dog = model('Dog', droneSchema);
module.exports = Dog;