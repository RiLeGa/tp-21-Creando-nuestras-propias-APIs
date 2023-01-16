const express = require('express');
const { moviesList, create } = require('../../controllers/api/moviesController');
const router = express.Router();

router.get("/api/movies", moviesList);

router.post('/api/movies/create', create); 

module.exports = router;