import { Request, Response } from "express";

module InterviewsController {
    /** Get all interviews from the database */
    export const getAll = async (req: Request, res: Response) => { }

    /** Get a interview from the database */
    export const get = async (req: Request, res: Response) => { }

    /** Create a new interview */
    export const create = async (req: Request, res: Response) => { }

    /** Edit an existing interview */
    export const edit = async (req: Request, res: Response) => { }

    /** Delete a interview */
    export const remove = async (req: Request, res: Response) => { }
}

/**
 * Export controller functions
 */
export default InterviewsController;