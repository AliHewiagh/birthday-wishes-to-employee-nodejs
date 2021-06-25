import EmailTemplate from './email.template.model';
import Employee from './employee.model';

class Greeting {
    employee: Employee;
    emailTemplate: EmailTemplate;
    constructor(employee: Employee, emailTemplate: EmailTemplate) {
        this.employee = employee;

        this.emailTemplate = emailTemplate;
    }
}

export default Greeting;
