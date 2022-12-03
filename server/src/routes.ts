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
    // Auth Routes
    users.post("/login", async (req, res) => { return await AuthController.login(req, res); });
    
    // Standard CRUD User Routes
    users.get("/", async (req, res) => { return await UsersController.getAll(req, res); });
    users.get("/:id", async (req, res) => { return await UsersController.get(req, res); });
    users.post("/", async (req, res) => { return await UsersController.create(req, res); });
    users.put("/:id", async (req, res) => { return await UsersController.edit(req, res); });
    users.delete("/:id", async (req, res) => { return await UsersController.remove(req, res); });
});

/** Company Routes */
root.group("/company", companies => {
    // Standard CRUD Company Routes
    companies.get("/", async (req, res) => { return await CompaniesController.getAll(req, res); });
    companies.get("/:id", async (req, res) => { return await CompaniesController.get(req, res); });
    companies.post("/", async (req, res) => { return await CompaniesController.create(req, res); });
    companies.put("/:id", async (req, res) => { return await CompaniesController.edit(req, res); });
    companies.delete("/:id", async (req, res) => { return await CompaniesController.remove(req, res); });
});

/** Interview Routes */
root.group("/interview", interviews => {
    // Standard CRUD Interview Routes
    interviews.get("/", async (req, res) => { return await InterviewsController.getAll(req, res); });
    interviews.get("/:id", async (req, res) => { return await InterviewsController.get(req, res); });
    interviews.post("/", async (req, res) => { return await InterviewsController.create(req, res); });
    interviews.put("/:id", async (req, res) => { return await InterviewsController.edit(req, res); });
    interviews.delete("/:id", async (req, res) => { return await InterviewsController.remove(req, res); });
    //get average time from application to this interview stage for a company (param: eventId)
    // interviews.get("/averageTime/:id", async(req, res) => {return await InterviewsController.getAverageTime(req, res)})
});

/** Data Routes */
root.group("/data", dataPoints => {
    // Standard CRUD Data Routes
    dataPoints.get("/", async (req, res) => { return await DataPointsController.getAll(req, res); });
    dataPoints.get("/:id", async (req, res) => { return await DataPointsController.get(req, res); });
    dataPoints.post("/", async (req, res) => { return await DataPointsController.create(req, res); });
    dataPoints.put("/:id", async (req, res) => { return await DataPointsController.edit(req, res); });
    dataPoints.delete("/:id", async (req, res) => { return await DataPointsController.remove(req, res); });
    dataPoints.get("/event/:eventId", async (req, res) =>{return await DataPointsController.getInterviewDataPoints(req, res);})
});

/**
 * Router export
 */
export default root.export();