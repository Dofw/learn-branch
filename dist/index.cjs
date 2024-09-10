'use strict';

var fs = require('node:fs');

const a = "a module";

console.log(a);
console.log(fs.readFileSync("README.md", "utf-8"));
