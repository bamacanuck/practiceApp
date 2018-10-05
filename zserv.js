let http = require('http');

const PORT = 8083;

let server = http.createServer(handlerF);

server.listen (PORT, function () {
    console.log("yep, the server's listening - on port: " + PORT);
});

function handlerF (req, res) {
    path = req.url;
    let thisHTML = "<html> <body> <h1> THIS IS THE PAGE, Y'ALL !!! </h1> </body> </html>";
    res.end(thisHTML);
};