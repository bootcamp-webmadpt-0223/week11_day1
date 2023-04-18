const express = require("express");
const Consola = require("../models/Consola.model");
const router = express.Router();

router.get("/", async (req, res, next) => {
  const consolas = await Consola.find();
  res.render("consolas/list", { consolas });
});

router.get("/create", (req, res) => {
  res.render("consolas/create");
});

router.post("/create", async (req, res, next) => {
  const newConsola = req.body;
  await Consola.create(newConsola);
  res.redirect("/consolas");
});

router.get("/:id", async (req, res, next) => {
  const { id } = req.params;
  const consola = await Consola.findById(id);
  res.render("consolas/detail", { consola });
});

router.get("/:id/update", async (req, res) => {
  const { id } = req.params;
  const consola = await Consola.findById(id);
  res.render("consolas/update", { consola });
});

router.post("/:id/update", async (req, res, next) => {
  const { id } = req.params;
  await Consola.findByIdAndUpdate(id, req.body);
  res.redirect("/consolas");
});

router.post("/:id/delete", async (req, res) => {
  const { id } = req.params;
  await Consola.findByIdAndDelete(id);
  res.redirect("/consolas");
});

module.exports = router;
