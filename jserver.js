// VITAL STEP ONE : load necessary (http) module/modules
let http = require ('http');

const PORT = 8080;

// VITAL STEP FOUR (in part): set the handler/handlers
function handleRequest (req, res) {
    res.end("Here's your response. It's working. " + req.url);
}

// VITAL STEP TWO : declare the server
// VITAL STEP FOUR (in part): set the handler/handlers
const server = http.createServer(handleRequest);

// VITAL STEP THREE: set the listener
server.listen (PORT, function () {
    console.log("server now listening on port: " + PORT);
})