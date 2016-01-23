const config = require('config');

const handleError = require(`${__dirname}/error`);

module.exports = {
    index: (req, res) => {
        res.render('index');
    }
};
