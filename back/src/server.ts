console.log("About to start a server...");

import { readdirSync } from "fs";
import api from "./api.js";
console.log("api: ", api);

const files = readdirSync(".");
console.log("files: ", files);
