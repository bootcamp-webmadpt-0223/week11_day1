const { model, Schema } = require('mongoose');

const droneSchema = new Schema({
  name: String,
  propellers: Number,
  maxSpeed: Number,
  reviews: [{ type: Schema.Types.ObjectId, ref: 'Review' }]
}, {
  timestamps: true
})

const Drone = model('Drone', droneSchema);
module.exports = Drone;