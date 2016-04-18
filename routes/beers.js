//var util = require('../util');

module.exports = function (app) {

    app.get("/beers", function(req, res, next){
        res.jsonp({
            "message": '/beers'
        });
    });
    
};