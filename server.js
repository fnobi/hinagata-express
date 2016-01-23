const http = require('http');
const config = require('config');

const app = require(__dirname + '/app');


// create server
const server = http.createServer(app);

// listen
server.listen(app.get('port'), () => {
    console.log(`Express server listening on port ${app.get('port')}`);
});
