var config = require('config');

var handleError = require(__dirname + '/error');

module.exports = {
    index: function (req, res) {
        res.render('index');
    }
};
