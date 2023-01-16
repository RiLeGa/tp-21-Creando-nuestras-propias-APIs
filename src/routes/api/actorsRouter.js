const express = require('express');
const { actorsList } = require('../../controllers/api/actorsController');
const router = express.Router();

router.get("/api/actors", actorsList)

module.exports = router;