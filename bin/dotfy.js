#!/usr/bin/env node

var dotfyLib = require("../lib/dotfy.js"),
    args = process.argv.slice(0);


args.shift();
args.shift();

new Dotfy(args);