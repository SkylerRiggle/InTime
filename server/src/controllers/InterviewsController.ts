import { Request, Response } from "express";
import { Model, Sequelize } from "sequelize-typescript";
import Company from "../models/Company";
import Data from "../models/Data";
import Interview from "../models/Interview";

module InterviewsController {

    // export const getAverageTime = async(req: Request, res: Response) => {
    //     const interviewId = req.params.companyId;
    //     console.log(interviewId);
        
    //     const averageTime = await Interview.findOne({
    //         where: {id: interviewId},
    //         include: [
    //             {
    //               model: Data.daysSinceApplication,
    //               as: 'data',
    //               attributes: [],
    //             },
    //         ],
    //         attributes: [
    //             [Sequelize.fn('AVG', Sequelize.col('data.daysSinceApplication')),'avg']
    //         ],
            
    //         group:['interviewId']

    //     });
    //     res.send(averageTime);
    // }
    /** Get all interviews from the database */
    export const getAll = async (req: Request, res: Response) => {
        const interviews = await Interview.findAll();
        return res.status(200).send(interviews);
    }

    /** Get a interview from the database */
    export const get = async (req: Request, res: Response) => {
        const id = req.params.id;

        const interview = await Interview.findOne({ where: { id: id }, include: [{model: Data}] });
        if (!interview) return res.status(404).send("Interview not found.");
        const data = interview.toJSON();

        const company = await Company.findOne({ where: { id: interview.companyId } });
        if (company) data.companyName = company.name
        return res.status(200).send(data);
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