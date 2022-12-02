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
// 
const db = new Sequelize('InTimeDB', 'carb0006', 'InTime77', {
  host: 'carb0006-sql-server.database.windows.net',
  dialect: 'mssql',
  dialectOptions: {
      encrypt: true
    }
  // port: 1433
});

db
        .authenticate()
        .then(() => {
            console.log('Connection has been established successfully.');
        })
        .catch((err) => {
            console.log('Unable to connect to the database:', err);
        });

/**
 * Append model definitions to database
 */
db.addModels([User, Company, Interview, Data]);

export default db;