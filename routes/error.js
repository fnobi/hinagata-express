module.exports = (err, req, res) => {
    const format = req.param('format');

    res.status(res.statusCode || 500);

    const locals = {
        statusCode: res.statusCode,
        error: err || null
    };

    if (format == 'json') {
        res.json(locals);
    } else {
        res.render('error', locals);
    }
};
