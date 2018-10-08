const http = require("http");
let fs = require("fs");

const PORT = 8086;

const server = http.createServer(handlerX);

server.listen(PORT, function () {
    console.log("huzzah - our server's now listening on port: " + PORT);
});

function handlerX (req, res) {
    let path = req.url;

    switch (path) {
    
        case "/":
        return fs.readFile(__dirname + "/index.html", function(err, data) {

            // We then respond to the client with the HTML page by specifically telling the browser that we are delivering
            // an html file.
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(data);
            });

        case "/r":
            res.end("huh... r");

        case "/this":
            return fs.readFile(__dirname + "/quick1.html", function(err, data) {

            // We then respond to the client with the HTML page by specifically telling the browser that we are delivering
            // an html file.
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(data);
            });

        case "/that":
            return fs.readFile(__dirname + "/quick2.html", function(err, data) {

            // We then respond to the client with the HTML page by specifically telling the browser that we are delivering
            // an html file.
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(data);
            });

        case "/callit":
            return callIt(path, req, res);
        
        default:
            res.end("NOPE... TRY SOMETHING ELSE");
        
    }
};

// try to get (below) external-doc html delivery working

function callIt (url, req, res) {
    fs.readFile(__dirname + "/index.html", function(err, data) {

        // We then respond to the client with the HTML page by specifically telling the browser that we are delivering
        // an html file.
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
    });
};