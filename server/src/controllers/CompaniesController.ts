import { Request, Response } from "express";
import Company from "../models/Company";
import Interview from "../models/Interview";

module CompaniesController {
    /** Get all companies from the database */
    export const getAll = async (req: Request, res: Response) => {
        const companies = await Company.findAll();
        return res.status(200).send(companies);
    }

    /** Get a company from the database */
    export const get = async (req: Request, res: Response) => {
        const id = req.params.id;

        const company = await Company.findOne({ where: { id: id }, include: [{model: Interview}] });
        if (!company) return res.status(404).send("Company not found.");
        return res.status(200).send(company);
    }

    /** Create a new company */
    export const create = async (req: Request, res: Response) => {
        try {
            const newCompany = await Company.create({
                name: req.body.name,
                color: req.body.color
            });
            await newCompany.save();

            const data = newCompany.toJSON();
            return res.status(200).send(data);
        } catch (error) {
            return res.status(500).send(`An unexpected error has occured: ${error}`);
        }
    }

    /** Edit an existing company */
    export const edit = async (req: Request, res: Response) => {
        const id = req.params.id;

        try {
            const company = await Company.findOne({ where: { id: id } });
            if (!company) return res.status(404).send("Company not found.");

            await company.update(req.body);
            await company.save();

            const data = company.toJSON();
            return res.status(200).send(data);
        } catch (error) {
            return res.status(500).send(`An unexpected error has occured: ${error}`);
        }
    }

    /** Delete a company */
    export const remove = async (req: Request, res: Response) => {
        const id = req.params.id;

        try {
            const company = await Company.findOne({ where: { id: id } });
            if (!company) return res.status(404).send("Company not found.");

            await company.destroy();
            const data = company.toJSON();
            return res.status(200).send(data);
        } catch (error) {
            return res.status(500).send(`An unexpected error has occured: ${error}`);
        }
    }
}

/**
 * Export controller functions
 */
export default CompaniesController;