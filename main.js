/*
 * Official Disc++ language.
 * MIT License.
 * Copyright AhmadHrb. All Rights Reserved.
 */
let Discord = require("discord.js");
const client = new Discord.Client({
    intents: [],
    allowedMentions: { parse: [], repliedUser: false }
});

exports.token = "";
exports.database = "";

exports.init = function () {
this.log("Starting your Bot!");
client.login(exports.token);

}
exports.setToken = function (token) {
    this.token = token;
}
exports.db = function (type) {
    if (type == "sqlite") {

    } else if (type == "mongodb") {

    } else if (type == "sql") {

    }
    this.log("Connected to " + type + " database!");
}

exports.log = function (msg) {
    console.log("[LOG] " + msg);
}
exports.err = function (msg) {
    console.log("[ERROR] " + msg);
}
client.on("ready",function () {
    exports.log("Logged in as " + client.user.tag);
})