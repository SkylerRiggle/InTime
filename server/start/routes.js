var express = require('express');
var router = express.Router();

/** CONTROLLER IMPORTS */
const UsersController = require('../src/controllers/UsersController');

/* TEMPLATE ROUTE */
router.get('/', async function (req, res, next) {
  const data = await UsersController.createUser("", "");
  res.status(200).send({Example: data})
});

module.exports = router;
