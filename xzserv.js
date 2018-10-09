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
            return fs.readFile(__dirname + "/index.html", function (err, data) {
                res.end(data);
            });
    }
};

