"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var express_1 = require("express");
var typedi_1 = __importDefault(require("typedi"));
var router = express_1.Router();
// const employeeController = require('../controllers/employee.controller');
var employee_controller_1 = __importDefault(require("../controllers/employee.controller"));
var employeeController = typedi_1.default.get(employee_controller_1.default);
// @route GET /auth
// @desc Authenticate a user
// @access PUBLIC
// router.get('/', EmployeeController.);
router.get('/', function (req, res) { return employeeController.getEmployees(req, res); });
exports.default = router;
