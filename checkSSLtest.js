//const siteURL  = require('./app/models/').siteurls;
const sslData  = require('./app/models/').sslvalues;
var ssllabs = require("node-ssllabs");
// DOCS LINK: https://github.com/ssllabs/ssllabs-scan/blob/stable/ssllabs-api-docs.md

var siteURL = "http://saaats.com"
console.log("CheckSSL has been called. Starting...")

//var urllist = [];

simplescan(siteURL);


//SimpleScan - Only checks the very basics of the SSL cert
function simplescan(url, callback) {
	ssllabs.scan(url, function (err, host) {
	console.dir(host);
	console.log("THE SERVER IP IS: " + host.endpoints[0].ipAddress)
	console.log("THE SERVER NAME IS: " + host.endpoints[0].serverName)
	console.log("THE STATUS MESSAGE IS: " + host.endpoints[0].statusMessage)
	console.log("THE CERT HOSTNAME IS: " + host.certHostnames[0])
	/*sslData.update({serverIP: host.endpoints[0].ipAddress, serverName: host.endpoints[0].serverName, 
		statusMessage: host.endpoints[0].statusMessage, certHostname: host.certHostnames[0]}, { where: {siteURL: url } }).then(callback);*/
	sslData.update({serverIP: host.endpoints[0].ipAddress, serverName: host.endpoints[0].serverName, statusMessage: host.endpoints[0].statusMessage, certHostname: host.certHostnames[0]}, { where: {siteURL: url } }, { upsert: true }).then();

	//callback();
	
});
}




