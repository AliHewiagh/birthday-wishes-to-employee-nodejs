class EmailResponse {
    isSent: boolean;
    message: string;
    employeeName: string;

    constructor(isSent: boolean, message: string, employeeName: string) {
        this.isSent = isSent;
        this.message = message;
        this.employeeName = employeeName;
    }
}

export default EmailResponse;
