const express = require('express');
const Drone = require('../models/Drone.model');
const router = express.Router();

// require the Drone model here

router.get('/', async (req, res, next) => {
  const drones = await Drone.find();
  res.render('drones/list', { drones });
});

router.get('/create', (req, res, next) => {
  res.render('drones/create-form')
});

router.get('/:id', async (req, res, next) => {
  const { id } = req.params;
  const drone = await Drone.findById(id);
  res.render('drones/detail', { drone });
});

router.post('/create', async (req, res, next) => {
  await Drone.create(req.body)
  res.redirect('/drones');
});

router.get('/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
});

router.post('/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
});

router.post('/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
});

module.exports = router;
