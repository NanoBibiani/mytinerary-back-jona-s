var express = require('express')
var router = express.Router()



router.post('/', create)
router.get('/:id',read)
router.put('/:id',update)
router.delete('/:id',deleteCity)
router.get('/',all)




module.exports = router