const http = require ("http");

const fs = require ("fs");

let PORT = 8080;

let server = http.createServer(handleReq);

server.listen (PORT, function () {
    console.log("server now listening on port " + PORT);
});

function handleReq (req, res) {

    let path = req.url;

    switch (path) {

        case "/":
            // res.end("hey hey, folks");
            return fs.readFile(__dirname + "/home1.html", function (err, data) {
                res.writeHead(200, {"Content-Type": "text-html"});
                res.end(data);
            });

        case "/this1":
            return fs.readFile(__dirname + "/this1.html", function (err, data) {
                res.writeHead(200, {"Content-Type": "text-html"});
                res.end(data);
            });
        
        case "/that1":
            return fs.readFile(__dirname + "/that1.html", function (err, data) {
                res.writeHead(200, {"Content-Type": "text-html"});
                res.end(data);
            });

        default:
            res.writeHead(404);
            res.end("404 error - no file found at this extension");
    };
};