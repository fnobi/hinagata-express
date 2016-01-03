var config = require('config');
var Sequelize = require('sequelize');

module.exports = new Sequelize(
    config.database.database,
    config.database.user,
    config.database.password,
    {
        dialect: 'postgres',
        pool: {
            max: 5,
            min: 0,
            idle: 10000
        }
    }
);









