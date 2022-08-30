var express = require('express')
var router = express.Router()
const {create,read,update,deleteCity} = require("../controllers/CityController")



router.post('/', create)
router.get('/id',read)
router.get('/id/update',update)
router.post('/id/delete',deleteCity)


module.exports = router