module.exports = function (opts) {
    const param = opts.param || 'format';
    const router = opts.router || new Function();

    const REGEXP = /\.([\w]+)$/;

    return (req, res, next) => {
        const extMatch = req.url.match(REGEXP);
        if (extMatch) {
            const ext = extMatch[1];
            req.url = req.url.replace(REGEXP, '');
            req.query[param] = ext;
        }
        
        router(req, res, () => {
            if (req.param[param]) {
                req.url += req.param[param];
                delete req.query[param];
            }
            next();
        });
    };
};
