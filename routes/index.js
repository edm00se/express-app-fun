var path = require('path')

// export a function that accepts `app` as a param
module.exports = function (app) {
	// set up the GET routes themselves
    app.get('/', function (req, res, next) {
        //requestor doesn't know this is a single-purpose API server
        res.sendFile(path.join(__dirname, '../public', 'readme.html'));
    });

    require('./beers')(app);
    require('./breweries')(app);
    require('./vineyards')(app);
    // add new lines for each other module, or use an array with a forEach
};