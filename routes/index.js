const config = require('config');

const User = require('../models').User;
const handleError = require(`./error`);

module.exports = {
    index: (req, res) => {
        res.render('index');
    },
    user: require('./user')
};
