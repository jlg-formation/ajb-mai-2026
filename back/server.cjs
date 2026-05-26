console.log("About to start a server...");

const {readdirSync} = require('fs')
const api = require('./api.mjs')
console.log('api: ', api);

const files = readdirSync(".");
console.log('files: ', files);

