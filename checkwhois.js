const siteURL  = require('./app/models/').siteurls;
var whois = require('node-whois');

//var siteURL = "saaats.com"
console.log("CheckWHOIS has been called. Starting...")

var urllist = [];

test();

//EXPORTED FUNCTION WITH CALLBACK ----------------------------------------------------------------------
//module.exports = function(callback){
function test() {
	siteURL.findAll({}).then(results => {
	        urllist = results;
	        var siteURLbase = urllist[0].URL;
	        console.log("The site to get WHOIS for is: " + siteURLbase)
	        whoislookup(siteURLbase);
	        callback('done');
			
	    });

};	

//FUCNTION TO RUN WHOIS
function whoislookup(url, callback) {
	whois.lookup(url, function(err, data) {
    console.log(data);
    callback('done');
	});
};
