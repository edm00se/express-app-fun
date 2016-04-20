var path = require('path');

var jarFilePath = path.join(__dirname, '../lib', 'jt400.jar');
var driverNm = 'com.ibm.as400.access.AS400JDBCDriver';
var addr = process.env.URL || 'as400://ibmi.fullyqualifiedname.com';
var uName = process.env.ISERIES_USER_NAME || 'user';
var pWord = process.env.ISERIES_PASSWORD || 'secret';

// a config object w/ specifics for the connection
module.exports = {
	libpath: jarFilePath,
	drivername: driverNm,
	url: addr,
	user: uName,
	password: pWord,
};