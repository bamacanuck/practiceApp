const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
// const PORT = process.env.PORT || 3000;
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

let units = [
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

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/allUnits", function (req, res) {
    res.json(units);
});

app.get("/api/:units?", function (req, res) {
    
    let target = req.params.units;

    if (target) {
        console.log(target);
        
        for (let i = 0; i < units.length; i ++) {
            if (target == units.routename) {
                return res.json(units[i]);
            }
        }

        return res.send("error - error - error");
    }

    return res.json(units);

});