"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var auth_1 = __importDefault(require("./auth"));
var greeting_1 = __importDefault(require("./greeting"));
var router = express_1.Router();
router.use('/employee', auth_1.default);
router.use('/greetings', greeting_1.default);
exports.default = router;
