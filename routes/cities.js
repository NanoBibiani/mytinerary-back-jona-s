var express = require('express')
var router = express.Router()
const {create,read,update,deleteCity,all} = require("../controllers/CityController")
const itinerariesController = require('../controllers/itinerariesController')


router.post('/', create)
router.get('/id',read)
router.get('/id/update',update)
router.post('/id/delete',deleteCity)
router.post('/',all)



const {createItinerary, deleteItinerary, modifyItinerary,itineraryOneCity} = itinerariesController

router.get('/allitineraries',createItinerary)
router.delete('/allitineraries/:id',deleteItinerary)
router.put('/allitineraries/:id',modifyItinerary)
router.get('/allitineraries/:id',itineraryOneCity)



module.exports = router