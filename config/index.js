/*  file: /config/index.js */
var something = process.env.SOME_INFO || 'someVal'; // env var of SOME_INFO, defaulting to 'someVal'

module.exports = {
	someInfo: something
};