import dbConfig from "./dbConfig";
import { Sequelize } from "sequelize-typescript";

/**
 * Model imports
 */
import User from "../models/User";
import Company from "../models/Company";
import Interview from "../models/Interview";
import Data from "../models/Data";

/**
 * Create the database instance
 */
const db = new Sequelize({
    dialect: 'postgres',
    database: dbConfig.name,
    host: dbConfig.host,
    username: dbConfig.user,
    password: dbConfig.pass,
    pool: dbConfig.pool,
});

/**
 * Append model definitions to database
 */
db.addModels([User, Company, Interview, Data]);

export default db;