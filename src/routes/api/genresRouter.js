const express = require('express');
const { genresList, detail } = require('../../controllers/api/genresController');
const router = express.Router();

router.get("/api/genres", genresList)
router.get("/api/genres/detail/:id", detail)

module.exports = router;