import { Request, Response } from "express";
import Interview from "../models/Interview";

module InterviewsController {
    /** Get all interviews from the database */
    export const getAll = async (req: Request, res: Response) => {
        const interviews = await Interview.findAll();
        return res.status(200).send(interviews);
    }

    /** Get a interview from the database */
    export const get = async (req: Request, res: Response) => {
        const id = req.params.id;

        const interview = await Interview.findOne({ where: { id: id } });
        if (!interview) return res.status(404).send("Interview not found.");
        return res.status(200).send(interview);
    }

    /** Create a new interview */
    export const create = async (req: Request, res: Response) => {
        try {
            const interview = await Interview.create({
                eventName: req.body.eventName,
                rollingSum: 0,
                companyId: req.body.companyId,
            });
            await interview.save();

            const data = interview.toJSON();
            return res.status(200).send(data);
        } catch (error) {
            return res.status(500).send(`An unexpected error has occured: ${error}`);
        }
    }

    /** Edit an existing interview */
    export const edit = async (req: Request, res: Response) => {
        const id = req.params.id;

        try {
            const interview = await Interview.findOne({ where: { id: id } });
            if (!interview) return res.status(404).send("Interview not found.");

            await interview.update(req.body);
            await interview.save();

            const data = interview.toJSON();
            return res.status(200).send(data);
        } catch (error) {
            return res.status(500).send(`An unexpected error has occured: ${error}`);
        }
    }

    /** Delete a interview */
    export const remove = async (req: Request, res: Response) => {
        const id = req.params.id;

        try {
            const interview = await Interview.findOne({ where: { id: id } });
            if (!interview) return res.status(404).send("Interview not found.");

            await interview.destroy();
            const data = interview.toJSON();
            return res.status(200).send(data);
        } catch (error) {
            return res.status(500).send(`An unexpected error has occured: ${error}`);
        }
    }
}

/**
 * Export controller functions
 */
export default InterviewsController;