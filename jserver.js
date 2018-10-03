// VITAL STEP ONE : load necessary (http) module/modules
let http = require ('http');

const PORT = 8080;

function handleRequest (req, res) {
    res.end("Here's your response. It's working. " + req.url);
}

// VITAL STEP TWO : declare the server
const server = http.createServer(handleRequest);

server.listen (PORT, function () {
    console.log("server now listening on port: " + PORT);
})