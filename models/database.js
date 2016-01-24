const Sequelize = require('sequelize');

const env = process.env.NODE_ENV || 'development';
const config = require('../config/sequelize.json')[env];

module.exports = new Sequelize(
    config.database.database,
    config.database.user,
    config.database.password,
    config
);









