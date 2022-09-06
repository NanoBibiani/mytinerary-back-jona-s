var express = require('express')
var router = express.Router()
const {create,read,update,deleteActivity,all} = require("../controllers/ActivityController")



router.post('/', create)
router.get('/:id',read)
router.put('/:id',update)
router.delete('/:id',deleteActivity)
router.get('/',all)




module.exports = router