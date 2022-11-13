import { Request, Response } from "express";

module AuthController {
    /** Attempt to log a user into the site */
    export const login = async (req: Request, res: Response) => { }
}

/**
 * Export controller functions
 */
export default AuthController;