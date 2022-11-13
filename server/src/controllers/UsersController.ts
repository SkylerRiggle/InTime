import { Request, Response } from "express";
import User from "../models/User";

module UsersController {
    /** Get all users from the database */
    export const getAll = async (req: Request, res: Response) => {
        const users = await User.findAll({
            attributes: {
                exclude: ["password"]
            }
        });
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
                password: req.body.password
            });
            newUser.save();
            return res.status(200).send("User successfully created.");
        } catch (error) {
            return res.status(500).send(`An unexpected error has occured: ${error}`);
        }
    }

    /** Edit an existing user */
    export const edit = async (req: Request, res: Response) => {
        const id = req.params.id;

        try {
            await User.update(req.body, { where: { id: id } });
            return res.status(200).send("User successfully updated.")
        } catch (error) {
            return res.status(500).send(`An unexpected error has occured: ${error}`);
        }
    }

    /** Delete a user */
    export const remove = async (req: Request, res: Response) => {
        const id = req.params.id;

        try {
            await User.destroy({ where: { id: id } });
            return res.status(200).send("User successfully deleted.")
        } catch (error) {
            return res.status(500).send(`An unexpected error has occured: ${error}`);
        }
    }
}

/**
 * Export controller functions
 */
export default UsersController;