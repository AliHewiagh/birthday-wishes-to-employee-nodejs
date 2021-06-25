import GreetingType from 'Enums/greeting.type';
import Employee from 'Models/employee.model';
import { Service } from 'typedi';
import EmailService from './email.service';
import EmailTemplate from 'Models/email.template.model';
import EmailResponse from 'Models/email.response.model';
import Greeting from 'Models/greeting.model';

@Service()
class GreetingsService {
    constructor(private readonly emailService: EmailService) {}

    async sendGreetingEmail(
        employees: Employee[],
        greetingType: string
    ): Promise<EmailResponse[]> {
        const response: EmailResponse[] = [];

        employees.forEach(async (employee) => {
            const greeting = new Greeting(
                employee,
                this.buildEmailTemplate(greetingType, employee)
            );
            const emailResponse = await this.emailService.send(greeting);

            response.push(emailResponse);
        });
        return response;
    }

    buildEmailTemplate(type: string, employee: Employee): EmailTemplate {
        switch (type) {
            case GreetingType.BIRTHDAY:
                const birthdayTemplate = new EmailTemplate(
                    'Best Birthday 🍰 🥳',
                    `Happy Birthday ${employee.name}, ${employee.lastname}`
                );
                return birthdayTemplate;

            default:
                const normalDayTemplate = new EmailTemplate(
                    'Hi, From Realm ',
                    `Have a great day ${employee.name}, ${employee.lastname}`
                );
                return normalDayTemplate;
        }
    }
}

export default GreetingsService;
