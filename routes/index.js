var express = require('express');
var router = express.Router();
const eventCities = require('./cities')
const eventComments = require('./comments')
const eventActivities = require('./activities')
const eventItineraries = require('./itineraries')
const eventUser = require('./users')
/* GET home page. */
// req = request, peticion del cliente
// res = response, mensaje que envia el servidor
router.get('/', function(req, res, next) {
  res.json()
});

router.use('/cities',eventCities)
router.use('/comment',eventComments)
router.use('/activities',eventActivities)
router.use('/itineraries',eventItineraries)
router.use('/auth',eventUser)
module.exports = router;
