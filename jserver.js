let http = require ('http');

const PORT = 8080;

function handleRequest (req, res) {
    res.end("It's working. " + req.url);
}

const server = http.createServer(handleRequest);

server.listen (PORT, function () {
    console.log("server now listening on port: " + PORT);
})