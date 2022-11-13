import { Router } from "express";
import RouteGroup from 'express-route-grouping';

/**
 * Controller imports
 */
import UsersController from "./controllers/UsersController";
import CompaniesController from "./controllers/CompaniesController";
import InterviewsController from "./controllers/InterviewsController";
import DataPointsController from "./controllers/DataPointsController";
import AuthController from "./controllers/AuthController";

/**
 * Create the application's router
 */
const root = new RouteGroup("/", Router());

/**
 * Route definitions
 */

/** User Routes */
root.group("/user", users => {
    // Standard CRUD User Routes
    users.get("/", async (req, res) => { await UsersController.getAll(req, res); });
    users.get("/:id", async (req, res) => { await UsersController.get(req, res); });
    users.post("/", async (req, res) => { await UsersController.create(req, res); });
    users.put("/:id", async (req, res) => { await UsersController.edit(req, res); });
    users.delete("/:id", async (req, res) => { await UsersController.remove(req, res); });
    
    // Auth Routes
    users.post("/login", async (req, res) => { await AuthController.login(req, res); });
})

/** Company Routes */
root.group("/company", companies => {
    // Standard CRUD Company Routes
    companies.get("/", async (req, res) => { await CompaniesController.getAll(req, res); });
    companies.get("/:id", async (req, res) => { await CompaniesController.get(req, res); });
    companies.post("/", async (req, res) => { await CompaniesController.create(req, res); });
    companies.put("/:id", async (req, res) => { await CompaniesController.edit(req, res); });
    companies.delete("/:id", async (req, res) => { await CompaniesController.remove(req, res); });
})

/** Interview Routes */
root.group("/interview", interviews => {
    // Standard CRUD Interview Routes
    interviews.get("/", async (req, res) => { await InterviewsController.getAll(req, res); });
    interviews.get("/:id", async (req, res) => { await InterviewsController.get(req, res); });
    interviews.post("/", async (req, res) => { await InterviewsController.create(req, res); });
    interviews.put("/:id", async (req, res) => { await InterviewsController.edit(req, res); });
    interviews.delete("/:id", async (req, res) => { await InterviewsController.remove(req, res); });
})

/** Data Routes */
root.group("/data", dataPoints => {
    // Standard CRUD Data Routes
    dataPoints.get("/", async (req, res) => { await DataPointsController.getAll(req, res); });
    dataPoints.get("/:id", async (req, res) => { await DataPointsController.get(req, res); });
    dataPoints.post("/", async (req, res) => { await DataPointsController.create(req, res); });
    dataPoints.put("/:id", async (req, res) => { await DataPointsController.edit(req, res); });
    dataPoints.delete("/:id", async (req, res) => { await DataPointsController.remove(req, res); });
})

/**
 * Router export
 */
export default root.export();