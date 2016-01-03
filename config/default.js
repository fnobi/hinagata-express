module.exports = {
    port: 7000,
    uid_try_max_count: 5,
    cookie_secret: 'hinagata-express',
    locals: {
        title: 'hinagata-express',
        description: 'node.js service.',
        url: 'http://localhost:7000/'
    },
    database: {
        database: 'hinagataExpress_development',
        user: '',
        password: ''
    }
};
