const express = require('express');
const Drone = require('../models/Drone.model');
const router = express.Router();

// require the Drone model here

router.get('/', async (req, res, next) => {
  // Drone.find()
  // .then(drones => {

  // })
  const drones = await Drone.find();
  res.render('drones/list', { drones })
});

router.get('/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  res.render('drones/create-form')
});

router.get('/:id', async (req, res, next) => {
  // const id = req.params.id;
  const { id } = req.params;
  // Drone.findById(id)
  // .then(drone => {
  //   res.render('drones/detail', { drone })
  // })
  const drone = await Drone.findById(id);
  res.render('drones/detail', { drone })
});

router.post('/create', async (req, res, next) => {
  // Iteration #3: Add a new drone
  const newDrone = req.body; 
  await Drone.create(newDrone);
  res.redirect('/drones')
});

router.get('/:id/edit', async(req, res, next) => {
  const { id } = req.params;
  const drone = await Drone.findById(id)
  res.render('drones/update-form', { drone })
});

router.post('/:id/edit', async(req, res, next) => {
  const { id } = req.params;
  await Drone.findByIdAndUpdate(id, req.body)
  res.redirect("/drones");
});

router.post('/:id/delete', async(req, res, next) => {
  const { id } = req.params;
  await Drone.findByIdAndDelete(id)
  res.redirect('/drones')
  
});

module.exports = router;
