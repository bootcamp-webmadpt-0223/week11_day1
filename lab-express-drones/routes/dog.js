const express = require('express');
const Dog = require('../models/Dog.model');
const router = express.Router();

// require the Drone model here

router.get('/', async (req, res, next) => {
  const dog = await Dog.find();
  res.render('dog/list', { dog })
});

router.get('/create', (req, res, next) => {
  res.render('dog/create-form')
});

router.get('/:id', async (req, res, next) => {
   const { id } = req.params;
   const dog = await Dog.findById(id);
  res.render('dog/detail', { dog })
});

router.post('/create', async (req, res, next) => {
  const newDog = req.body; 
  await Dog.create(newDog);
  res.redirect('/dog')
});

router.get('/:id/edit', async(req, res, next) => {
  const { id } = req.params;
  const dog = await Dog.findById(id)
  res.render('dog/update-form', { dog })
});

router.post('/:id/edit', async(req, res, next) => {
  const { id } = req.params;
  await Dog.findByIdAndUpdate(id, req.body)
  res.redirect("/drones");
});

router.post('/:id/delete', async(req, res, next) => {
  const { id } = req.params;
  await Dog.findByIdAndDelete(id)
  res.redirect('/dog')
  
});

module.exports = router;