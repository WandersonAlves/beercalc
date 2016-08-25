var express = require("express"),
    app = express(),
    path = require("path");

const PORT = process.env.PORT || 8080;

app.use('/res', express.static(__dirname + '/public/res'));
app.use('/', express.static(__dirname + '/public/'));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/public/index.html'));
    //__dirname : It will resolve to your project folder.
});

app.listen(PORT);

console.log("Running at Port", PORT);
