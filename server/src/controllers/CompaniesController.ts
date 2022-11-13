import { Request, Response } from "express";

module CompaniesController {
    /** Get all companies from the database */
    export const getAll = async (req: Request, res: Response) => { }

    /** Get a company from the database */
    export const get = async (req: Request, res: Response) => { }

    /** Create a new company */
    export const create = async (req: Request, res: Response) => { }

    /** Edit an existing company */
    export const edit = async (req: Request, res: Response) => { }

    /** Delete a company */
    export const remove = async (req: Request, res: Response) => { }
}

/**
 * Export controller functions
 */
export default CompaniesController;