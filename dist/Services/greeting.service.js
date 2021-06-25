"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var greeting_type_1 = __importDefault(require("Enums/greeting.type"));
var typedi_1 = require("typedi");
var email_service_1 = __importDefault(require("./email.service"));
var email_template_model_1 = __importDefault(require("Models/email.template.model"));
var greeting_model_1 = __importDefault(require("Models/greeting.model"));
var moment = require('moment');
var GreetingsService = /** @class */ (function () {
    function GreetingsService(emailService) {
        this.emailService = emailService;
    }
    GreetingsService.prototype.greet = function (employees, greetingType) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            var _this = this;
            return __generator(this, function (_a) {
                response = [];
                employees.forEach(function (employee) { return __awaiter(_this, void 0, void 0, function () {
                    var greeting, emailResponse;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                greeting = new greeting_model_1.default(employee.name, this.buildEmailTemplate(greetingType, employee));
                                return [4 /*yield*/, this.emailService.send(greeting)];
                            case 1:
                                emailResponse = _a.sent();
                                response.push(emailResponse);
                                return [2 /*return*/];
                        }
                    });
                }); });
                return [2 /*return*/, response];
            });
        });
    };
    GreetingsService.prototype.buildEmailTemplate = function (type, employee) {
        switch (type) {
            case greeting_type_1.default.BIRTHDAY:
                var birthdayTemplate = new email_template_model_1.default('Best Birthday 🍰 🥳', "Happy Birthday " + employee.name + ", " + employee.lastname);
                return birthdayTemplate;
            default:
                var normalDayTemplate = new email_template_model_1.default('Hi From Realm ', "Have a great day " + employee.name + ", " + employee.lastname);
                return normalDayTemplate;
        }
    };
    GreetingsService.prototype.generateExcludedEmployeeParam = function (excludedEmployee) {
        var excludedParam = '';
        excludedEmployee.forEach(function (element) {
            excludedParam = excludedParam + "&id_ne=" + element;
        });
        return excludedParam;
    };
    GreetingsService.prototype.generateGreetingDateParam = function (greetingParameter) {
        var greetingDateParam = greetingParameter;
        var today = moment('2003-02-15T00:00:00');
        var month = ('0' + (today.month() + 1)).slice(-2);
        var day = ('0' + today.date()).slice(-2);
        greetingDateParam = "" + greetingDateParam + month + "-" + day;
        if (this.isLeapYear(today.year()) ||
            !(today.month() + 1 === 2 && today.date() == 28)) {
            return greetingDateParam;
        }
        return greetingDateParam + "&" + greetingParameter + "02-29";
    };
    GreetingsService.prototype.isLeapYear = function (year) {
        return year % 100 === 0 ? year % 400 === 0 : year % 4 === 0;
    };
    GreetingsService = __decorate([
        typedi_1.Service(),
        __metadata("design:paramtypes", [email_service_1.default])
    ], GreetingsService);
    return GreetingsService;
}());
exports.default = GreetingsService;
