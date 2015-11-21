module.exports = {
    port: 6666,
    mongodb: {
        url: 'mongodb://localhost/hinagata-backend'
    },
    uid_try_max_count: 5,
    cookie_secret: 'hinagata-backend',
    locals: {
        title: 'hinagata-backend',
        description: 'node.js service.',
        url: 'http://localhost:6666/'
    }
};
