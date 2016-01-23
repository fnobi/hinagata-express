const express = require('express');
const path = require('path');
const config = require('config');

const extParser = require(`${__dirname}/lib/ext-parser`);
const routes = require(`${__dirname}/routes`);
const models = require(`${__dirname}/models`);

const app = express();


// =======================================================
//  all environments setting
// =======================================================

app.set('port', process.env.PORT || config.port);
app.set('view engine', 'jade');
app.use(express.bodyParser());
app.use(express.cookieParser(config.cookie_secret));
app.use(express.methodOverride());
app.use(express.static(`${__dirname}/public`));
app.use(extParser({
    param: 'format',
    router: app.router
}));

// view locals setting
app.locals = config.locals;
app.locals.pretty = true; // jade output style


// =======================================================
//  development only setting
// =======================================================

if ('development' == app.get('env')) {
    app.use(express.favicon());
    app.use(express.logger('dev'));
    app.use(express.errorHandler());
}


// =======================================================
//  init services
// =======================================================



// =======================================================
//  routing
// =======================================================

app.get('/', routes.index);
app.get('/user', routes.user.index);
app.post('/user', routes.user.create);


module.exports = app;
