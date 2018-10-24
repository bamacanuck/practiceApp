var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
// const PORT = process.env.PORT || 3000;
var PORT = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var units = [
    {
        routeName: "meter",
        name: "meter",
        type: "distance"

    },

    {
        routeName: "foot",
        name: "foot",
        type: "distance"

    },

    {
        routeName: "pound",
        name: "pound",
        type: "weight"

    },

    {
        routeName: "poundSterling",
        name: "pound sterling",
        type: "value"

    }
];

app.get("/", function(req, res) {
    // res.json(units);
    res.sendFile(path.join(__dirname, "viewx.html"));
    // res.send("hey");
});

app.get("/all", function(req, res) {
    // res.json(units);
    res.sendFile(path.join(__dirname, "allx.html"));
    // res.send("hey");
});

app.get("/add", function(req, res) {
    // res.json(units);
    res.sendFile(path.join(__dirname, "addx.html"));
    // res.send("hey");
});

app.get("/allUnits", function (req, res) {
    res.json(units);
});

app.get("/api/:unit?", function (req, res) {
    // note we've used "unit" - not "units" -
    // on the previous and next lines...
    // could've been any string, as long as
    // they're the same
    let target = req.params.unit;

    if (target) {
        console.log(target);
        
        for (let i = 0; i < units.length; i ++) {
            if (target == units[i].routeName) {
                return res.json(units[i]);
            }
        }

        return res.send("error - error - error");
    }

    return res.json(units);

});

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });