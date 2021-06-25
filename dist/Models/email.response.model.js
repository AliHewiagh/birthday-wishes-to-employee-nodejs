"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EmailResponse = /** @class */ (function () {
    function EmailResponse(isSent, message, employeeName) {
        this.isSent = isSent;
        this.message = message;
        this.employeeName = employeeName;
    }
    return EmailResponse;
}());
exports.default = EmailResponse;
