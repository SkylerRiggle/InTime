var express = require('express');
var router = express.Router();

/* TEMPLATE ROUTE */
router.get('/', function(req, res, next) {
  res.status(200).send({Hello: "World"})
});

module.exports = router;
