import dbConfig from "./dbConfig";
import { Sequelize } from "sequelize-typescript";

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
db.addModels(["../models"]);

export default db;