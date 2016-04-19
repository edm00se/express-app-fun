//var util = require('../util');

module.exports = function (app) {

    app.get("/breweries", function(req, res, next){
        res.jsonp({
            "message": '/breweries'
        });
    });
    
};