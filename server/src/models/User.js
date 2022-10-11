const { DataTypes } = require('sequelize');
var db = require('../../start/db');

const User = db.define('User', {
    id: DataTypes.INTEGER,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE
});