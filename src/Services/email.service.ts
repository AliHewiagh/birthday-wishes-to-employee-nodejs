import 'dotenv/config';
import EmailResponse from 'Models/email.response.model';
import Greeting from 'Models/greeting.model';
import { Service } from 'typedi';
const nodemailer = require('nodemailer');
const moment = require('moment');

@Service()
class EmailService {
    async send(greeting: Greeting): Promise<EmailResponse> {
        try {
            let transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: process.env.SENDER_EMAIL,
                    pass: process.env.SENDER_PASSWORD,
                },
            });
            let from = `Realm Digital <${process.env.SENDER_EMAIL}>`;
            const mailOptions = {
                from: from,
                to: process.env.RECEIVER_EMAIL || 'alihewaigh@gmail.com',
                subject: greeting.emailTemplate.subject,
                html: greeting.emailTemplate.content,
            };

            transporter.sendMail(mailOptions);

            const emailSuccessResponse = new EmailResponse(
                true,
                'Successfully Sent!',
                greeting.employee.name
            );
            console.log('emailSuccessResponse', emailSuccessResponse);

            return emailSuccessResponse;
        } catch (error) {
            const emailFailureResponse = new EmailResponse(
                false,
                error.message,
                greeting.employee.name
            );

            console.log('emailSuccessResponse', emailFailureResponse);
            return emailFailureResponse;
        }
    }
}

export default EmailService;
