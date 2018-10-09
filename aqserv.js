const http =  require("http");

const fs = require("fs");

const PORT = 8080;

let server = http.createServer(handleReq);

server.listen(PORT, function () {
    console.log("server now listening on port - " + PORT);
});

function handleReq (req, res) {
    let path = req.url;

    switch (path) {

        case "/":
            return fs.readFile(__dirname + "/home1", function (err, data) {
                res.writeHead(200, { "Content-Type": "text-html" });
                res.end(data)
            });
        
        case "/abc":
            return fs.readFile(__dirname + "/this1", function (err, data) {
                res.writeHead(200, { "Content-Type": "text-html" });
                res.end(data);
            });

        case "/efg":
            return fs.readFile(__dirname + "/this1", function (err, data) {
                res.writeHead(200, { "Content-Type": "text-html" });
                res.end(data);
            });

        default:
            res.writeHead(404, { "Content-Type": "text-html" });
            res.end("404 - no such extension");
    }
};