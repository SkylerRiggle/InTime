import { Router } from "express";
import RouteGroup from 'express-route-grouping';

/**
 * Create the application's router
 */
const root = new RouteGroup("/", Router());

/**
 * Route definitions
 */
root.group("/user", users => {
    users.get("/", (_req, res) => {
        return res.status(200).send("HELLO EVERYBODY!!!");
    });
})

/**
 * Router export
 */
export default root.export();