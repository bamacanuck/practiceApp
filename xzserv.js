const http = require("http");

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
        
        
    }
};

