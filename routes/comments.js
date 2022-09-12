var express = require('express')
var router = express.Router()
const {create,read,update,deleteComment,allRelation} = require("../controllers/CommentController")



router.post('/', create)
router.get('/:id',read)
router.patch('/:id',update)
router.delete('/:id',deleteComment)
router.get('/',allRelation)




module.exports = router