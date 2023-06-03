"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const src_1 = __importDefault(require("./src"));
const http_1 = __importDefault(require("http"));
const server = http_1.default.createServer(src_1.default);
server.listen(process.env.PORT, () => console.log("http://localhost:" + process.env.PORT));
