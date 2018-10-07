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
            res.end("The handlerX function has been called, successfully. \n\nThis is the " + path + " path.");

        case "/r":
            res.end("huh... r");

        case "/this":
            res.end("no, 'this' is not cursed");
            // callIt(req, res);
        
        default:
            res.end("NOPE... TRY SOMETHING ELSE");
        
    }
};

function callIt (req, res) {
    fs.readFile(__dirname + "/index.html", function(err, data) {

        // We then respond to the client with the HTML page by specifically telling the browser that we are delivering
        // an html file.
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
    });
};