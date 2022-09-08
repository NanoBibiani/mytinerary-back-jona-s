var express = require('express')
var router = express.Router()
const {create,read,update,deleteItinery,allRelation} = require("../controllers/itinerariesController")



router.post('/', create)
router.get('/:id',read)
router.patch('/id/update',update)
router.post('/id/delete',deleteItinery)
router.get('/',allRelation)

module.exports=router