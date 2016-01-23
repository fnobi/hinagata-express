const User = require('../models').User;

module.exports = {
    index: (req, res) => {
        User.all().then((users) => {
            res.render('userIndex', {
                users: users
            });
        });
    },
    create: (req, res) => {
        const name = req.param('name');

        User.create({
            name: name
        }).then(() => {
            res.redirect('/');
        });
    }
};
