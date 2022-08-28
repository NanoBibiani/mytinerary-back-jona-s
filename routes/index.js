var express = require('express');
var router = express.Router();

/* GET home page. */
// req = request, peticion del cliente
// res = response, mensaje que envia el servidor
router.get('/', function(req, res, next) {
  res.json()
});

module.exports = router;
