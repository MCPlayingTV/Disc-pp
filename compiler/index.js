#!/usr/bin/env node

var LineByLineReader = require('line-by-line')
let dispp = require("../main.js");

// lr.on('error', function (err) {});
let databaseTypes = ["sql","sqlite","mongodb"]
const Yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')
const yargs = Yargs(hideBin(process.argv));
yargs.command('run [file]', "Run a dpp file", (yargs) => {
    return yargs
      .positional('file', {
        describe: 'dpp file to run.',
        default: "main.dpp"
      })
  }, (argv) => {
    if (argv.verbose) console.info(`[DPP] Starting :${argv.file}`)
    // console.log(process.chdir())
    dpp(argv.file);
  })
  .parse();

function dpp(file) {
    var lr = new LineByLineReader('./' + file);
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
}