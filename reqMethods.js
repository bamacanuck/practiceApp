// help:
// https://nodejs.org/api/stream.html#stream_event_data
// and:
// https://flaviocopes.com/node-request-data/

// from 13 Express 01 activities - folder 06

var http = require("http");

var PORT = 8080;

var server = http.createServer(handleRequest);

function handleRequest(req, res) {

  // Saving the request data as (initially, anyway) empty-string variable
  var reqData = "";

  // When the server receives data...
  req.on("data", function(data) {

    // Add it to requestData.
    reqData += data;
    // reqData = reqData + data;
  });

  // When the request has ended...
  req.on("end", function() {

    // Log (server-side) the request method, as well as the data received!
    console.log("You did a", req.method, "with the data:\n", reqData,"- demonstrating the employment of the method - from Postman.");
    // console.log("");
    // console.log(req);
    res.end();
  });

};

// Start our server
server.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT);
});
