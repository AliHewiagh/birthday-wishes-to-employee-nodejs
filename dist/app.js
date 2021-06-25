"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
var server_1 = __importDefault(require("server"));
var startServer = function () {
    var app = server_1.default();
    var port = parseInt(process.env.PORT, 10) || 4000;
    app.listen(port, function () {
        console.log("server running on port " + port);
    });
};
startServer();
