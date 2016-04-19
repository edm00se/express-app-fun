//var util = require('../util');

module.exports = function (app) {

    app.get("/vineyards", function(req, res, next){
        res.jsonp({
            "message": '/vineyards'
        });
    });
    
};