/**
 * Create the database configuration object.
 */

dbConfig = {};

/**
 * Gather all database env variables (if available).
 */

dbConfig.name = process.env.DB ? process.env.DB : "intime";
dbConfig.user = process.env.USER ? process.env.USER : "postgres";
dbConfig.pass = process.env.PASSWORD;
dbConfig.host = process.env.HOST ? process.env.HOST : "localhost";
dbConfig.dialect = process.env.DIALECT ? process.env.DIALECT : "postgres";
dbConfig.operatorAliases = false;
dbConfig.pool = {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
};

/**
 * Export the database configuration
 */

module.exports = dbConfig;