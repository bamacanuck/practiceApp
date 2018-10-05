let http = require('http');

const PORT = 8083;

let server = http.createServer(handlerF);

server.listen (PORT, function () {
    console.log("yep, the server's listening - on port: " + PORT);
});

function handlerF (req, res) {
    path = req.url;

    switch (path) {

        case "/":

            let thisHTML = "<html> <body> <h1> THIS IS THE PAGE, Y'ALL !!! </h1> </body> </html>";
            res.end(thisHTML);

        case "/two":
            let thatHTML = "<html> <body> <h1> THIS IS THE SECOND PAGE, Y'ALL !!! </h1> </body> </html>";
            res.end(thatHTML);

        case "/three":
            let otherHTML = "<html> <body> <h1> THIS IS THE THIRD PAGE, Y'ALL !!! </h1> </body> </html>";
            res.end(otherHTML);

        default:
            let x = "<html> <body> <h1> INCORRECT - TRY AGAIN </h1> </body> </html>";
            res.end(x);
    }
};