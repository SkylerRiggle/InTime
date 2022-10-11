const Sequelize = require('sequelize');
const config = require('./dbConfig');

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

const db = {};

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;