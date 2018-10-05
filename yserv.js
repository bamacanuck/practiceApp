let http = require('http');

const PORT = 8082;

let server = http.createServer(handleIt);

server.listen (PORT, function () {
    console.log("server listening on port diddy port port: " + PORT);
});

function handleIt (req, res) {
    path = req.url;
    res.end("hey hey hey hey" + "\n \n" + path);
};