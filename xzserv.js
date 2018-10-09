const http = require("http");

const fs = require("fs");

const PORT = 8090;

let server = http.createServer(handleReq);

server.listen(PORT, function () {
    console.log("server now listening - port " + PORT);
});

function handleReq (req, res) {

    let path = req.url;

    switch (path) {

        case "/":
            res.end ("hey");
        
        case "/x":
            return fs.readFile(__dirname + "/quick11.html", function (err, data) {
                res.writeHead(200, {"Content-Type": "text-html"});
                res.end(data);
            });
        
        case "/y":
            return fs.readFile(__dirname + "/quick22.html", function (err, data) {
                res.writeHead(200, {"Content-Type": "text-html"});
                res.end(data);
            });
    }
};

