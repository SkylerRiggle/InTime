import { Request, Response } from "express";
import User from "../models/User";
import bcrypt from 'bcrypt';

module AuthController {
    /** Attempt to log a user into the site */
    export const login = async (req: Request, res: Response) => {
        const username = req.body.username;
        const email = req.body.email;

        var user: User | null;
        if (email) {
            user = await User.findOne({ where: { email: email } });
        } else {
            user = await User.findOne({ where: { username: username } });
        }

        if (!user) return res.status(404).send("Please enter a valid username or email.");
        return await bcrypt.compare(req.body.password, user.password);
    }
}

/**
 * Export controller functions
 */
export default AuthController;