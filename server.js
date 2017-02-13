var express = require("express"),
    app = express(),
    path = require("path"),
    httpProxy = require('http-proxy'),
    apiProxy = httpProxy.createProxyServer(),
    apiServer = 'http://localhost:8081';

const PORT = process.env.PORT || 8080;
/**
 * Starting the reserve proxy *
 */
const ENV = process.env.NODE_ENV;
let FOLDER;

if (ENV !== 'production') {
  FOLDER = '/app';
}
else {
  FOLDER = '/public';
}

app.use('/res', express.static(__dirname + `${FOLDER}/res`));
app.use('/', express.static(__dirname + `${FOLDER}/`));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + `${FOLDER}/index.html`));
});

app.all("/api/*", function(req, res) {
    // NOTE: Route the request to another server in another place
    apiProxy.web(req, res, {target: apiServer});
});

app.listen(PORT);

console.log(`Runing at port ${PORT} on ${FOLDER} folder and in ${ENV} enviroment`);
