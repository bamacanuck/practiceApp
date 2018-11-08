const http = require("http");

const PORT = 3000;

const server = http.createServer(theHandler);

server.listen (PORT, function () {
    console.log("server listening on PORT: " + PORT);
})

let theHandler = function (req, res) {
    // path = req.url;
    res.end("The handler has been invoked.");
}