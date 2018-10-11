const http = require("http");

const fs = require("fs");

const PORT = 8080;

let server = http.createServer(reqHandler);

server.listen(PORT, function () {
    console.log("server now listening on port " + PORT);
});

function reqHandler(req, res) {

    let path = req.url;

    switch (path) {

        case "/":
            return fs.readFile();
    }
};