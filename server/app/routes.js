/**
 * Module dependencies.
 */

var express = require('express');
var router = express.Router();

/**
 * Controller imports.
 */

const UserController = require('./controllers/UserController');
const CompanyController = require('./controllers/CompanyController');
const InterviewController = require('./controllers/InterviewController');
const DataPointController = require('./controllers/DataPointController');

/**
 * User routes.
 */

router.get('/api/users/:id', async (req, res) => await UserController.get(req, res));
router.get('/api/users', async (req, res) => await UserController.getAll(req, res));
router.post('/api/users/login', async (req, res) => await UserController.login(req, res));
router.post('/api/users/create', async (req, res) => await UserController.create(req, res));
router.post('/api/users/edit', async (req, res) => await UserController.edit(req, res));
router.post('/api/users/delete', async (req, res) => await UserController.delete(req, res));

/**
 * Company routes.
 */

 router.get('/api/companies/:id', async (req, res) => await CompanyController.get(req, res));
 router.get('/api/companies', async (req, res) => await CompanyController.getAll(req, res));
 router.post('/api/companies/create', async (req, res) => await CompanyController.create(req, res));
 router.post('/api/companies/edit', async (req, res) => await CompanyController.edit(req, res));
router.post('/api/companies/delete', async (req, res) => await CompanyController.delete(req, res));
 
/**
 * Interview routes.
 */

 router.get('/api/interviews/:id', async (req, res) => await InterviewController.get(req, res));
 router.get('/api/interviews', async (req, res) => await InterviewController.getAll(req, res));
 router.post('/api/interviews/create', async (req, res) => await InterviewController.create(req, res));
 router.post('/api/interviews/edit', async (req, res) => await InterviewController.edit(req, res));
router.post('/api/interviews/delete', async (req, res) => await InterviewController.delete(req, res));
 
/**
 * Data point routes.
 */

 router.get('/api/datapoints/:id', async (req, res) => await DataPointController.get(req, res));
 router.get('/api/datapoints', async (req, res) => await DataPointController.getAll(req, res));
 router.post('/api/datapoints/create', async (req, res) => await DataPointController.create(req, res));
 router.post('/api/datapoints/edit', async (req, res) => await DataPointController.edit(req, res));
router.post('/api/datapoints/delete', async (req, res) => await DataPointController.delete(req, res));
 
/**
 * Export application routes.
 */

router.use();

module.exports = router;
