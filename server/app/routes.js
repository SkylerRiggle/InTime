var express = require('express');
var router = express.Router();

/* TEMPLATE ROUTE */
router.get('/', async function (req, res, next) {
  res.status(200).send({Example: "data"})
});

module.exports = router;
