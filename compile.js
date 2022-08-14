var LineByLineReader = require('line-by-line'), lr = new LineByLineReader('client.dpp');
let dispp = require("./main.js");

// lr.on('error', function (err) {});
let databaseTypes = ["sql","sqlite","mongodb"]

lr.on('line', function (line) {
    if (line == "" || line == " " || line.startsWith("//")) return;
    if (line.startsWith("token")) {
        let token = line.split(" ")[1];
        dispp.setToken(token);
    } else if (line.startsWith("database")) {
        let type = line.split(" ")[1];
        if (databaseTypes.includes(type)) {

        } else {
            lr.pause();
            return dispp.err("Unknown Database Type");
        }
    } else if (line.startsWith("start()")) {
        dispp.init();
    }
});

lr.on('end', function () {

});