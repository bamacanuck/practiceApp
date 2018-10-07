const http = require("http");

const PORT = 8086;

const server = http.createServer(handlerX);

server.listen(PORT, function () {
    console.log("huzzah - our server's now listening on port: " + PORT);
});

function handlerX (req, res) {
    let path = req.url;
    res.end("The handlerX function has been called, successfully. \n\nThis is the " + path + " path.");
}