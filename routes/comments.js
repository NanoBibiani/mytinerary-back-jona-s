var express = require('express')
var router = express.Router()
const {create,read,update,deleteComment,all} = require("../controllers/CommentController")



router.post('/', create)
router.get('/:id',read)
router.put('/:id',update)
router.delete('/:id',deleteComment)
router.get('/',all)




module.exports = router