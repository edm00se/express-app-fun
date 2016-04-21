var domino = require('domino-nsf'),
  config = require('../config/db.js'),
  db = config.db;

// initialize Session
function initSession(cb){
  domino.initSession();
  cb();
};

// terminate Session
function closeSession(){
  domino.termSession();
  console.log('Domino session terminated');
};

// get Document contents by UNID
function getDocumentByUnid(un,cb){
  initSession(function(){
    domino.getDocumentAsync(db,un,function(err,doc){
      if(!err){
        cb(null,doc);
      }else{
        cb(err);
        console.log('Error: '+err);
      }
      closeSession();
    });
  });
};

// get View contents by View name
function getViewContents(vw,cb){
  var vwOb = {view:vw,category:""};
  initSession(function(){
    domino.getViewAsync(db,vwOb,function(err,view) {
      if(!err){
        cb(null,view);
      }else{
        cb(err);
        console.log('Error: '+err);
      }
      closeSession();
    });
  });
};

// exporting what we care about in a structured format
module.exports = {
  getView: getViewContents,
  getDoc: getDocumentByUnid
};
