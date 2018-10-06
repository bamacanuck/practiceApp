let http = require("http");

const PORT = 8085;

let server = http.createServer(handleRequest);

server.listen(PORT, function () {
    console.log("server listening - port " + PORT);
});

function handleRequest (req, res) {
    let path = req.url;
    res.end("this is the " + path + " path, for routing purposes.");
};