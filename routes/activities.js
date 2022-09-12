var express = require('express')
var router = express.Router()
const {create,read,update,deleteActivity, allRelation} = require("../controllers/ActivityController")



router.post('/', create)
router.get('/:id',read)
router.put('/:id',update)
router.delete('/:id',deleteActivity)
router.get('/',allRelation)




module.exports = router