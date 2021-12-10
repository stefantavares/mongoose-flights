var express = require('express');
var router = express.Router();
const flightsCtrl = require('../controllers/flights');

// GET "/flights/new" - Create new flight
router.get('/new', flightsCtrl.new);

// POST "/flights" - 
router.post('/', flightsCtrl.create);

// GET "/flights" - Index Route
router.get('/', flightsCtrl.index);




module.exports = router;
