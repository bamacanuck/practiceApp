const http = require ("http");

let PORT = 8100;

let server = http.createServer(handleReq);

server.listen(PORT, function () {
    console.log("success... server now listening - port " + PORT);
});

function handleReq (req, res) {
    let path = req.url;
    
    switch (path) {

        case "/":
            res.end("home page reached (congratulations)");

        case "/1":
            res.end("one one one one one");

        case "/2":
            res.end("two two two two two");

        default:
            res.end("404 error - nope nope nope nope nope");
    }
};