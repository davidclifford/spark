'use strict';
const router = require('express').Router();
const service = require('../services/movie-service.js');

function respondError(res, code, desc) {
  return res.status(code || 500).send({ error: [desc] });
}


router.get("/:id", async (req, res) => {
  try {
      let id = req.params.id;
      let data = await service.getMovie(id);
      res.status(200).json(data);
  } catch(err) {
      console.error(err);
      return respondError(res, 500, err);
  }
});


router.delete("/:id", async (req, res) => {
  try {
      let id = req.params.id;
      let data = await service.deleteMovie(id);
      res.status(200).json(data);
  } catch(err) {
      console.error(err);
      return respondError(res, 500, err);
  }
});

router.get("/", async (req, res) => {

  try {
      let data = await service.getMovies();
      res.status(200).json(data);
  } catch(err) {
      console.error(err);
      return respondError(res, 500, err);
  }
});

router.post("/", async (req, res) => {
  try {
      const body = req.body
      let data = await service.addMovie(body);
      res.status(200).json(data);
  } catch(err) {
      console.error(err);
      return respondError(res, 500, err);
  }
});

module.exports = router;