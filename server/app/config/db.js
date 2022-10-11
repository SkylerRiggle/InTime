/**
 * Module dependencies.
 */

const Sequelize = require('sequelize');
const config = require('./dbConfig');

/**
 * Initialize the database.
 */

const sequelize = new Sequelize(config.name, config.user, config.pass, {
    host: config.host,
    dialect: config.dialect,
    operatorAliases: config.operatorAliases,
    pool: {
        max: config.pool.max,
        min: config.pool.min,
        acquire: config.pool.acquire,
        idle: config.pool.idle,
    },
});

/**
 * Store relevant database information.
 */

const db = {};
db.sequelize = sequelize;
db.Sequelize = Sequelize;

// Model Recognition.
db.User = require('../models/User')(sequelize, Sequelize);
db.Company = require('../models/Company')(sequelize, Sequelize);
db.Interview = require('../models/Interview')(sequelize, Sequelize);
db.DataPoint = require('../models/DataPoint')(sequelize, Sequelize);

/**
 * Handle model foreign keys.
 */
//TODO

/**
 * Export the database for the rest of the app to use.
 */

module.exports = db;