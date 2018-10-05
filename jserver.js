// VITAL STEP ONE : load necessary (http) module/modules
let http = require ('http');

const PORT = 8080;

// const PORTTwo = 9999;

// VITAL STEP FOUR (in part): set the handler/handlers
function handleRequest (req, res) {
    // res.end("Here's your response. It's working. " + req.url);

    let path = req.url;

    switch (path) {

        case "/":
            return displayHome (path, req, res);

        case "/Two":
            return displayTwo (path, req, res);

        case "/Three":
            return displayThree (path, req, res);
    }
}

// function handleRequestX (req, res) {
//     res.end("Here's your response. It's working on this port, too. " + req.url);
//     // process.exit(0);
// }

// VITAL STEP TWO : declare the server
// VITAL STEP FOUR (in part): set the handler/handlers
const server = http.createServer(handleRequest);

// const serverTwo = http.createServer(handleRequestX);

// VITAL STEP THREE: set the listener
server.listen (PORT, function () {
    console.log("server now listening on port: " + PORT);
})

// serverTwo.listen (PORTTwo, function () {
//     console.log("server now listening on port: " + PORTTwo);
// })

function displayHome(url, req, res) {
    var ourHTML = "<html>" +
      "<body><h1>Home Page</h1>" +
      "<a href='/Two'>Go to Portfolio</a>" +
      "<a href='/Three'>Go to Third Page</a>" +
      "</body></html>";
  
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(ourHTML);
  }

function displayTwo(url, req, res) {
    var ourHTML = "<html>" +
      "<body><h1>Portfolio Page</h1>" +
      "<a href='/'>Go Home</a>" + "<br /> <br />" +
      "<a href='/Three'>Go to Third Page</a>" +
      "</body></html>";
  
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(ourHTML);
  }

  function displayThree(url, req, res) {
    var ourHTML = "<html>" +
      "<body><h1>Third Page</h1>" +
      "<a href='/'>Go Home</a>" + "<br /> <br />" +
      "<a href='/Two'>Go to Portfolio</a>" +
      "</body></html>";
  
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(ourHTML);
  }