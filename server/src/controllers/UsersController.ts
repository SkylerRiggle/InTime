import { Request, Response } from "express";
import User from "../models/User";
import bcrypt from 'bcrypt';

module UsersController {
    // Constant User Variables
    const saltRounds = 10;

    /** Get all users from the database */
    export const getAll = async (req: Request, res: Response) => {
        const users = await User.findAll({ attributes: { exclude: ["password"] } });
        return res.status(200).send(users);
    }

    /** Get a user from the database */
    export const get = async (req: Request, res: Response) => {
        const id = req.params.id;

        const user = await User.findOne({ where: { id: id }, attributes: { exclude: ["password"] } });
        if (!user) return res.status(404).send("User not found.");
        return res.status(200).send(user);
    }

    /** Create a new user */
    export const create = async (req: Request, res: Response) => {
        try {
            const newUser = await User.create({
                username: req.body.username,
                email: req.body.email,
                password: bcrypt.hashSync(req.body.password, saltRounds)
            });
            await newUser.save();

            const data = newUser.toJSON();
            delete data.password;
            return res.status(200).send(data);
        } catch (error) {
            return res.status(500).send(`An unexpected error has occured: ${error}`);
        }
    }

    /** Edit an existing user */
    export const edit = async (req: Request, res: Response) => {
        const id = req.params.id;

        try {
            const user = await User.findOne({ where: { id: id } });
            if (!user) return res.status(404).send("User not found.");

            if (req.body.password) req.body.password = bcrypt.hashSync(req.body.password, saltRounds);
            await user.update(req.body);
            await user.save();

            const data = user.toJSON();
            delete data.password;
            return res.status(200).send(data);
        } catch (error) {
            return res.status(500).send(`An unexpected error has occured: ${error}`);
        }
    }

    /** Delete a user */
    export const remove = async (req: Request, res: Response) => {
        const id = req.params.id;

        try {
            const user = await User.findOne({ where: { id: id } });
            if (!user) return res.status(404).send("User not found.");

            await user.destroy();
            const data = user.toJSON();
            delete data.password;
            return res.status(200).send(data);
        } catch (error) {
            return res.status(500).send(`An unexpected error has occured: ${error}`);
        }
    }
}

/**
 * Export controller functions
 */
export default UsersController;