var Sequelize = require('Sequelize');
var database = require(`${__dirname}/database`);

module.exports = database.define('user', {
    name: {
        type: Sequelize.STRING
    }
});
