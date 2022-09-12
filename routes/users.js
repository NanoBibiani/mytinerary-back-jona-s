var express = require('express')
var router = express.Router()
//const {create,read,update,deleteUser,all} = require("../controllers/UserController")
const { signUp } = require('../controllers/UserControllers')



//router.post('/auth', create)
router.post('/signup', signUp)
//router.get('/:id',read)
//router.patch('/id/update',update)
//router.post('/id/delete',deleteUser)
//router.get('/',all)
module.exports=router
