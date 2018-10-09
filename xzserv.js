const http = require("http");

const PORT = 8090;

let server = http.createServer(handleReq);

server.listen(PORT, function () {
    console.log("server now listening - port " + PORT);
});

function handleReq (req, res) {
    res.end ("hey");
};

