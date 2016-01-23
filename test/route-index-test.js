const assert = require('chai').assert;
const TestApp = require(`${__dirname}/../lib/test/TestApp`);

describe('Index routing', () => {
    const app = new TestApp(require(`${__dirname}/../app`));

    it('to /', (done) => {
        app.request({
            path: '/'
        }, (err, res, body) => {
            assert.equal(res.statusCode, '200');
            assert(body);
            done();
        });
    });
});
