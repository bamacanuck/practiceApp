// set module(s)

let http = require('http');

const PORT = 8081;

//declare server

let server = http.createServer(handleRequest);

// set listener

server.listen (PORT, function () {
    console.log("server now listening on port: " + PORT);
})

// set handler

function handleRequest (req, res) {
    path = req.url;
    res.end("howdy, partner" + path);
}