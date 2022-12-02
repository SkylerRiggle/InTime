import { Request, Response } from "express";
import User from "../models/User";
import bcrypt from 'bcrypt';

module AuthController {
    /** Attempt to log a user into the site */
    export const login = async (req: Request, res: Response) => {
        const email = req.body.email;
        const username = req.body.username;

        var user: User | null;
        if (email) user = await User.findOne({ where: { email: email } });
        else if (username) user = await User.findOne({ where: { username: username } });
        else return res.status(400).send("Please enter a valid username or email.");

        if (!user) return res.status(404).send("Unable to find user.");

        const password = req.body.password;
        if (password) {
            console.log(`pass from db: ${user.password} datatype: ${typeof user.password}`);
            console.log(`pass from user: ${password} datatype: ${typeof password}`);
            
            console.log(password == user.password);
             
            //bcrypt hashses the first password here & compares the encrypted value to the pass from the db
            const result = await bcrypt.compareSync(password, user.password);
            console.log(result);
            if (result) return res.status(200).send({
                user: user,
                result: result
            });
        
            return res.status(200).send({
                result: result,
                message: "invalid password"
            });
        }
        return res.status(400).send("Please enter a valid password.");
    }
}

/**
 * Export controller functions
 */
export default AuthController;