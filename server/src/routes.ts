import { Router } from "express";
import RouteGroup from 'express-route-grouping';

/**
 * Create the application's router
 */
const root = new RouteGroup("/", Router());

/**
 * Route definitions
 */

/** User Routes */
root.group("/user", users => {
    users.get("/", (_req, res) => {
        return res.status(200).send("USER");
    });
})

/** Company Routes */
root.group("/company", users => {
    users.get("/", (_req, res) => {
        return res.status(200).send("COMPANY");
    });
})

/** Interview Routes */
root.group("/interview", users => {
    users.get("/", (_req, res) => {
        return res.status(200).send("INTERVIEW");
    });
})

/** Data Routes */
root.group("/data", users => {
    users.get("/", (_req, res) => {
        return res.status(200).send("DATA");
    });
})

/**
 * Router export
 */
export default root.export();