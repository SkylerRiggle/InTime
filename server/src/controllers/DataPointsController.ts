import { Request, Response } from "express";

module DataPointsController {
    /** Get all datapoints from the database */
    export const getAll = async (req: Request, res: Response) => { }

    /** Get a datapoint from the database */
    export const get = async (req: Request, res: Response) => { }

    /** Create a new datapoint */
    export const create = async (req: Request, res: Response) => { }

    /** Edit an existing datapoint */
    export const edit = async (req: Request, res: Response) => { }

    /** Delete a datapoint */
    export const remove = async (req: Request, res: Response) => { }
}

/**
 * Export controller functions
 */
export default DataPointsController;