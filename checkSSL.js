const siteURL  = require('./app/models/').siteurls;
const sslData  = require('./app/models/').sslvalues;
var ssllabs = require("node-ssllabs");
// DOCS LINK: https://github.com/ssllabs/ssllabs-scan/blob/stable/ssllabs-api-docs.md

//var siteURL = "http://nowaccount.com"
console.log("CheckSSL has been called. Starting...")

var urllist = [];

//simplescan(siteURL);

//EXPORTED FUNCTION WITH CALLBACK ----------------------------------------------------------------------
module.exports = function(callback){

	siteURL.findAll({}).then(results => {
	        urllist = results;
	        var siteURLbase = urllist[0].URL;
	        console.log("The site to scan is: " + siteURLbase)
	        simplescan(siteURLbase);
	        callback();
			//fullscan(siteURL);
	    });

};	




//SCANS ----------------------------------------------------------------------

//SimpleScan - Only checks the very basics of the SSL cert
function simplescan(url, callback) {
	ssllabs.scan(url, function (err, host) {
	console.dir(host);
	console.log("THE SERVER IP IS: " + host.endpoints[0].ipAddress)
	console.log("THE SERVER NAME IS: " + host.endpoints[0].serverName)
	console.log("THE STATUS MESSAGE IS: " + host.endpoints[0].statusMessage)
	//console.log("THE CERT HOSTNAME IS: " + host.certHostnames[0])
	/*sslData.update({serverIP: host.endpoints[0].ipAddress, serverName: host.endpoints[0].serverName, 
		statusMessage: host.endpoints[0].statusMessage, certHostname: host.certHostnames[0]}, { where: {siteURL: url } }).then(callback);*/
	sslData.update({serverIP: host.endpoints[0].ipAddress, serverName: host.endpoints[0].serverName, statusMessage: host.endpoints[0].statusMessage }, { where: {siteURL: url } }, { upsert: true }).then();

	//callback();
	
});
}



//FullScan - Runs all API methods and returns as much data as possible
function fullscan(url) {

	ssllabs.scan({
		"host": siteURL,
		"fromCache": true,
		"maxAge": 24
	}, function (err, host) {
		console.dir(host);
	});

	ssllabs.info(function (err, info) {
		console.dir(info);
	});

	ssllabs.analyze({
		"host": siteURL,
		"publish": true,
		"startNew": true,
		"all": "done"
	}, function (err, host) {
		console.dir(host);
	});

	ssllabs.analyze({
		"host": siteURL,
		"fromCache": true,
		"maxAge": 72,
		"all": "on",
		"ignoreMismatch": true
	}, function (err, host) {
		console.dir(host);
	});

	ssllabs.getEndpointData({
		"host": siteURL,
		"s": "64.41.200.100",
		"fromCache": true
	}, function (err, endpointData) {
		console.dir(endpointData);
	});

	ssllabs.getStatusCodes(function (err, statusCodes) {
		console.dir(statusCodes);
	});

	/*
	ssllabs.getRootCertsRaw(function (err, rootCertsRaw) {
		console.dir(rootCertsRaw);
	});
	*/

//End function
};