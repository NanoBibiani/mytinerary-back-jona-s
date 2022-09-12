var express = require('express')
var router = express.Router()
const {create,read,update,deleteUser,all} = require("../controllers/UserController")



router.post('/auth', create)
router.get('/:id',read)
router.patch('/id/update',update)
router.post('/id/delete',deleteUser)
router.get('/',all)
module.exports=router
