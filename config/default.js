module.exports = {
    port: 6666,
    uid_try_max_count: 5,
    cookie_secret: 'hinagata-express',
    locals: {
        title: 'hinagata-express',
        description: 'node.js service.',
        url: 'http://localhost:6666/'
    },
    database: {
        database: 'hinagataExpress_development',
        user: '',
        password: ''
    }
};
