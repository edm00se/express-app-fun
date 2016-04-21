var jdbc = new ( require('jdbc-pro') );
var dbConf = require('../config/db.js');

// initialize the connection
function initCon(cb){
  jdbc.initialize(dbConf, function(err, res) {
    if (err) {
      console.log(err);
    } else {
      console.log("Connection initialized successfully!");
      cb(null);
    }
  });
};

// close the connection
function closeCon(err) {
  if(err) {
    console.log(err);
  } else {
    console.log("Connection closed successfully!");
  }
};

// wrapping the func, passing results or error via callback
function getQueryResults(sql,cb){
  initCon(function(err){
    if(err){
      console.log(err);
    } else {
      jdbc.open(function(err, conn) {
        if (conn) {
          // perform passed SQL statement, SELECT statement
          jdbc.executeQuery(sql, function(err, results) {
            if(err){
              console.log(err);
              cb(err,null);
            } else {
              cb(null,results);
            }
            closeCon();
          });
        }
      });
    }
  });
};

// separately wrapped func for UPDATE or INSERT
function getUpdateResults(sql,cb){
  initCon(function(err){
    jdbc.open(function(err, conn) {
      if (conn) {
        // perform passed SQL statement, INSERT or UPDATE
        jdbc.executeUpdate(sql, function(err, results) {
          if(err){
            console.log(err);
            cb(err,null);
          } else {
            cb(null,results);
          }
          closeCon();
        });
      }
    });
  });
};

// exporting what we care about in a structured format
module.exports = {
  query: getQueryResults,
  update: getUpdateResults
};
