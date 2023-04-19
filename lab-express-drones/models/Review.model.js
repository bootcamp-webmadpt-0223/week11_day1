const { Schema, model } = require('mongoose');

const reviewSchema = new Schema({
  text: String,
  rate: Number
})

const Review = model('Review', reviewSchema);
module.exports = Review;