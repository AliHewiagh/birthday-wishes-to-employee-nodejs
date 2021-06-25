"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var index_1 = __importDefault(require("routes/index"));
function createServer() {
    var app = express_1.default();
    app.get('/', function (req, res, next) {
        res.send('Hi from basix endpoint');
    });
    app.use(index_1.default);
    return app;
}
exports.default = createServer;
