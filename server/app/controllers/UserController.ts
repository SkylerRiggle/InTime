import { Request, Response } from 'express';
const db = require('../config/db');
const User = db.User;

/** Get a specific user from the database */
exports.get = async (req: Request, res: Response) => { 
    const id = req.params.id
}

/** Get all users from the database */
exports.getAll = async (req: Request, res: Response) => { }

/** Handle the login sequence for a user */
exports.login = async (req: Request, res: Response) => { }

/** Create a new user */
exports.create = async (req: Request, res: Response) => { }

/** Edit an existing user */
exports.edit = async (req: Request, res: Response) => { }

/** Delete a user from the database */
exports.delete = async (req: Request, res: Response) => { }