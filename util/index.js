var config = require('../config'),
	something = config.someInfo;

function doSomethingWithDb(param){
  console.log('param: '+param+', something from config: '+something);
};

module.exports = {
  getData: doSomethingWithDb
};