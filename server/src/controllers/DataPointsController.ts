import { Request, Response } from "express";
import Data from "../models/Data";

module DataPointsController {
    /** Get all datapoints from the database */
    export const getAll = async (req: Request, res: Response) => {
        const datapoints = await Data.findAll();
        return res.status(200).send(datapoints);
    }

    /** Get a datapoint from the database */
    export const get = async (req: Request, res: Response) => {
        const id = req.params.id;

        const datapoint = await Data.findOne({ where: { id: id } });
        if (!datapoint) return res.status(404).send("Datapoint not found.");
        return res.status(200).send(datapoint);
    }

    // get all datapoints associated with an interview id
    export const getInterviewDataPoints = async (req: Request, res: Response) => {
        const id = req.params.eventId;

        const datapoints = await Data.findAll({ where: { eventId: id } });
        if (!datapoints) return res.status(404).send("Data not found.");
        console.log(datapoints);
        return res.status(200).send(datapoints);
    }


    /** Create a new datapoint */
    export const create = async (req: Request, res: Response) => {
        const date = req.body.date; //8/17/22 - days passed since application = find application date
        try {
            const datapoint = await Data.create({
                date: req.body.date,    //07/14/20
                daysSinceApplication: req.body.daysSinceApplication,
                eventId: req.body.eventId,
                userId: req.body.userId
            });
            await datapoint.save();

            const data = datapoint.toJSON();
            return res.status(200).send(data);
        } catch (error) {
            return res.status(500).send(`An unexpected error has occured: ${error}`);
        }
    }

    /** Edit an existing datapoint */
    export const edit = async (req: Request, res: Response) => {
        const id = req.params.id;

        try {
            const datapoint = await Data.findOne({ where: { id: id } });
            if (!datapoint) return res.status(404).send("Datapoint not found.");

            await datapoint.update(req.body);
            await datapoint.save();

            const data = datapoint.toJSON();
            return res.status(200).send(data);
        } catch (error) {
            return res.status(500).send(`An unexpected error has occured: ${error}`);
        }
    }

    /** Delete a datapoint */
    export const remove = async (req: Request, res: Response) => {
        const id = req.params.id;

        try {
            const datapoint = await Data.findOne({ where: { id: id } });
            if (!datapoint) return res.status(404).send("Datapoint not found.");

            await datapoint.destroy();
            const data = datapoint.toJSON();
            return res.status(200).send(data);
        } catch (error) {
            return res.status(500).send(`An unexpected error has occured: ${error}`);
        }
    }
}

/**
 * Export controller functions
 */
export default DataPointsController;