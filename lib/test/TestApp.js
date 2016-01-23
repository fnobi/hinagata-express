const http = require('http');

class TestApp {
    constructor (app) {
        this.app = app;
    }
    
    request (opts, callback) {
        opts = opts || {};
        callback = callback || new Function();

        const request = {
            method: opts.method || 'GET',
            url: opts.path || '/',
            query: opts.query || {},
            headers: opts.headers || {
                // TODO: mock headers
            },
            socket: {
                destroy: new Function()
            },
            session: {}
        };

        const stack = [], res = {};

        const serverResponse = new http.ServerResponse(request);

        serverResponse.writeHead = function (statusCode, headers) {
            res.statusCode = statusCode || res.statusCode;
            http.ServerResponse.prototype.writeHead.apply(this, arguments);
        };
        serverResponse.write = function (data) {
            http.ServerResponse.prototype.write.apply(this, arguments);
            stack.push(data);
        };
        serverResponse.end = function (data) {
            http.ServerResponse.prototype.end.apply(this, arguments);
            if (data) {
                // stack.push(data);
            }
            callback(null, res, stack.join('\n'));
        };

        this.app(request, serverResponse);
    }
}

module.exports = TestApp;
