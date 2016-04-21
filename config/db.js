var srvNm = process.env.DOM_SRV || '';
var dbNm = process.env.DOM_DB || 'SomeApp.nsf';

module.exports = {
	db: {server:srvNm,database:dbNm}
};