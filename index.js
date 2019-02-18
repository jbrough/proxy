var http = require('http'),
    httpProxy = require('http-proxy');
//
// Create your proxy server and set the target in the options.
//
httpProxy.createProxyServer({target: process.env.TARGET_URL}).listen(process.env.PORT); // See (†)
