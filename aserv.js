let protocol = require('http');

const PORT = 8084;

let server = protocol.createServer(handler);

server.listen (PORT, function () {
    console.log("we have the server listening, on port: " + PORT);
});

function handler (req, res) {
    res.end("Here's your response, boyo.");
};