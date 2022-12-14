var express = require('express')
var router = express.Router()
const {create,read,update,deleteCity,all} = require("../controllers/CityController")



router.post('/', create)
router.get('/:id',read)
router.patch('/id/update',update)
router.post('/id/delete',deleteCity)
router.get('/',all)

module.exports=router