var util = require('../util');

module.exports = function (app) {

    app.get("/breweries", function(req, res, next){
    	var resp = {};
    	util.query("SELECT * FROM breweries", function(err, data){
    		if(err){
    			resp = {
    				"error": true,
    				"message": err
    			};
    		} else {
    			resp = {
    				"error": false,
    				"data": data
    			};
    		}
    	});
        res.jsonp(resp);
    });
    
};