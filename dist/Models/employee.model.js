"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Employee = /** @class */ (function () {
    function Employee(name, lastname, dateOfBirth, employmentStartDate, employmentEndDate, lastNotification) {
        this.name = name;
        this.lastname = lastname;
        this.dateOfBirth = dateOfBirth;
        this.employmentStartDate = employmentStartDate;
        this.employmentEndDate = employmentEndDate;
        this.lastNotification = lastNotification;
    }
    return Employee;
}());
exports.default = Employee;
